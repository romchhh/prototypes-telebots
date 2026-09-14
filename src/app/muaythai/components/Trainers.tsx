import Image from 'next/image'
import { TRAINERS } from '../brand'
import styles from './Trainers.module.css'

const FEATURED = TRAINERS.filter((t) => t.featured)

export default function Trainers({ all = false }: { all?: boolean }) {
  const list = all ? TRAINERS : FEATURED

  return (
    <section id="trenery" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 className={styles.heading}>
            <span>Тренери</span>
            <em>федерації</em>
          </h2>
          <p className={styles.lead}>
            {all
              ? 'Повний каталог тренерів клубів-членів. Картки з однаковим кадруванням — зручно оновлювати в CMS.'
              : 'Вибірка тренерів збірної та клубів Києва. Повний каталог — на окремій сторінці.'}
          </p>
        </div>
        <div className={styles.grid}>
          {list.map((trainer) => (
            <article key={trainer.slug} className={styles.card} itemScope itemType="https://schema.org/Person">
              <div className={styles.media}>
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  sizes="(max-width: 900px) 50vw, 25vw"
                  className={styles.img}
                />
              </div>
              <div className={styles.body}>
                <h3 itemProp="name">{trainer.name}</h3>
                <p itemProp="jobTitle">{trainer.role}</p>
                <span>{trainer.club}</span>
              </div>
            </article>
          ))}
        </div>
        {!all && (
          <a href="/muaythai/trenery" className={styles.more}>
            Увесь каталог тренерів
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 14 L14 2 M6 2 H14 V10"/>
            </svg>
          </a>
        )}
      </div>
    </section>
  )
}
