import Image from 'next/image'
import { BRAND } from '../brand'
import styles from './Hero.module.css'

const CARDS = [
  {
    title: 'Повний цикл пакування',
    text: 'Від гофроящика до плівки й скотчу — одне комплексне рішення.',
    image: BRAND.heroDesktop,
  },
  {
    title: 'Власне виробництво',
    text: 'Завод гофротари та гнучка упаковка всередині групи компаній.',
    image: BRAND.heroMobile,
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
              <span>Повний цикл</span>
              <span>пакування</span>
              <span>для бізнесу</span>
            </h1>
            <p className={styles.sideLine}>
              Група компаній із 25-річним досвідом. Гофротара, гнучка упаковка та супутні матеріали — під ключ.
            </p>
          </div>

          <a href="#kontakty" className={styles.cta}>
            <span className={styles.ctaThumb}>
              <Image src={BRAND.heroMobile} alt="" fill sizes="48px" className={styles.ctaThumbImg} />
            </span>
            <span className={styles.ctaLabel}>Отримати прорахунок</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 14 L14 2 M6 2 H14 V10"/>
              </svg>
            </span>
          </a>
        </div>

        <div className={styles.cards}>
          {CARDS.map((card) => (
            <a key={card.title} href="#pro-nas" className={styles.infoCard}>
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
