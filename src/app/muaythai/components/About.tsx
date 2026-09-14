import Image from 'next/image'
import { ABOUT, BRAND } from '../brand'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="pro-nas" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h2 className={styles.heading}>
            Про <em>федерацію</em>
          </h2>
          <div className={styles.body}>
            <p>{ABOUT.text}</p>
          </div>
          <p className={styles.credo}>
            Клуби, суддівство, антидопінг і збірна Києва — в одній спільноті.
          </p>
          <a href={ABOUT.moreHref} className={styles.link}>
            Дізнатися більше
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 14 L14 2 M6 2 H14 V10"/>
            </svg>
          </a>
        </div>

        <div className={styles.visual}>
          <Image
            src={BRAND.aboutImage}
            alt="Тренування клубів Київської федерації муайтай"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
            className={styles.img}
          />
        </div>
      </div>
    </section>
  )
}
