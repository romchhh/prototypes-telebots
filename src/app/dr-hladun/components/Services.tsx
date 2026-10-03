'use client'
import Image from 'next/image'
import { OFFERINGS } from '../brand'
import { useBooking } from './BookingContext'
import { useLocale } from './LocaleContext'
import styles from './Services.module.css'

export default function Services() {
  const { openBooking } = useBooking()
  const { t } = useLocale()

  return (
    <section id="uslugi" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            {t.servicesHeading}<br />
            <em>{t.servicesHeadingEm}</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {OFFERINGS.map((item, i) => {
            const copy = t.offerings[item.id]
            return (
              <article key={item.id} className={styles.card}>
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 980px) 50vw, 33vw"
                  className={styles.bg}
                />
                <div className={styles.overlay} aria-hidden="true" />
                <div className={styles.content}>
                  <span className={styles.num} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className={styles.title}>{copy.title}</h3>
                  <p className={styles.desc}>{copy.desc}</p>
                  <button
                    type="button"
                    className={`${styles.moreBtn} ${styles[item.btn]}`}
                    onClick={() => openBooking(copy.title)}
                  >
                    {t.servicesMore}
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2 14 L14 2 M6 2 H14 V10"/>
                    </svg>
                  </button>
                </div>
              </article>
            )
          })}
        </div>

        <div className={styles.ctaWrap}>
          <button type="button" className={styles.cta} onClick={() => openBooking()}>
            {t.ctaConsult}
            <span className={styles.ctaArrow} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 14 L14 2 M6 2 H14 V10"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
