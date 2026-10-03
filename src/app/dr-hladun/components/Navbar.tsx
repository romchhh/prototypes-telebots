'use client'
import { useState, useEffect } from 'react'
import { LOCALES } from '../i18n'
import { useBooking } from './BookingContext'
import { useLocale } from './LocaleContext'
import styles from './Navbar.module.css'

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <a href="/dr-hladun" className={styles.brand} onClick={onClick}>
      <span className={styles.brandRed}>Dr.</span>
      <span className={styles.brandName}>Hladun</span>
    </a>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { openBooking } = useBooking()
  const { locale, setLocale, t } = useLocale()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { href: '#o-mnie', label: t.navAbout },
    { href: '#uslugi', label: t.navServices },
    { href: '#doswiadczenie', label: t.navExperience },
    { href: '#galeria', label: t.navGallery },
    { href: '#kontakt', label: t.navContact },
  ]

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.solid : styles.top}`}>
        <Logo />

        <div className={styles.center}>
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>

        <div className={styles.right}>
          <div className={styles.lang}>
            {LOCALES.map((item) => (
              <button
                key={item.id}
                type="button"
                className={locale === item.id ? styles.active : undefined}
                onClick={() => setLocale(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button type="button" className={styles.ctaPrimary} onClick={() => openBooking()}>
            <span>{t.ctaConsult}</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 14 L14 2 M6 2 H14 V10"/>
              </svg>
            </span>
          </button>
        </div>

        <button className={styles.menuBtn} onClick={() => setMenuOpen(true)} aria-label={t.openMenu}>
          [menu]
          <span className={styles.menuArrow} aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 14 L14 2 M6 2 H14 V10"/>
            </svg>
          </span>
        </button>
      </nav>

      <div className={`${styles.drawer} ${menuOpen ? styles.open : ''}`} role="dialog" aria-modal="true">
        <div className={styles.drawerTop}>
          <Logo onClick={() => setMenuOpen(false)} />
          <button className={styles.drawerClose} onClick={() => setMenuOpen(false)} aria-label={t.closeMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4 L20 20 M20 4 L4 20"/>
            </svg>
          </button>
        </div>
        <div className={styles.drawerLang}>
          {LOCALES.map((item) => (
            <button
              key={item.id}
              type="button"
              className={locale === item.id ? styles.active : undefined}
              onClick={() => setLocale(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <nav className={styles.drawerNav} aria-label="Mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
          ))}
        </nav>
        <button
          type="button"
          className={styles.drawerCta}
          onClick={() => {
            setMenuOpen(false)
            openBooking()
          }}
        >
          <span>{t.ctaConsult}</span>
          <span className={styles.drawerCtaArrow} aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 14 L14 2 M6 2 H14 V10"/>
            </svg>
          </span>
        </button>
      </div>
    </>
  )
}
