import { EVENTS } from '../brand'
import styles from './Events.module.css'

export default function Events() {
  if (!EVENTS.length) return null

  return (
    <section id="podii" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 className={styles.heading}>
            Найближчі<br /><em>змагання</em>
          </h2>
          <p className={styles.lead}>Календар оновлює адміністратор. Якщо стартів немає — блок ховається.</p>
        </div>
        <div className={styles.list}>
          {EVENTS.map((event) => (
            <article key={event.id} className={styles.row}>
              <div className={styles.date}>
                <span className={styles.day}>{event.date}</span>
                <span className={styles.year}>{event.year}</span>
              </div>
              <div className={styles.copy}>
                <h3>{event.title}</h3>
                <p>{event.place}</p>
              </div>
              <span className={styles.status}>{event.status}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
