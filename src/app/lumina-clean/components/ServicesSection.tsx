'use client'
import Image from 'next/image'
import { SERVICE_IMAGES } from '../brand'
import { t } from '../copy'
import { useBooking, scrollToBooking } from '../booking'
import styles from './ServicesSection.module.css'

export default function ServicesSection() {
  const { service, setService } = useBooking()

  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 className={styles.heading}>
            {t.services.heading}<br />
            <em>{t.services.headingEm}</em>
          </h2>
          <p className={styles.lead}>{t.services.lead}</p>
        </div>

        <div className={styles.grid}>
          {t.services.items.map((item) => {
            const active = service === item.id
            const image = SERVICE_IMAGES[item.id]
            return (
              <button
                key={item.id}
                type="button"
                className={`${styles.card} ${active ? styles.active : ''}`}
                onClick={() => {
                  setService(item.id)
                  scrollToBooking()
                }}
              >
                {image && (
                  <span className={styles.media}>
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                      className={styles.mediaImg}
                    />
                  </span>
                )}
                <span className={styles.body}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                  <span className={styles.cardLink}>
                    {t.services.cta}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2 14 L14 2 M6 2 H14 V10" />
                    </svg>
                  </span>
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
