'use client'
import Image from 'next/image'
import { BRAND } from '../brand'
import { useLang } from '../i18n'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useLang()

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
          <h1 className={styles.headline}>
            {t.hero.lines.map((line, i) => {
              const accent = t.hero.accent
              const idx = line.toLowerCase().indexOf(accent.toLowerCase())
              return (
                <span key={line}>
                  {i > 0 && <br />}
                  {idx >= 0 ? (
                    <>
                      {line.slice(0, idx)}
                      <span className={styles.accent}>{line.slice(idx, idx + accent.length)}</span>
                      {line.slice(idx + accent.length)}
                    </>
                  ) : (
                    line
                  )}
                </span>
              )
            })}
          </h1>
          <p className={styles.pillars} aria-label="Services">
            {t.hero.pillars.map((item, i) => (
              <span key={item}>
                {i > 0 && <span className={styles.pillarSep} aria-hidden="true">|</span>}
                {item}
              </span>
            ))}
          </p>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.contact}>
            <span className={styles.phone}>{BRAND.phone}</span>
            <span className={styles.address}>{BRAND.address}<br />{BRAND.city}</span>
          </div>

          <a href="#kontakt" className={styles.card}>
            <div className={styles.cardText}>
              <p className={styles.cardLabel}>{t.hero.cardLabel}</p>
              <p className={styles.cardTitle}>{t.hero.cardTitle}</p>
              <p className={styles.cardSub}>
                {t.hero.cardSub.split('\n').map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </p>
            </div>
            <div className={styles.cardArrow}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 14 L14 2 M6 2 H14 V10" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
