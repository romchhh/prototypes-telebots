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
          <p className={styles.brandMark}>Nura</p>
          <h1 className={styles.headline}>
            Шкіра, яка<br />говорить <em>за вас</em>
          </h1>
          <p className={styles.sub}>
            Косметологія з індивідуальним підходом — спокійно, точно, з результатом
          </p>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.contact}>
            <span className={styles.phone}>{BRAND.phone}</span>
            <span className={styles.address}>{BRAND.address}<br />{BRAND.city}</span>
          </div>

          <a href="#kontakt" className={styles.card}>
            <div className={styles.cardText}>
              <p className={styles.cardLabel}>Перший візит</p>
              <p className={styles.cardTitle}>Запис на консультацію</p>
              <p className={styles.cardSub}>Підберемо догляд<br />під ваш тип шкіри</p>
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
