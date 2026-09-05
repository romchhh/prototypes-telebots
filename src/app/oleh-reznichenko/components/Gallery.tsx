'use client'
import Image from 'next/image'
import { useEffect, useCallback, useState } from 'react'
import { MENU_IMAGES } from '../brand'
import styles from './Gallery.module.css'

const TOP_SIZES = ['wide', 'tall', 'square', 'wide', 'square', 'tall', 'square', 'wide'] as const
const BOTTOM_SIZES = ['tall', 'square', 'wide', 'square', 'tall', 'wide', 'square', 'tall'] as const

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  const mid = Math.ceil(MENU_IMAGES.length / 2)
  const topRow = MENU_IMAGES.slice(0, mid)
  const bottomRow = MENU_IMAGES.slice(mid)

  const close = useCallback(() => setActive(null), [])
  const prev = useCallback(() => {
    setActive((i) => (i === null ? i : (i + MENU_IMAGES.length - 1) % MENU_IMAGES.length))
  }, [])
  const next = useCallback(() => {
    setActive((i) => (i === null ? i : (i + 1) % MENU_IMAGES.length))
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
    img: (typeof MENU_IMAGES)[number],
    index: number,
    size: string,
  ) => (
    <button
      key={img.src}
      type="button"
      className={`${styles.item} ${styles[size]}`}
      onClick={() => setActive(index)}
      aria-label={`Otwórz zdjęcie ${index + 1}`}
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
    <section id="menu" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 className={styles.heading}>
            Galeria<br />
            <em>autorskich dań</em>
          </h2>
          <p className={styles.lead}>
            Wybrane realizacje — estetyka talerza, smak i nowoczesne trendy gastronomiczne.
          </p>
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
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label="Podgląd zdjęcia">
          <button type="button" className={styles.backdrop} onClick={close} aria-label="Zamknij" />
          <div className={styles.lightboxInner}>
            <button type="button" className={styles.close} onClick={close} aria-label="Zamknij">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 4 L20 20 M20 4 L4 20"/>
              </svg>
            </button>
            <button type="button" className={styles.navBtn} onClick={prev} aria-label="Poprzednie">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 4 L7 12 L15 20"/>
              </svg>
            </button>
            <div className={styles.frame}>
              <Image
                src={MENU_IMAGES[active].src}
                alt={MENU_IMAGES[active].alt}
                fill
                sizes="90vw"
                className={styles.frameImg}
                priority
              />
            </div>
            <button type="button" className={`${styles.navBtn} ${styles.navNext}`} onClick={next} aria-label="Następne">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 4 L17 12 L9 20"/>
              </svg>
            </button>
            <p className={styles.counter}>{active + 1} / {MENU_IMAGES.length}</p>
          </div>
        </div>
      )}
    </section>
  )
}
