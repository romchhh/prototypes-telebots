import Image from 'next/image'
import { BRAND } from '../brand'
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

          <a href="#" className={styles.glassCard}>
            <div className={styles.glassThumb}>
              <Image
                src={BRAND.heroImage}
                alt=""
                fill
                sizes="420px"
                className={styles.glassImg}
              />
              <span className={styles.playBtn} aria-hidden="true">
                <svg width="18" height="20" viewBox="0 0 14 16" fill="white">
                  <path d="M0 0 L14 8 L0 16 Z"/>
                </svg>
              </span>
            </div>
            <div className={styles.glassText}>
              <span className={styles.glassLabel}>Prefab-технологія</span>
              <p className={styles.glassDesc}>
                Будинок збирається на заводі за 3–6 тижнів.
                Монтаж на ділянці — лише 1–2 дні.
              </p>
            </div>
          </a>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.ctaCard}>
            <h1 className={styles.headline}>
              Власний будинок<br />
              замість компромісів.
            </h1>
            <p className={styles.subline}>
              Готовий простір для життя там, де ти хочеш бути.
            </p>
            <div className={styles.actions}>
              <a href="#kontakt" className={styles.btnPrimary}>
                Записатися на перегляд
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
