import type { ReactNode } from 'react'
import { SOCIALS } from '../brand'
import styles from './SocialsSection.module.css'

const SOCIAL_ICONS: Record<(typeof SOCIALS)[number]['label'], ReactNode> = {
  Instagram: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Telegram: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.05 3.58 3.34 10.5c-1.2.47-1.19 1.12-.22 1.41l4.55 1.42 1.73 5.32c.21.65.38.89.98.89.64 0 .92-.29 1.27-.64l2.67-2.6 5.55 4.09c1.02.56 1.75.27 2.01-.95L22.7 5.08c.28-1.11-.42-1.6-1.65-1.5Z" />
    </svg>
  ),
  Threads: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.23-8.184-3.574C2.35 18.44 1.5 15.718 1.5 12.065v-.13c0-3.653.85-6.375 2.495-8.231C5.845 1.36 8.598.154 12.18.13h.014c2.946.02 5.243.78 6.837 2.26 1.543 1.432 2.354 3.47 2.411 6.058l.003.16v.01c-.01 2.084-.604 3.703-1.766 4.812-1.11 1.06-2.681 1.597-4.668 1.597-1.793 0-3.242-.49-4.31-1.456-.988-.895-1.506-2.12-1.54-3.643l-.002-.14c.03-1.36.48-2.45 1.338-3.242.877-.81 2.083-1.221 3.586-1.221 1.13 0 2.07.27 2.795.803.68.5 1.12 1.19 1.31 2.05l-1.72.43c-.12-.52-.38-.95-.77-1.27-.42-.35-1-.52-1.73-.52-.9 0-1.61.26-2.11.78-.52.53-.79 1.3-.8 2.29v.08c.03.97.31 1.74.84 2.28.55.56 1.33.85 2.31.85 1.12 0 2-.28 2.62-.84.55-.5.87-1.22.94-2.15.02-.2.02-.4.02-.58 0-1.53-.39-2.72-1.15-3.54-.8-.86-2-1.3-3.56-1.31-1.94.01-3.43.66-4.43 1.94-1.01 1.28-1.52 3.08-1.52 5.35 0 2.28.51 4.08 1.52 5.35 1 1.27 2.49 1.92 4.43 1.93 2.28-.01 4.02-.7 5.17-2.05 1.14-1.34 1.73-3.24 1.75-5.64v-.14c-.04-1.97-.64-3.52-1.79-4.6-1.2-1.12-2.96-1.69-5.23-1.71h-.01c-2.86.02-5.01.95-6.4 2.77C3.96 7.35 3.3 9.6 3.3 12v.07c0 2.4.66 4.65 1.97 6.49 1.39 1.82 3.54 2.75 6.4 2.77h.006c2.37-.02 4.26-.67 5.62-1.93 1.24-1.15 2.01-2.73 2.29-4.7l1.77.31c-.33 2.38-1.28 4.35-2.83 5.86-1.68 1.63-4.01 2.47-6.91 2.5Z" />
    </svg>
  ),
  LinkedIn: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0Z" />
    </svg>
  ),
  TikTok: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.76 2.89 2.89 0 0 1-2.88-2.76 2.89 2.89 0 0 1 2.88-2.76c.2 0 .4.02.59.06v-3.5a6.37 6.37 0 0 0-.59-.03A6.34 6.34 0 0 0 3.16 15.9a6.34 6.34 0 0 0 6.33 6.34 6.34 6.34 0 0 0 6.33-6.34V8.87a8.2 8.2 0 0 0 4.79 1.53V6.95a4.85 4.85 0 0 1-1.02-.26Z" />
    </svg>
  ),
}

export default function SocialsSection() {
  return (
    <section className={styles.section} aria-label="Соціальні мережі">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 className={styles.heading}>
            Будьте<br /><em>на зв&apos;язку</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} className={styles.badge} aria-label={s.label}>
              <span className={styles.iconWrap}>{SOCIAL_ICONS[s.label]}</span>
              <span className={styles.badgeText}>
                <span className={styles.badgeName}>{s.label}</span>
                <span className={styles.badgeShort}>{s.short}</span>
              </span>
              <span className={styles.badgeArrow} aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 14 L14 2 M6 2 H14 V10" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
