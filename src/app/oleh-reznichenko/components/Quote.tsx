import { BRAND } from '../brand'
import styles from './Quote.module.css'

export default function Quote() {
  return (
    <section className={styles.section} aria-label="Cytat">
      <blockquote className={styles.inner}>
        <p className={styles.text}>{BRAND.quote}</p>
        <footer className={styles.footer}>
          <cite>Oleh Reznichenko</cite>
          <span>{BRAND.title}</span>
        </footer>
      </blockquote>
    </section>
  )
}
