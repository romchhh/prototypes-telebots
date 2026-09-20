'use client'
import PrototypeBanner from '../../components/PrototypeBanner'
import { BRAND } from '../brand'
import { t } from '../copy'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.top}>
        <nav className={styles.links} aria-label={t.footer.navLabel}>
          {t.footer.links.map((label, i) => (
            <a key={label} href={i === 1 ? '#services' : '#book'}>{label}</a>
          ))}
        </nav>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h3>{t.footer.hours}</h3>
            <p>{t.footer.hoursWeek}</p>
            <p>{t.footer.hoursSun}</p>
          </div>

          <div className={styles.col}>
            <h3>{t.footer.contactsTitle}</h3>
            <p>{BRAND.address}<br />{BRAND.city}</p>
            <p>{BRAND.phone}</p>
            <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          </div>

          <div className={styles.col}>
            <h3>{t.footer.social}</h3>
            <a href="#">INSTAGRAM</a>
            <a href="#">FACEBOOK</a>
            <a href="#">YELP</a>
          </div>
        </div>
      </div>

      <div className={styles.wordmark} aria-hidden="true">LUMINA</div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} {BRAND.name}. {t.footer.rights}</span>
        <a href="#">{t.footer.privacy}</a>
      </div>
    </footer>
    <PrototypeBanner />
    </>
  )
}
