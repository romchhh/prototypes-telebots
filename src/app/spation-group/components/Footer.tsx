'use client'

import PrototypeBanner from '../../components/PrototypeBanner'
import { BRAND } from '../brand'
import { useLang } from '../i18n'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLang()

  const links = [
    { href: '#kontakt', label: t.nav.about },
    { href: '#kontakt', label: t.nav.services },
    { href: '#kontakt', label: t.nav.projects },
    { href: '#kontakt', label: t.nav.contacts },
  ] as const

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.top}>
          <nav className={styles.links} aria-label={t.footer.navLabel}>
            {links.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
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
              <a href="#">TELEGRAM</a>
              <a href="#">LINKEDIN</a>
            </div>
          </div>
        </div>

        <div className={styles.wordmark} aria-hidden="true">spation group</div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Spation Group. {t.footer.rights}</span>
          <a href="#">{t.footer.privacy}</a>
        </div>
      </footer>
      <PrototypeBanner />
    </>
  )
}
