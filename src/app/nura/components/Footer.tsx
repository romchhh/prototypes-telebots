import PrototypeBanner from '../../components/PrototypeBanner'
import { BRAND } from '../brand'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.top}>
          <nav className={styles.links} aria-label="Навігація в підвалі">
            <a href="#">Про клініку</a>
            <a href="#">Послуги</a>
            <a href="#">Прайс</a>
            <a href="#">Відгуки</a>
          </nav>

          <div className={styles.cols}>
            <div className={styles.col}>
              <h3>Графік роботи</h3>
              <p>Пн–Сб: 10:00 – 20:00</p>
              <p>Неділя — за записом</p>
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
        </div>

        <div className={styles.wordmark} aria-hidden="true">NURA</div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Nura. Усі права захищені.</span>
          <a href="#">Політика конфіденційності</a>
        </div>
      </footer>
      <PrototypeBanner />
    </>
  )
}
