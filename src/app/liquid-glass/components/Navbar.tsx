'use client'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a href="/liquid-glass" className={styles.brand}>Kreona <span>Company</span></a>

        <div className={styles.center}>
          <a href="#kontakt">Послуги</a>
          <a href="#kontakt">Підбір</a>
          <a href="#kontakt">Про нас</a>
        </div>

        <div className={styles.right}>
          <a href="#kontakt" className={styles.cta}>
            Консультація
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 12 L12 2 M5 2 H12 V9"/>
            </svg>
          </a>
        </div>

        <button className={styles.hamburger} onClick={() => setMenuOpen(true)} aria-label="Відкрити меню">
          <span/><span/><span/>
        </button>
      </nav>

      <div className={`${styles.drawer} ${menuOpen ? styles.open : ''}`} role="dialog" aria-modal="true">
        <div className={styles.drawerTop}>
          <a href="/liquid-glass" className={styles.drawerBrand} onClick={() => setMenuOpen(false)}>
            Kreona <span>Company</span>
          </a>
          <button className={styles.drawerClose} onClick={() => setMenuOpen(false)} aria-label="Закрити">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4 L20 20 M20 4 L4 20"/>
            </svg>
          </button>
        </div>
        <nav className={styles.drawerNav} aria-label="Мобільна навігація">
          <a href="#kontakt" onClick={() => setMenuOpen(false)}>Послуги</a>
          <a href="#kontakt" onClick={() => setMenuOpen(false)}>Підбір</a>
          <a href="#kontakt" onClick={() => setMenuOpen(false)}>Про нас</a>
        </nav>
        <a href="#kontakt" className={styles.drawerCta} onClick={() => setMenuOpen(false)}>
          Консультація
        </a>
      </div>
    </>
  )
}
