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
      <div className={styles.bg} aria-hidden="true">
        <Image
          src={BRAND.heroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.bgDim} />
      </div>

      <div className={styles.portrait}>
        <Image
          src={BRAND.heroImage}
          alt="USA Auto — авто з Америки"
          fill
          priority
          sizes="(max-width: 768px) 90vw, 58vw"
          className={styles.portraitImage}
        />
      </div>

      <div className={styles.body}>
        <div className={styles.copy}>
          <h1 className={styles.headline}>
            Авто з<br />
            <em>Америки</em>
            <br />під ключ
          </h1>
          <p className={styles.role}>{BRAND.role}</p>
          <a href="#services" className={styles.heroCta}>
            Оберіть послугу
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
