import styles from './PrototypeBanner.module.css'

export default function PrototypeBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.inner}>
        <p className={styles.label}>Прототип</p>
        <p className={styles.title}>
          Розроблено <a href="https://telebots.site/uk" target="_blank" rel="noopener noreferrer">TeleBots</a>
        </p>
        <p className={styles.sub}>
          Це демо-версія сайту для презентації клієнту. Перейдіть на{' '}
          <a href="https://telebots.site/uk" target="_blank" rel="noopener noreferrer">telebots.site</a>
          , щоб замовити розробку.
        </p>
        <a href="https://telebots.site/uk" target="_blank" rel="noopener noreferrer" className={styles.cta}>
          telebots.site
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M2 14 L14 2 M6 2 H14 V10"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
