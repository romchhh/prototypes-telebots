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

      <div className={styles.portrait}>
        <div className={styles.portraitGlow} aria-hidden="true" />
        <Image
          src={BRAND.heroImage}
          alt="Феміда — символ правосуддя компанії Юстиція"
          fill
          priority
          sizes="(max-width: 768px) 90vw, 55vw"
          className={styles.portraitImage}
        />
      </div>

      <div className={styles.body}>
        <div className={styles.copy}>
          <h1 className={styles.headline}>
            Захист<br />ваших <em>прав</em><br />у суді
          </h1>
          <p className={styles.role}>{BRAND.role}</p>
          <a href="#contact" className={styles.heroCta}>
            Безкоштовна консультація
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>

        <div className={styles.glassCells} aria-label="Досягнення">
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
