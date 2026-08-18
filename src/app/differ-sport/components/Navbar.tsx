'use client'
import { useState, useEffect } from 'react'
import { SERVICES } from '../brand'
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
        <a href="/differ-sport" className={styles.brand}>differ</a>

        <div className={styles.center}>
          {SERVICES.map((s) => (
            <a key={s.slug} href={s.href}>{s.label}</a>
          ))}
        </div>

        <div className={styles.right}>
          <div className={styles.lang}>
            <span className={styles.active}>UA</span>
            <span>EN</span>
          </div>
          <a href="#kontakt" className={styles.cta}>
            Записатись
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 12 L12 2 M5 2 H12 V9"/>
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
        <div className={styles.drawerTop}>
          <a href="/differ-sport" className={styles.drawerBrand} onClick={() => setMenuOpen(false)}>
            differ
          </a>
          <button className={styles.drawerClose} onClick={() => setMenuOpen(false)} aria-label="Закрити">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4 L20 20 M20 4 L4 20"/>
            </svg>
          </button>
        </div>
        <nav className={styles.drawerNav} aria-label="Мобільна навігація">
          {SERVICES.map((s) => (
            <a key={s.slug} href={s.href} onClick={() => setMenuOpen(false)}>{s.label}</a>
          ))}
        </nav>
        <a href="#kontakt" className={styles.drawerCta} onClick={() => setMenuOpen(false)}>
          Записатись
        </a>
      </div>
    </>
  )
}
