'use client'
import styles from './FloatingCta.module.css'

export default function FloatingCta() {
  return (
    <a href="#kontakt" className={styles.fab} aria-label="Приєднатися до марафону">
      <span className={styles.label}>Приєднатися</span>
      <span className={styles.discount}>-80%</span>
      <svg className={styles.arrow} width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 14 L14 2 M6 2 H14 V10" />
      </svg>
    </a>
  )
}
