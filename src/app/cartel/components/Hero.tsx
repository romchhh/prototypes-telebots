'use client'
import Image from 'next/image'
import { BRAND } from '../brand'
import styles from './Hero.module.css'

const CARDS = [
  {
    title: 'VODA club',
    text: 'Всесезонний басейн, SPA та джакузі в серці Карпат.',
    image: BRAND.heroDesktop,
    href: '#spa',
  },
  {
    title: 'Ресторани CARTEL',
    text: 'Буковель, Яремче, Одеса — гастрономія на висоті.',
    image: BRAND.contactImage,
    href: '#restorany',
  },
] as const

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
              <span>Відпочинок</span>
              <span>нового рівня</span>
              <span className={styles.headlinePlace}>
                у Буковелі
                <Image
                  src="/images/cartel/bukovel-icon.png"
                  alt=""
                  width={72}
                  height={72}
                  className={styles.bukovelIcon}
                />
              </span>
            </h1>
            <p className={styles.sideLine}>
              Холдинг CARTEL — ресторани, готелі, SPA та розваги в Карпатах. Якість, якій позаздрили б європейці.
            </p>
          </div>

          <a href="#kontakt" className={styles.cta}>
            <span className={styles.ctaThumb}>
              <Image src={BRAND.contactImage} alt="" fill sizes="48px" className={styles.ctaThumbImg} />
            </span>
            <span className={styles.ctaLabel}>Доставка та бронювання</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 14 L14 2 M6 2 H14 V10"/>
              </svg>
            </span>
          </a>
        </div>

        <div className={styles.cards}>
          {CARDS.map((card) => (
            <a key={card.title} href={card.href} className={styles.infoCard}>
              <span className={styles.infoThumb}>
                <Image src={card.image} alt="" fill sizes="72px" className={styles.infoThumbImg} />
              </span>
              <span className={styles.infoText}>
                <strong>{card.title}</strong>
                <span>{card.text}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
