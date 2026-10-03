'use client'
import { useLocale } from './LocaleContext'
import styles from './About.module.css'

const ICONS = [
  <svg key="p" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3 L20 7 V12 C20 16.5 16.5 20.2 12 21.5 C7.5 20.2 4 16.5 4 12 V7 Z"/>
    <path d="M9 12 L11 14 L15.5 9.5"/>
  </svg>,
  <svg key="r" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="8"/>
    <path d="M8 12 H16 M12 8 V16"/>
  </svg>,
  <svg key="a" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 20 V10 M10 20 V6 M16 20 V12 M22 20 H2"/>
  </svg>,
  <svg key="g" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21 C12 21 4 15.5 4 10 A4 4 0 0 1 12 7 A4 4 0 0 1 20 10 C20 15.5 12 21 12 21 Z"/>
  </svg>,
  <svg key="s" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="9" cy="8" r="3"/>
    <circle cx="17" cy="9" r="2.5"/>
    <path d="M2 20 C2 16.5 5 14.5 9 14.5 C13 14.5 16 16.5 16 20"/>
    <path d="M15 14.8 C17.5 14.8 20.5 16 21.5 19"/>
  </svg>,
  <svg key="e" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 5 H20 V19 H4 Z"/>
    <path d="M8 9 H16 M8 13 H14"/>
  </svg>,
]

export default function About() {
  const { t } = useLocale()

  return (
    <section id="o-mnie" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            {t.aboutHeading}<br />
            <em>{t.aboutHeadingEm}</em>
          </h2>
        </div>

        <div className={styles.body}>
          <p className={styles.lead}>{t.aboutLead}</p>

          <div className={styles.tags}>
            {t.skills.map((skill, i) => (
              <span key={skill} className={styles.tag}>
                <span className={styles.icon}>{ICONS[i]}</span>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
