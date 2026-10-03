'use client'
import { EXPERIENCE } from '../brand'
import { useLocale } from './LocaleContext'
import styles from './Experience.module.css'

export default function Experience() {
  const { t } = useLocale()

  return (
    <section id="doswiadczenie" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            {t.experienceHeading}<br />
            <em>{t.experienceHeadingEm}</em>
          </h2>
        </div>

        <div className={styles.right}>
          <div className={styles.timeline}>
            {EXPERIENCE.map((job, i) => {
              const copy = t.experience[job.id]
              return (
                <article key={job.id} className={styles.item}>
                  <div className={styles.marker} aria-hidden="true">
                    <span className={styles.dot} />
                    {i < EXPERIENCE.length - 1 && <span className={styles.line} />}
                  </div>

                  <div className={styles.content}>
                    <div className={styles.top}>
                      <p className={styles.role}>{copy.role}</p>
                      <h3 className={styles.place}>{copy.place}</h3>
                      <p className={styles.meta}>{copy.location} · {job.period}</p>
                    </div>

                    <ul className={styles.highlights}>
                      {copy.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
