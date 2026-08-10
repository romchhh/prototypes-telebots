import PrototypeBanner from '../../components/PrototypeBanner'
import { BRAND } from '../brand'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <p className={styles.brand}>Юстиція</p>
            <p className={styles.tag}>Професійний юрист у Києві</p>
          </div>

          <div className={styles.cols}>
            <div className={styles.col}>
              <h3>Графік</h3>
              <p>Пн–Пт: 9:00 – 19:00</p>
              <p>Сб — за домовленістю</p>
            </div>
            <div className={styles.col}>
              <h3>Контакти</h3>
              <p>
                {BRAND.address}
                <br />
                {BRAND.city}
              </p>
              <p>{BRAND.phone}</p>
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
            </div>
            <div className={styles.col}>
              <h3>Навігація</h3>
              <a href="#contact">Послуги</a>
              <a href="#contact">Консультація</a>
              <a href="#contact">Зв&apos;язок</a>
            </div>
          </div>
        </div>

        <div className={styles.wordmark} aria-hidden="true">
          ЮСТИЦІЯ
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Юстиція. Усі права захищені.</span>
          <a href="#contact">Політика конфіденційності</a>
        </div>
      </footer>
      <PrototypeBanner />
    </>
  )
}
