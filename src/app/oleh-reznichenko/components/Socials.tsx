import { SOCIALS } from '../brand'
import styles from './Socials.module.css'

function Icon({ id }: { id: (typeof SOCIALS)[number]['id'] }) {
  switch (id) {
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="12" cy="12" r="4.4" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2.5" y="2.5" width="19" height="19" rx="3.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M7.4 10.2 V16.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <circle cx="7.4" cy="7.5" r="1.15" fill="currentColor" />
          <path
            d="M11.2 16.6 V12.4 C11.2 11.1 12.1 10.2 13.4 10.2 C14.7 10.2 15.4 11.1 15.4 12.4 V16.6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M11.2 10.2 V16.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      )
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M14.2 21 V13.1 H16.8 L17.2 9.7 H14.2 V7.7 C14.2 6.8 14.5 6.1 15.8 6.1 H17.3 V3.1 C17 3.1 16 3 14.8 3 C12.2 3 10.4 4.6 10.4 7.4 V9.7 H7.8 V13.1 H10.4 V21 H14.2 Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="1.8" y="5.2" width="20.4" height="13.6" rx="3.8" stroke="currentColor" strokeWidth="1.7" />
          <path d="M10.2 9 L15.2 12 L10.2 15 Z" fill="currentColor" />
        </svg>
      )
  }
}

export default function Socials() {
  return (
    <section className={styles.section} aria-label="Media społecznościowe">
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Znajdź mnie<br />
          <em>w sieci</em>
        </h2>

        <ul className={styles.row}>
          {SOCIALS.map((social) => (
            <li key={social.id}>
              <a
                href={social.href}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <span className={styles.icon}>
                  <Icon id={social.id} />
                </span>
                <span className={styles.label}>{social.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
