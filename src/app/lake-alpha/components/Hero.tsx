import Image from 'next/image'
import { BRAND } from '../brand'
import PrefabVideoCard from './PrefabVideoCard'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.shell}>
        <div className={styles.mediaWrap}>
          <div className={styles.mediaBg}>
            <Image
              src={BRAND.heroImage}
              alt="Lake Alpha — сучасний модульний будинок HutJet"
              fill
              priority
              sizes="100vw"
              className={styles.media}
            />
          </div>
          <div className={styles.mediaOverlay} aria-hidden="true" />

          <div className={styles.heroCopy}>
            <h1 className={styles.slogan}>
              Свобода жити<br />
              <em>там, де ти хочеш.</em>
            </h1>
          </div>

          <PrefabVideoCard />
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaBody}>
              <h2 className={styles.headline}>
                Власний будинок<br />
                <em>замість компромісів.</em>
              </h2>
              <p className={styles.subline}>
                Готовий простір для життя там, де ти хочеш бути.
              </p>
            </div>
            <div className={styles.actions}>
              <a href="#kontakt" className={styles.btnPrimary}>
                <span>Записатися на перегляд</span>
                <span className={styles.btnArrow} aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 14 L14 2 M6 2 H14 V10"/>
                  </svg>
                </span>
              </a>
              <a href="#kontakt" className={styles.btnSecondary}>
                Отримати консультацію
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
