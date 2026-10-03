'use client'
import { BRAND } from '../brand'
import { useLocale } from './LocaleContext'
import styles from './Quote.module.css'

export default function Quote() {
  const { t } = useLocale()

  return (
    <section className={styles.section} aria-label="Quote">
      <blockquote className={styles.inner}>
        <p className={styles.text}>{t.quote}</p>
        <footer className={styles.footer}>
          <cite>Dr. {BRAND.firstName} {BRAND.lastName}</cite>
          <span>{t.quoteRole}</span>
        </footer>
      </blockquote>
    </section>
  )
}
