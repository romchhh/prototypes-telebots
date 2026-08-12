'use client'
import { SERVICES } from '../brand'
import styles from './ServicesSection.module.css'

export default function ServicesSection() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Оберіть <em>послугу</em>
        </h2>
        <p className={styles.lead}>
          Навчання майбутніх асистентів або підбір досвідченого спеціаліста для вашої команди.
        </p>

        <div className={styles.grid}>
          {SERVICES.map((service) => (
            <a
              key={service.slug}
              href={service.href}
              className={styles.card}
              onClick={() => {
                window.dispatchEvent(new CustomEvent('pa-service', { detail: service.label }))
              }}
            >
              <span className={styles.orb} aria-hidden="true" />
              <h3 className={styles.cardTitle}>{service.label}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <span className={styles.cardLink}>
                Залишити заявку
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 14 L14 2 M6 2 H14 V10" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
