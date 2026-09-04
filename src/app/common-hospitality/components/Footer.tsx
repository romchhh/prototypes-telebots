import PrototypeBanner from '../../components/PrototypeBanner'
import { BRAND } from '../brand'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.top}>
        <nav className={styles.links} aria-label="Навігація в підвалі">
          <a href="#kontakt">Про нас</a>
          <a href="#kontakt">Послуги</a>
          <a href="#kontakt">Проєкти</a>
          <a href="#kontakt">Переваги</a>
          <a href="#kontakt">Контакти</a>
        </nav>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h3>Графік роботи</h3>
            <p>Пн–Пт: 10:00 – 19:00</p>
            <p>Сб–Нд — за домовленістю</p>
          </div>

          <div className={styles.col}>
            <h3>Контакти</h3>
            <p>{BRAND.address}<br />{BRAND.city}</p>
            <p>{BRAND.phone}</p>
            <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          </div>

          <div className={styles.col}>
            <h3>Соціальні мережі</h3>
            <a href="#">INSTAGRAM</a>
            <a href="#">TELEGRAM</a>
            <a href="#">LINKEDIN</a>
          </div>
        </div>
      </div>

      <div className={styles.wordmark} aria-hidden="true">commons</div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Commons Hospitality. Усі права захищено.</span>
        <a href="#">Політика конфіденційності</a>
      </div>
    </footer>
    <PrototypeBanner />
    </>
  )
}
