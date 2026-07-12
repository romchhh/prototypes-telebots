import Image from 'next/image'
import { BRAND, PILLARS } from '../brand'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.media}>
        <Image
          src={BRAND.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.mediaImage}
        />
        <div className={styles.mediaSheen} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <div className={styles.copyGlass}>
          <h1 className={styles.headline}>
            Автомобілі<br />з&nbsp;<em>Європи</em>
          </h1>
          <p className={styles.pillars} aria-label="Послуги">
            {PILLARS.map((item, i) => (
              <span key={item}>
                {i > 0 && <span className={styles.sep} aria-hidden="true">|</span>}
                {item}
              </span>
            ))}
          </p>
        </div>

        <div className={styles.bottom}>
          <div className={styles.contactGlass}>
            <span className={styles.phone}>{BRAND.phone}</span>
            <span className={styles.address}>{BRAND.address}<br />{BRAND.city}</span>
          </div>

          <a href="#kontakt" className={styles.ctaGlass}>
            <div>
              <p className={styles.ctaLabel}>Безкоштовна консультація</p>
              <p className={styles.ctaTitle}>Заявка на підбір</p>
              <p className={styles.ctaSub}>Підберемо авто з Європи під ваш бюджет</p>
            </div>
            <span className={styles.ctaArrow} aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 14 L14 2 M6 2 H14 V10" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
