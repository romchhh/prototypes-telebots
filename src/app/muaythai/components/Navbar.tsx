'use client'
import { useState, useEffect, useRef } from 'react'
import { NAV } from '../brand'
import styles from './Navbar.module.css'

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [lang, setLang] = useState<'UA' | 'EN'>('UA')
  const langRef = useRef<HTMLDivElement>(null)

  const onHero = transparent && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    if (!langOpen) return
    const onPointer = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLangOpen(false)
    }
    document.addEventListener('mousedown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [langOpen])

  const primary = NAV.filter((item) =>
    ['Федерація', 'Новини', 'Клуби', 'Тренери', 'Події', 'Контакти'].includes(item.label)
  )

  const pickLang = (code: 'UA' | 'EN') => {
    setLang(code)
    setLangOpen(false)
  }

  return (
    <>
      <nav className={`${styles.nav} ${onHero ? styles.transparent : styles.solid}`}>
        <a href="/muaythai" className={styles.brand} aria-label="Київська федерація муайтай">
          Муайтай <span>Київ</span>
        </a>

        <div className={styles.center}>
          {primary.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </div>

        <div className={styles.right}>
          <div className={styles.langWrap} ref={langRef}>
            <button
              type="button"
              className={`${styles.langBtn} ${langOpen ? styles.langBtnOpen : ''}`}
              aria-label="Мова"
              aria-expanded={langOpen}
              aria-haspopup="listbox"
              onClick={() => setLangOpen((v) => !v)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18" />
                <path d="M12 3a14 14 0 0 1 0 18" />
                <path d="M12 3a14 14 0 0 0 0 18" />
              </svg>
            </button>
            {langOpen && (
              <div className={styles.langMenu} role="listbox" aria-label="Оберіть мову">
                <button
                  type="button"
                  role="option"
                  aria-selected={lang === 'UA'}
                  className={lang === 'UA' ? styles.langActive : undefined}
                  onClick={() => pickLang('UA')}
                >
                  UA
                </button>
                <button
                  type="button"
                  role="option"
                  aria-selected={lang === 'EN'}
                  className={lang === 'EN' ? styles.langActive : undefined}
                  onClick={() => pickLang('EN')}
                >
                  EN
                </button>
              </div>
            )}
          </div>
          <a href="/muaythai#kontakt" className={styles.ctaPrimary}>
            <span>Пробне заняття</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 14 L14 2 M6 2 H14 V10"/>
              </svg>
            </span>
          </a>
        </div>

        <button className={styles.menuBtn} onClick={() => setMenuOpen(true)} aria-label="Відкрити меню">
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
          <a href="/muaythai" className={styles.drawerBrand} onClick={() => setMenuOpen(false)}>
            Муайтай <span>Київ</span>
          </a>
          <button className={styles.drawerClose} onClick={() => setMenuOpen(false)} aria-label="Закрити">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4 L20 20 M20 4 L4 20"/>
            </svg>
          </button>
        </div>
        <nav className={styles.drawerNav} aria-label="Мобільна навігація">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
        </nav>
        <a href="/muaythai#kontakt" className={styles.drawerCta} onClick={() => setMenuOpen(false)}>
          <span>Пробне заняття</span>
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
