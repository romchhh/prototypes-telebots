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
        <a href="/lake-alpha-dente" className={styles.brand}>Hut<span>Jet</span></a>

        <div className={styles.center}>
          <a href="#kontakt">Каталог</a>
          <a href="#kontakt">Реалізації</a>
          <a href="#kontakt">Про нас</a>
        </div>

        <div className={styles.right}>
          <div className={styles.lang}>
            <span className={styles.active}>UA</span>
            <span>EN</span>
          </div>
          <a href="#kontakt" className={styles.ctaPrimary}>
            <span>Замовити консультацію</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 14 L14 2 M6 2 H14 V10"/>
              </svg>
            </span>
          </a>
        </div>

        <button className={styles.hamburger} onClick={() => setMenuOpen(true)} aria-label="Відкрити меню">
          <span/><span/><span/>
        </button>
      </nav>

      <div className={`${styles.drawer} ${menuOpen ? styles.open : ''}`} role="dialog" aria-modal="true">
        <div className={styles.drawerTop}>
          <a href="/lake-alpha-dente" className={styles.drawerBrand} onClick={() => setMenuOpen(false)}>
            Hut<span>Jet</span>
          </a>
          <button className={styles.drawerClose} onClick={() => setMenuOpen(false)} aria-label="Закрити">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4 L20 20 M20 4 L4 20"/>
            </svg>
          </button>
        </div>
        <nav className={styles.drawerNav} aria-label="Мобільна навігація">
          <a href="#" onClick={() => setMenuOpen(false)}>Каталог</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Реалізації</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Про нас</a>
        </nav>
        <a href="#kontakt" className={styles.drawerCta} onClick={() => setMenuOpen(false)}>
          <span>Замовити консультацію</span>
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
