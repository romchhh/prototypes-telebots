import Image from 'next/image'
import { BRAND } from '../brand'
import styles from './Hero.module.css'

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
          <h1 className={styles.headline}>
            Твоє авто<br />з <em>Америки</em>
          </h1>
          <p className={styles.subheadline}>
            Підбір, купівля та доставка під ключ — з гарантією прозорої ціни
          </p>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.contact}>
            <span className={styles.phone}>{BRAND.phone}</span>
            <span className={styles.address}>{BRAND.address}<br />{BRAND.city}</span>
          </div>

          <a href="#kontakt" className={styles.card}>
            <div className={styles.cardText}>
              <p className={styles.cardLabel}>Безкоштовна консультація</p>
              <p className={styles.cardTitle}>Заявка на підбір</p>
              <p className={styles.cardSub}>Отримайте розрахунок вартості<br />авто з доставкою та розмитненням</p>
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
