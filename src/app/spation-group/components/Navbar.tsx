'use client'

import { useState, useEffect } from 'react'
import { useLang, type Lang } from '../i18n'
import styles from './Navbar.module.css'

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
  const { lang, setLang, t } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const switchLang = (next: Lang) => () => setLang(next)

  const links = [
    { href: '#kontakt', label: t.nav.about },
    { href: '#kontakt', label: t.nav.services },
    { href: '#kontakt', label: t.nav.projects },
    { href: '#kontakt', label: t.nav.contacts },
  ] as const

  return (
    <>
      <nav className={`${styles.nav} ${transparent && !scrolled ? styles.transparent : styles.solid}`}>
        <a href="/spation-group" className={styles.brand}>spation group</a>

        <div className={styles.center}>
          {links.map((link) => (
            <a key={link.label} href={link.href}>{link.label}</a>
          ))}
        </div>

        <div className={styles.right}>
          <div className={styles.lang}>
            <button
              type="button"
              className={lang === 'ua' ? styles.active : undefined}
              onClick={switchLang('ua')}
              aria-pressed={lang === 'ua'}
            >
              UA
            </button>
            <button
              type="button"
              className={lang === 'en' ? styles.active : undefined}
              onClick={switchLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>
          <a href="#kontakt" className={styles.ctaPrimary}>
            <span>{t.nav.cta}</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 14 L14 2 M6 2 H14 V10"/>
              </svg>
            </span>
          </a>
        </div>

        <button className={styles.menuBtn} onClick={() => setMenuOpen(true)} aria-label={t.nav.openMenu}>
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
          <a href="/spation-group" className={styles.drawerBrand} onClick={() => setMenuOpen(false)}>
            spation group
          </a>
          <button className={styles.drawerClose} onClick={() => setMenuOpen(false)} aria-label={t.nav.closeMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4 L20 20 M20 4 L4 20"/>
            </svg>
          </button>
        </div>
        <div className={styles.drawerLang}>
          <button
            type="button"
            className={lang === 'ua' ? styles.active : undefined}
            onClick={switchLang('ua')}
            aria-pressed={lang === 'ua'}
          >
            UA
          </button>
          <button
            type="button"
            className={lang === 'en' ? styles.active : undefined}
            onClick={switchLang('en')}
            aria-pressed={lang === 'en'}
          >
            EN
          </button>
        </div>
        <nav className={styles.drawerNav} aria-label={t.nav.mobileNav}>
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
          ))}
        </nav>
        <a href="#kontakt" className={styles.drawerCta} onClick={() => setMenuOpen(false)}>
          <span>{t.nav.cta}</span>
          <span className={styles.drawerCtaArrow} aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 14 L14 2 M6 2 H14 V10"/>
            </svg>
          </span>
        </a>
      </div>
    </>
  )
}
