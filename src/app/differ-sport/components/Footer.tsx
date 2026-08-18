import PrototypeBanner from '../../components/PrototypeBanner'
import { BRAND, SERVICES, SOCIALS } from '../brand'
import { SOCIAL_ICONS } from '../socialIcons'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.top}>
        <nav className={styles.links} aria-label="Навігація в підвалі">
          {SERVICES.map((s) => (
            <a key={s.slug} href={s.href}>{s.label}</a>
          ))}
          <a href="#kontakt">Контакти</a>
        </nav>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h3>Формати</h3>
            <p>Тренування та тренер</p>
            <p>Підписка і цифрові продукти</p>
          </div>

          <div className={styles.col}>
            <h3>Контакти</h3>
            <p>{BRAND.address}<br />{BRAND.city}</p>
            <p>{BRAND.phone}</p>
            <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          </div>

          <div className={styles.col}>
            <h3>Соціальні мережі</h3>
            <div className={styles.socials}>
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} className={styles.social} aria-label={s.label}>
                  <span className={styles.socialIcon}>{SOCIAL_ICONS[s.label]}</span>
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.wordmark} aria-hidden="true">differ</div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Differ Sport. Усі права захищені.</span>
        <a href="#">Політика конфіденційності</a>
      </div>
    </footer>
    <PrototypeBanner />
    </>
  )
}
