import { SKILLS } from '../brand'
import styles from './About.module.css'

const ICONS = [
  // olive / mediterranean
  <svg key="med" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <ellipse cx="12" cy="13" rx="5.5" ry="7"/>
    <path d="M12 6 V3 M10 4.5 Q12 2 14 4.5"/>
  </svg>,
  // chef hat
  <svg key="chef" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 14 V20 H18 V14"/>
    <path d="M5 14 C3.5 14 2.5 12.5 2.5 11 C2.5 9.5 3.6 8.3 5.1 8.1 C5.4 5.8 7.4 4 10 4 C11.2 4 12.3 4.5 13 5.3 C13.7 4.5 14.8 4 16 4 C18.6 4 20.6 5.8 20.9 8.1 C22.4 8.3 23.5 9.5 23.5 11 C23.5 12.5 22.5 14 21 14 Z"/>
  </svg>,
  // plate with spark
  <svg key="dish" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="13" r="7"/>
    <circle cx="12" cy="13" r="3.5"/>
    <path d="M12 2 V4 M8.5 3.5 L9.5 5 M15.5 3.5 L14.5 5"/>
  </svg>,
  // team
  <svg key="team" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="9" cy="8" r="3"/>
    <circle cx="17" cy="9" r="2.5"/>
    <path d="M2 20 C2 16.5 5 14.5 9 14.5 C13 14.5 16 16.5 16 20"/>
    <path d="M15 14.8 C17.5 14.8 20.5 16 21.5 19"/>
  </svg>,
  // chart / cost
  <svg key="cost" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 20 V10 M10 20 V6 M16 20 V12 M22 20 H2"/>
  </svg>,
  // shield check HACCP
  <svg key="haccp" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3 L20 7 V12 C20 16.5 16.5 20.2 12 21.5 C7.5 20.2 4 16.5 4 12 V7 Z"/>
    <path d="M9 12 L11 14 L15.5 9.5"/>
  </svg>,
]

export default function About() {
  return (
    <section id="o-mnie" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Kuchnia międzynarodowa,<br />
            <em>nowoczesne standardy</em>
          </h2>
        </div>

        <div className={styles.body}>
          <p className={styles.lead}>
            Specjalizuję się w kuchni włoskiej, francuskiej i śródziemnomorskiej —
            od koncepcji menu po zarządzanie zespołem i food-costem.
          </p>

          <div className={styles.tags}>
            {SKILLS.map((skill, i) => (
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
