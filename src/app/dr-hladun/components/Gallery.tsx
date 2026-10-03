'use client'
import Image from 'next/image'
import { useEffect, useCallback, useState } from 'react'
import { GALLERY_IMAGES } from '../brand'
import { useLocale } from './LocaleContext'
import styles from './Gallery.module.css'

const TOP_SIZES = ['wide', 'tall', 'square', 'wide', 'square', 'tall'] as const
const BOTTOM_SIZES = ['tall', 'square', 'wide', 'square', 'tall', 'wide'] as const

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null)
  const { t } = useLocale()

  const mid = Math.ceil(GALLERY_IMAGES.length / 2)
  const topRow = GALLERY_IMAGES.slice(0, mid)
  const bottomRow = GALLERY_IMAGES.slice(mid)

  const close = useCallback(() => setActive(null), [])
  const prev = useCallback(() => {
    setActive((i) => (i === null ? i : (i + GALLERY_IMAGES.length - 1) % GALLERY_IMAGES.length))
  }, [])
  const next = useCallback(() => {
    setActive((i) => (i === null ? i : (i + 1) % GALLERY_IMAGES.length))
  }, [])

  useEffect(() => {
    if (active === null) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, close, prev, next])

  const renderItem = (
    img: (typeof GALLERY_IMAGES)[number],
    index: number,
    size: string,
  ) => (
    <button
      key={img.src}
      type="button"
      className={`${styles.item} ${styles[size]}`}
      onClick={() => setActive(index)}
      aria-label={`${t.galleryOpen} ${index + 1}`}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes="(max-width: 700px) 55vw, 280px"
        className={styles.img}
      />
    </button>
  )

  return (
    <section id="galeria" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 className={styles.heading}>
            {t.galleryHeading}<br />
            <em>{t.galleryHeadingEm}</em>
          </h2>
          <p className={styles.lead}>{t.galleryLead}</p>
        </div>
      </div>

      <div className={styles.scroller}>
        <div className={styles.track}>
          <div className={styles.row}>
            {topRow.map((img, i) =>
              renderItem(img, i, TOP_SIZES[i % TOP_SIZES.length]),
            )}
          </div>
          <div className={`${styles.row} ${styles.rowOffset}`}>
            {bottomRow.map((img, i) =>
              renderItem(img, mid + i, BOTTOM_SIZES[i % BOTTOM_SIZES.length]),
            )}
          </div>
        </div>
      </div>

      {active !== null && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={t.galleryOpen}>
          <button type="button" className={styles.backdrop} onClick={close} aria-label={t.closeMenu} />
          <div className={styles.lightboxInner}>
            <button type="button" className={styles.close} onClick={close} aria-label={t.closeMenu}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 4 L20 20 M20 4 L4 20"/>
              </svg>
            </button>
            <button type="button" className={styles.navBtn} onClick={prev} aria-label="Prev">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 4 L7 12 L15 20"/>
              </svg>
            </button>
            <div className={styles.frame}>
              <Image
                src={GALLERY_IMAGES[active].src}
                alt={GALLERY_IMAGES[active].alt}
                fill
                sizes="90vw"
                className={styles.frameImg}
                priority
              />
            </div>
            <button type="button" className={`${styles.navBtn} ${styles.navNext}`} onClick={next} aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 4 L17 12 L9 20"/>
              </svg>
            </button>
            <p className={styles.counter}>{active + 1} / {GALLERY_IMAGES.length}</p>
          </div>
        </div>
      )}
    </section>
  )
}
