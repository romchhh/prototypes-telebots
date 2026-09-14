import Image from 'next/image'
import { NEWS } from '../brand'
import styles from './News.module.css'

export default function News() {
  return (
    <section id="novyny" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 className={styles.heading}>
            <span>Останні</span>
            <em>новини</em>
          </h2>
          <p className={styles.lead}>Чемпіонати, збірна Києва, семінари для клубів і тренерів.</p>
        </div>
        <div className={styles.grid}>
          {NEWS.map((item) => (
            <article key={item.slug} className={styles.card}>
              <div className={styles.media}>
                <Image src={item.image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" className={styles.img} />
              </div>
              <div className={styles.body}>
                <time className={styles.date}>{item.date}</time>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.excerpt}>{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
