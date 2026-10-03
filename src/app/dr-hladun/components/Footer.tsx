'use client'
import PrototypeBanner from '../../components/PrototypeBanner'
import { BRAND, SOCIALS } from '../brand'
import { useLocale } from './LocaleContext'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLocale()

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.top}>
          <nav className={styles.links} aria-label="Footer">
            <a href="#o-mnie">{t.navAbout}</a>
            <a href="#uslugi">{t.navServices}</a>
            <a href="#doswiadczenie">{t.navExperience}</a>
            <a href="#galeria">{t.navGallery}</a>
            <a href="#kontakt">{t.navContact}</a>
          </nav>

          <div className={styles.cols}>
            <div className={styles.col}>
              <h3>{t.footerRole}</h3>
              <p>{t.footerRoleLine1}</p>
              <p>{t.footerRoleLine2}</p>
            </div>

            <div className={styles.col}>
              <h3>{t.footerContact}</h3>
              <p>{BRAND.address}</p>
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
              <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer">
                {BRAND.instagramHandle}
              </a>
            </div>

            <div className={styles.col}>
              <h3>{t.footerSocial}</h3>
              {SOCIALS.map((s) => (
                <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Dr. Taras Hladun. {t.footerRights}</span>
          <a href="#">{t.footerPrivacy}</a>
        </div>
      </footer>
      <PrototypeBanner />
    </>
  )
}
