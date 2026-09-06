'use client'

import { useEffect, useState } from 'react'
import { BRAND, NAV } from '../brand'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMobile = () => setMenuOpen(false)

  return (
    <>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu">
        <button className="mobile-close" onClick={closeMobile} aria-label="Close menu">
          ×
        </button>
        <ul className="mobile-nav">
          {NAV.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={closeMobile}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <header className={scrolled ? 'scrolled' : undefined}>
        <a href="/grand-cru" className="header-logo">
          {BRAND.name}
        </a>
        <ul className="header-nav">
          {NAV.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </header>
    </>
  )
}
