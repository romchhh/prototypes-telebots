'use client'
import { useState, useEffect } from 'react'
import { BRAND } from '../brand'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Каталог', href: '#' },
  { label: 'Виробництво', href: '#' },
  { label: 'Для бізнесу', href: '#' },
  { label: 'Про нас', href: '#' },
  { label: 'Блог', href: '#' },
]

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
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <a href="/lake-alpha" className={styles.brand}>
          <span className={styles.logoMark}>h</span>
          <span className={styles.logoText}>
            <strong>{BRAND.name}</strong>
            <small>{BRAND.tagline}</small>
          </span>
        </a>

        <nav className={styles.center} aria-label="Головна навігація">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className={styles.right}>
          <a href="#kontakt" className={styles.ctaPrimary}>
            <span>Замовити консультацію</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 14 L14 2 M6 2 H14 V10"/>
              </svg>
            </span>
          </a>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(true)}
          aria-label="Відкрити меню"
        >
          <span /><span /><span />
        </button>
      </header>

      <div className={`${styles.drawer} ${menuOpen ? styles.open : ''}`} role="dialog" aria-modal="true">
        <button className={styles.drawerClose} onClick={() => setMenuOpen(false)} aria-label="Закрити">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 4 L20 20 M20 4 L4 20"/>
          </svg>
        </button>
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
        ))}
        <a href="#kontakt" className={styles.drawerCta} onClick={() => setMenuOpen(false)}>
          Замовити консультацію
        </a>
      </div>
    </>
  )
}
