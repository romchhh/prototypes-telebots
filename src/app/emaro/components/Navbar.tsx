'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { BRAND } from '../brand'
import { useLang, type Lang } from '../i18n'
import styles from './Navbar.module.css'

const phoneTel = BRAND.phone.replace(/\s/g, '')
const phoneDisplay = BRAND.phone.replace(/^\+48\s*/, '')
const whatsappHref = `https://wa.me/${phoneTel.replace('+', '')}`

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang, t } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const toggleLang = () => setLang((lang === 'ua' ? 'pl' : 'ua') as Lang)

  return (
    <>
      <nav className={`${styles.nav} ${transparent && !scrolled ? styles.transparent : styles.solid}`}>
        <a href="/emaro" className={styles.brand}>
          <Image
            src={BRAND.logo}
            alt={BRAND.name}
            width={240}
            height={96}
            className={styles.logo}
            priority
          />
        </a>

        <div className={styles.center}>
          <a href="#kontakt">{t.nav.services}</a>
          <a href="#kontakt">{t.nav.mobile}</a>
          <a href="#kontakt">{t.nav.about}</a>
        </div>

        <div className={styles.right}>
          <button
            type="button"
            className={styles.langBtn}
            onClick={toggleLang}
            aria-label={`Language: ${lang.toUpperCase()}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18" />
              <path d="M12 3a15 15 0 0 1 0 18" />
              <path d="M12 3a15 15 0 0 0 0 18" />
            </svg>
          </button>

          <a href="#kontakt" className={styles.cta}>
            {t.nav.cta}
            <span className={styles.ctaArrow} aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12 L12 2 M5 2 H12 V9" />
              </svg>
            </span>
          </a>

          <a href={whatsappHref} className={styles.phoneBtn} target="_blank" rel="noopener noreferrer">
            <span className={styles.waIcon} aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
            <span>{phoneDisplay}</span>
          </a>
        </div>

        <div className={styles.mobileActions}>
          <a href={whatsappHref} className={styles.phoneBtn} target="_blank" rel="noopener noreferrer">
            <span className={styles.waIcon} aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
            <span>{phoneDisplay}</span>
          </a>
          <button className={styles.menuBtn} onClick={() => setMenuOpen(true)} aria-label={t.nav.openMenu}>
            [menu]
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 14 L14 2 M6 2 H14 V10" />
            </svg>
          </button>
        </div>
      </nav>

      <div className={`${styles.drawer} ${menuOpen ? styles.open : ''}`} role="dialog" aria-modal="true">
        <div className={styles.drawerTop}>
          <a href="/emaro" className={styles.drawerBrand} onClick={() => setMenuOpen(false)}>
            <Image
              src={BRAND.logo}
              alt={BRAND.name}
              width={200}
              height={80}
              className={styles.logo}
            />
          </a>
          <button className={styles.drawerClose} onClick={() => setMenuOpen(false)} aria-label={t.nav.closeMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4 L20 20 M20 4 L4 20"/>
            </svg>
          </button>
        </div>
        <nav className={styles.drawerNav} aria-label={t.nav.mobileNav}>
          <a href="#kontakt" onClick={() => setMenuOpen(false)}>{t.nav.services}</a>
          <a href="#kontakt" onClick={() => setMenuOpen(false)}>{t.nav.mobile}</a>
          <a href="#kontakt" onClick={() => setMenuOpen(false)}>{t.nav.about}</a>
        </nav>
        <button type="button" className={styles.drawerLang} onClick={toggleLang}>
          {lang === 'ua' ? 'UA → PL' : 'PL → UA'}
        </button>
        <a href="#kontakt" className={styles.drawerCta} onClick={() => setMenuOpen(false)}>
          {t.nav.cta}
        </a>
        <a href={whatsappHref} className={styles.drawerPhone} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
          {BRAND.phone}
        </a>
      </div>
    </>
  )
}
