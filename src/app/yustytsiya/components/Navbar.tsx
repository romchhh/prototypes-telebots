'use client'
import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <nav className={`${styles.nav} ${transparent && !scrolled ? styles.transparent : styles.solid}`}>
        <a href="/yustytsiya" className={styles.brand}>
          Юсти<span>ція</span>
        </a>

        <div className={styles.center}>
          <a href="#contact">Послуги</a>
          <a href="#contact">Практика</a>
          <a href="#contact">Контакти</a>
        </div>

        <div className={styles.right}>
          <a href="#contact" className={styles.cta}>
            Консультація
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 12 L12 2 M5 2 H12 V9" />
            </svg>
          </a>
        </div>

        <button className={styles.menuBtn} onClick={() => setMenuOpen(true)} aria-label="Відкрити меню">
          [menu]
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M2 14 L14 2 M6 2 H14 V10" />
          </svg>
        </button>
      </nav>

      <div className={`${styles.drawer} ${menuOpen ? styles.open : ''}`} role="dialog" aria-modal="true">
        <button className={styles.drawerClose} onClick={() => setMenuOpen(false)} aria-label="Закрити">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <path d="M4 4 L24 24 M24 4 L4 24" />
          </svg>
        </button>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Послуги
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Практика
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Контакти
        </a>
        <a href="#contact" className={styles.drawerCta} onClick={() => setMenuOpen(false)}>
          Консультація
        </a>
      </div>
    </>
  )
}
