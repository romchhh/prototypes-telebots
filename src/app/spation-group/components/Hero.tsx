'use client'

import Image from 'next/image'
import { BRAND } from '../brand'
import { useLang } from '../i18n'
import styles from './Hero.module.css'

function IconAssets() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21h18" />
      <path d="M5 21V8l7-4 7 4v13" />
      <path d="M9 21v-6h6v6" />
      <path d="M9 10h.01M15 10h.01" />
    </svg>
  )
}

function IconSupport() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

export default function Hero() {
  const { t } = useLang()
  const cards = [
    { ...t.hero.cards[0], icon: <IconAssets /> },
    { ...t.hero.cards[1], icon: <IconSupport /> },
  ] as const
  const variants = [styles.infoCardSolid, styles.infoCardGlass] as const

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <Image
          src={BRAND.heroDesktop}
          alt=""
          fill
          priority
          sizes="100vw"
          className={`${styles.bgImage} ${styles.bgDesktop}`}
        />
        <Image
          src={BRAND.heroMobile}
          alt=""
          fill
          priority
          sizes="100vw"
          className={`${styles.bgImage} ${styles.bgMobile}`}
        />
      </div>
      <div className={styles.overlay} />

      <div className={styles.body}>
        <div className={styles.copy}>
          <div className={styles.titleRow}>
            <h1 className={styles.headline}>
              {t.hero.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <p className={styles.sideLine}>{t.hero.side}</p>
          </div>

          <a href="#kontakt" className={styles.cta}>
            <span className={styles.ctaThumb}>
              <Image src={BRAND.contactImage} alt="" fill sizes="48px" className={styles.ctaThumbImg} />
            </span>
            <span className={styles.ctaLabel}>{t.hero.cta}</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 14 L14 2 M6 2 H14 V10"/>
              </svg>
            </span>
          </a>
        </div>

        <div className={styles.cards}>
          {cards.map((card, i) => (
            <a key={card.title} href="#kontakt" className={`${styles.infoCard} ${variants[i]}`}>
              <span className={styles.cardTop}>
                <span className={styles.cardIcon}>{card.icon}</span>
                <span className={styles.cardLabel}>{card.label}</span>
              </span>
              <strong className={styles.cardTitle}>{card.title}</strong>
              <span className={styles.cardDesc}>{card.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
