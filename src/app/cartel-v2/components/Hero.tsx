import Image from 'next/image'
import { BRAND } from '../../cartel/brand'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Головний екран">
      <div className={styles.media}>
        <Image
          src={BRAND.heroDesktop}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.img}
        />
        <div className={styles.shade} />
      </div>
      <div className={styles.content}>
        <p className={styles.eyebrow}>CARTEL · Буковель</p>
        <h1 className={styles.title}>
          Мистецтво <em>відпочинку</em> у Карпатах
        </h1>
        <p className={styles.lead}>
          Ресторани, готелі, SPA та розваги — з сервісом, на який хочеться розраховувати.
        </p>
        <a href="#pro-nas" className={styles.ghostBtn}>Детальніше про CARTEL</a>
      </div>
    </section>
  )
}
