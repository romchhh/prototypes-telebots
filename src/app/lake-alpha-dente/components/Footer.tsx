import PrototypeBanner from '../../components/PrototypeBanner'
import { BRAND } from '../brand'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.top}>
        <nav className={styles.links} aria-label="Навігація в підвалі">
          <a href="#">Про компанію</a>
          <a href="#">Каталог</a>
          <a href="#">Моделі</a>
          <a href="#">Історії клієнтів</a>
          <a href="#">Відгуки</a>
        </nav>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h3>Графік роботи</h3>
            <p>Пн–Сб: 10:00 – 20:00</p>
            <p>Неділя — вихідний</p>
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
            <a href="#">FACEBOOK</a>
            <a href="#">TIKTOK</a>
          </div>
        </div>
      </div>

      <div className={styles.wordmark} aria-hidden="true">HUTJET</div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} HutJet. Усі права захищені.</span>
        <a href="#">Політика конфіденційності</a>
      </div>
    </footer>
    <PrototypeBanner />
    </>
  )
}
