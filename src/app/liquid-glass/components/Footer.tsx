import PrototypeBanner from '../../components/PrototypeBanner'
import { BRAND } from '../brand'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.glass}>
          <nav className={styles.links} aria-label="Навігація в підвалі">
            <a href="#">Про компанію</a>
            <a href="#">Послуги</a>
            <a href="#">Автомобілі</a>
            <a href="#">Відгуки</a>
          </nav>

          <div className={styles.cols}>
            <div className={styles.col}>
              <h3>Графік</h3>
              <p>Пн–Сб: 09:00 – 19:00</p>
              <p>Неділя — вихідний</p>
            </div>
            <div className={styles.col}>
              <h3>Контакти</h3>
              <p>{BRAND.address}<br />{BRAND.city}</p>
              <p>{BRAND.phone}</p>
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
            </div>
            <div className={styles.col}>
              <h3>Соцмережі</h3>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Telegram</a>
            </div>
          </div>

          <div className={styles.wordmark} aria-hidden="true">KREONA</div>

          <div className={styles.bottom}>
            <span>© {new Date().getFullYear()} Kreona Company</span>
            <a href="#">Політика конфіденційності</a>
          </div>
        </div>
      </footer>
      <PrototypeBanner />
    </>
  )
}
