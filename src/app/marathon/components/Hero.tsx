'use client'
import Image from 'next/image'
import TimerCard from './TimerCard'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} data-hero>
      <div className={styles.bg}>
        <Image
          src="/images/Gemini_Generated_Image_rtzyw7rtzyw7rtzy.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </div>
      <div className={styles.overlay} />

      <div className={styles.body}>
        <div className={styles.textBlock}>
          <h1 className={styles.headline}>
            Почни говорити<br />
            <em>англійською</em><br />
            <span className={styles.highlight}>за 10 днів</span>
          </h1>
          <p className={styles.subline}>
            Почни говорити англійською вже через 10 днів та отримай шанс виграти <em>10 000 грн</em>
          </p>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.contact}>
            <span className={styles.phone}>
              Приєднуйся до марафону вже зараз лише за 490 грн замість 2 450 грн
            </span>
          </div>
          <TimerCard />
        </div>
      </div>
    </section>
  )
}
