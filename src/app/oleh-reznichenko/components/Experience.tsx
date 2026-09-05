import { EXPERIENCE } from '../brand'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="doswiadczenie" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Od Odessy<br />
            <em>po Kraków</em>
          </h2>
        </div>

        <div className={styles.right}>
          <div className={styles.timeline}>
            {EXPERIENCE.map((job, i) => (
              <article key={`${job.place}-${job.period}`} className={styles.item}>
                <div className={styles.marker} aria-hidden="true">
                  <span className={styles.dot} />
                  {i < EXPERIENCE.length - 1 && <span className={styles.line} />}
                </div>

                <div className={styles.content}>
                  <div className={styles.top}>
                    <p className={styles.role}>{job.role}</p>
                    <h3 className={styles.place}>{job.place}</h3>
                    <p className={styles.meta}>{job.location} · {job.period}</p>
                  </div>

                  <ul className={styles.highlights}>
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
