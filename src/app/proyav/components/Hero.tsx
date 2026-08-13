'use client'
import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <Image
          src="/images/proyav/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </div>
      <div className={styles.overlay} />

      <div className={styles.body}>
        <div className={styles.headlineWrap}>
          <h1 className={styles.headline}>
            PRO<span>яв</span>
          </h1>
          <p className={styles.subtitle}>Масштабна подія у Тернополі</p>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.details}>
            <span className={styles.detailItem}>📅 26 вересня 2026 року</span>
            <span className={styles.detailItem}>⏰ 09:00 — 21:00</span>
            <span className={styles.detailItem}>📍 Тернопіль, Подоляни Холл</span>
          </div>

          <a href="#kvitky" className={styles.card}>
            <div className={styles.cardText}>
              <p className={styles.cardLabel}>Реєстрація відкрита</p>
              <p className={styles.cardTitle}>Купити квиток</p>
              <p className={styles.cardSub}>Обмежена кількість місць —<br />не пропусти свій шанс</p>
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
