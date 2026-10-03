'use client'
import Image from 'next/image'
import { BOOKING_PLATFORMS, BRAND, CLINICS } from '../brand'
import { useLocale } from './LocaleContext'
import styles from './ContactSection.module.css'

export default function ContactSection() {
  const { t } = useLocale()

  return (
    <section id="kontakt" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 className={styles.heading}>
            {t.contactHeading}<br /><em>{t.contactHeadingEm}</em>
          </h2>
          <p className={styles.lead}>{t.contactLead}</p>
        </div>

        <div className={styles.panel}>
          <div className={styles.visual}>
            <Image
              src={BRAND.contactImage}
              alt="Dr. Taras Hladun"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
              className={styles.img}
            />
            <div className={styles.visualOverlay} aria-hidden="true" />
            <div className={styles.visualContent}>
              <p className={styles.visualText}>{t.contactVisual}</p>
              <div className={styles.visualContacts}>
                <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
                <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer">
                  {BRAND.instagramHandle}
                </a>
                <span>{BRAND.address}</span>
              </div>
            </div>
          </div>

          <div className={styles.formCard}>
            <p className={styles.formTitle}>{t.bookingTitle}</p>
            <p className={styles.formNote}>{t.bookingHint}</p>

            <div className={styles.platforms}>
              {BOOKING_PLATFORMS.map((platform) => {
                const desc = t[platform.descKey]
                const isSoon = 'comingSoon' in platform && platform.comingSoon
                if (isSoon) {
                  return (
                    <div key={platform.id} className={`${styles.platform} ${styles.platformSoon}`}>
                      <div>
                        <strong>{platform.name}</strong>
                        <span>{desc}</span>
                      </div>
                      <em>{t.comingSoon}</em>
                    </div>
                  )
                }
                return (
                  <a
                    key={platform.id}
                    href={platform.href}
                    className={styles.platform}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <strong>{platform.name}</strong>
                      <span>{desc}</span>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2 14 L14 2 M6 2 H14 V10"/>
                    </svg>
                  </a>
                )
              })}
            </div>

            <p className={styles.clinicsTitle}>{t.clinicsTitle}</p>
            <div className={styles.clinics}>
              {CLINICS.map((clinic) => (
                <a
                  key={clinic.name}
                  href={clinic.href}
                  className={styles.clinic}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>{clinic.name}</strong>
                  <span>{clinic.city}</span>
                </a>
              ))}
            </div>
            <p className={styles.clinicsNote}>{t.clinicsNote}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
