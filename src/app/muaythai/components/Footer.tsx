import PrototypeBanner from '../../components/PrototypeBanner'
import { BRAND, NAV } from '../brand'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.top}>
        <nav className={styles.links} aria-label="Навігація в підвалі">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
          <a href="/muaythai/pro-nas">Організація</a>
          <a href="/muaythai/trenery">Каталог тренерів</a>
        </nav>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h3>Графік</h3>
            <p>{BRAND.hours}</p>
            <p>{BRAND.hoursNote}</p>
          </div>

          <div className={styles.col}>
            <h3>Контакти</h3>
            <p>{BRAND.address}<br />{BRAND.city}</p>
            <p>{BRAND.phone}</p>
            <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          </div>

          <div className={styles.col}>
            <h3>Соцмережі</h3>
            <a href={BRAND.instagram}>INSTAGRAM</a>
            <a href={BRAND.telegram}>TELEGRAM</a>
            <a href={BRAND.facebook}>FACEBOOK</a>
          </div>
        </div>
      </div>

      <div className={styles.wordmark} aria-hidden="true">МУАЙТАЙ</div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Київська федерація муайтай</span>
        <a href="#kontakt">Пробне заняття</a>
      </div>
    </footer>
    <PrototypeBanner />
    </>
  )
}
