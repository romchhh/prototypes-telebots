import Image from 'next/image'
import { BRAND, SERVICES, STATS } from '../brand'
import styles from './Hero.module.css'

const COLOR_CLASS: Record<(typeof SERVICES)[number]['color'], string> = {
  blue: styles.cardBlue,
  teal: styles.cardTeal,
  indigo: styles.cardIndigo,
  sky: styles.cardSky,
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <Image
          src={BRAND.heroDesktop}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </div>
      <div className={styles.overlay} />

      <div className={styles.body}>
        <div className={styles.copy}>
          <h1 className={styles.headline}>
            Освітній бізнес<br />з&nbsp;<em>Іллею Літуном</em>
          </h1>
          <p className={styles.role}>{BRAND.role}</p>

          <div className={styles.stats} aria-label="Досягнення">
            {STATS.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.cards} aria-label="Послуги">
          {SERVICES.map((service) => (
            <a
              key={service.slug}
              href={service.href}
              className={`${styles.card} ${COLOR_CLASS[service.color]}`}
            >
              <div className={styles.cardText}>
                <p className={styles.cardTitle}>{service.label}</p>
                <p className={styles.cardSub}>
                  {service.cardSub.split('\n').map((line, i) => (
                    <span key={line}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </p>
              </div>
              <div className={styles.cardArrow}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 14 L14 2 M6 2 H14 V10" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
