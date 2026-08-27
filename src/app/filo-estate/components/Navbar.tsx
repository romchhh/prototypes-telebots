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
        <a href="/filo-estate" className={styles.brand}>filo</a>

        <div className={styles.center}>
          <a href="#kontakt">Объекты</a>
          <a href="#kontakt">Подборки</a>
          <a href="#kontakt">О нас</a>
        </div>

        <div className={styles.right}>
          <div className={styles.lang}>
            <span className={styles.active}>RU</span>
            <span>EN</span>
          </div>
          <a href="#kontakt" className={styles.ctaPrimary}>
            <span>Получить консультацию</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 14 L14 2 M6 2 H14 V10"/>
              </svg>
            </span>
          </a>
        </div>

        <button className={styles.menuBtn} onClick={() => setMenuOpen(true)} aria-label="Открыть меню">
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
          <a href="/filo-estate" className={styles.drawerBrand} onClick={() => setMenuOpen(false)}>
            filo
          </a>
          <button className={styles.drawerClose} onClick={() => setMenuOpen(false)} aria-label="Закрыть">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4 L20 20 M20 4 L4 20"/>
            </svg>
          </button>
        </div>
        <nav className={styles.drawerNav} aria-label="Мобильная навигация">
          <a href="#kontakt" onClick={() => setMenuOpen(false)}>Объекты</a>
          <a href="#kontakt" onClick={() => setMenuOpen(false)}>Подборки</a>
          <a href="#kontakt" onClick={() => setMenuOpen(false)}>О нас</a>
        </nav>
        <a href="#kontakt" className={styles.drawerCta} onClick={() => setMenuOpen(false)}>
          <span>Получить консультацию</span>
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
