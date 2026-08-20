import Image from 'next/image'
import { BRAND, STATS } from '../brand'
import styles from './Hero.module.css'

const GLASS_POS = [styles.glassLeft, styles.glassMid, styles.glassRight] as const

function statLines(label: string): string[] {
  return label.split(' ')
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={styles.bgGlow2} aria-hidden="true" />

      <div className={styles.body}>
        <div className={styles.copy}>
          <h1 className={styles.headline}>
            {BRAND.headline[0]}
            <br />
            у <em>{BRAND.highlight}</em>
            <br />
            {BRAND.headline[2]}
          </h1>
          <p className={styles.role}>{BRAND.role}</p>
          <a href="#contact" className={styles.heroCta}>
            Записатись на урок
            <span className={styles.ctaIcon} aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12 L12 2 M5 2 H12 V9" />
              </svg>
            </span>
          </a>
        </div>

        <div className={styles.portrait}>
          <div className={styles.portraitGlow} aria-hidden="true" />
          <Image
            src={BRAND.heroImage}
            alt="Урок у школі іноземних мов LEXI.education"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 55vw"
            className={styles.portraitImage}
          />
        </div>

        <div className={styles.glassCells} aria-label="Про школу">
          {STATS.map((stat, index) => (
            <div key={stat.label} className={`${styles.glassCard} ${GLASS_POS[index]}`}>
              <span className={styles.glassOrb} aria-hidden="true" />
              <div className={styles.glassRow}>
                <span className={styles.glassValue}>{stat.value}</span>
                <span className={styles.glassMeta}>
                  {statLines(stat.label).map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
