'use client'
import { useState, useEffect } from 'react'
import { BRAND } from '../brand'
import { useBooking } from './BookingContext'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { openBooking } = useBooking()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.solid : styles.top}`}>
        <a href="/oleh-reznichenko" className={styles.brand}>
          <span className={styles.brandName}>{BRAND.shortName}</span>
          <span className={styles.brandSub}>{BRAND.subName}</span>
          <span className={styles.brandScript}>{BRAND.tagline}</span>
        </a>

        <div className={styles.center}>
          <a href="#o-mnie">O mnie</a>
          <a href="#uslugi">Usługi</a>
          <a href="#doswiadczenie">Doświadczenie</a>
          <a href="#menu">Menu</a>
          <a href="#kontakt">Kontakt</a>
        </div>

        <div className={styles.right}>
          <div className={styles.lang}>
            <span className={styles.active}>PL</span>
            <span>EN</span>
          </div>
          <button type="button" className={styles.ctaPrimary} onClick={() => openBooking()}>
            <span>Omów współpracę</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 14 L14 2 M6 2 H14 V10"/>
              </svg>
            </span>
          </button>
        </div>

        <button className={styles.menuBtn} onClick={() => setMenuOpen(true)} aria-label="Otwórz menu">
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
          <a href="/oleh-reznichenko" className={styles.brand} onClick={() => setMenuOpen(false)}>
            <span className={styles.brandName}>{BRAND.shortName}</span>
            <span className={styles.brandSub}>{BRAND.subName}</span>
            <span className={styles.brandScript}>{BRAND.tagline}</span>
          </a>
          <button className={styles.drawerClose} onClick={() => setMenuOpen(false)} aria-label="Zamknij">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4 L20 20 M20 4 L4 20"/>
            </svg>
          </button>
        </div>
        <nav className={styles.drawerNav} aria-label="Nawigacja mobilna">
          <a href="#o-mnie" onClick={() => setMenuOpen(false)}>O mnie</a>
          <a href="#uslugi" onClick={() => setMenuOpen(false)}>Usługi</a>
          <a href="#doswiadczenie" onClick={() => setMenuOpen(false)}>Doświadczenie</a>
          <a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a>
          <a href="#kontakt" onClick={() => setMenuOpen(false)}>Kontakt</a>
        </nav>
        <button
          type="button"
          className={styles.drawerCta}
          onClick={() => {
            setMenuOpen(false)
            openBooking()
          }}
        >
          <span>Omów współpracę</span>
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
