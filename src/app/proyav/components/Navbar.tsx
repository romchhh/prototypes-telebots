'use client'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
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

  return (
    <>
      <nav className={`${styles.nav} ${transparent && !scrolled ? styles.transparent : styles.solid}`}>
        <a href="/proyav" className={styles.brand}>PRO<span>яв</span></a>

        <div className={styles.center}>
          <a href="#pro-podiyu">Про подію</a>
          <a href="#pro-podiyu">Програма</a>
          <a href="#kontakt">Контакти</a>
        </div>

        <div className={styles.right}>
          <div className={styles.lang}>
            <span className={styles.active}>UA</span>
            <span>EN</span>
          </div>
          <a href="#kvitky" className={styles.cta}>
            Купити квиток
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
        <button className={styles.drawerClose} onClick={() => setMenuOpen(false)} aria-label="Закрити">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
            <path d="M4 4 L24 24 M24 4 L4 24"/>
          </svg>
        </button>
        <a href="#pro-podiyu" onClick={() => setMenuOpen(false)}>Про подію</a>
        <a href="#pro-podiyu" onClick={() => setMenuOpen(false)}>Програма</a>
        <a href="#kontakt" onClick={() => setMenuOpen(false)}>Контакти</a>
        <a href="#kvitky" className={styles.drawerCta} onClick={() => setMenuOpen(false)}>
          Купити квиток
        </a>
      </div>
    </>
  )
}
