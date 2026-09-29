'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BRAND, NAV } from '../../cartel/brand'
import styles from './Navbar.module.css'

const Chevron = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2 4 L6 8 L10 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const locations = ['Буковель', 'Яремче', 'Одеса']

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.solid : styles.transparent}`}>
        <div className={styles.left}>
          <button
            type="button"
            className={styles.menuToggle}
            aria-label="Меню"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span /><span /><span />
          </button>
          <div className={styles.locWrap}>
            <button
              type="button"
              className={styles.navLink}
              aria-expanded={locationsOpen}
              onClick={() => setLocationsOpen((v) => !v)}
            >
              Локації
              <Chevron />
            </button>
            {locationsOpen && (
              <ul className={styles.dropdown} role="list">
                {locations.map((city) => (
                  <li key={city}>
                    <button type="button" onClick={() => setLocationsOpen(false)}>{city}</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <a href="/cartel-v2" className={styles.brand} aria-label="Cartel">
          <Image
            src={scrolled ? BRAND.logoBlack : BRAND.logoWhite}
            alt="Cartel"
            width={168}
            height={40}
            className={styles.brandImg}
            priority
          />
        </a>

        <div className={styles.right}>
          <a href="#kontakt" className={styles.navLink}>
            Бронювання
            <Chevron />
          </a>
          <button type="button" className={styles.navLink} aria-label="Мова UA">
            UA
            <Chevron />
          </button>
        </div>
      </header>

      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`} role="dialog" aria-modal="true">
        <div className={styles.drawerHead}>
          <Image src={BRAND.logoBlack} alt="" width={120} height={28} />
          <button type="button" className={styles.drawerClose} onClick={() => setMenuOpen(false)} aria-label="Закрити">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4 L20 20 M20 4 L4 20" />
            </svg>
          </button>
        </div>
        <nav className={styles.drawerNav} aria-label="Навігація">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
        </nav>
        <a href="#kontakt" className={styles.drawerCta} onClick={() => setMenuOpen(false)}>
          Звʼязатися
        </a>
      </div>
    </>
  )
}
