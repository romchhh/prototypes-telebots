'use client'
import { useEffect } from 'react'
import { BOOKING_PLATFORMS, BRAND, SOCIALS } from '../brand'
import { useLocale } from './LocaleContext'
import styles from './BookingModal.module.css'

type Props = {
  open: boolean
  service?: string
  onClose: () => void
}

export default function BookingModal({ open, service = '', onClose }: Props) {
  const { t } = useLocale()

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const instagram = SOCIALS.find((s) => s.id === 'instagram')?.href ?? BRAND.instagram

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label={t.modalTitle}>
      <button type="button" className={styles.backdrop} onClick={onClose} aria-label={t.closeMenu} />
      <div className={styles.sheet}>
        <div className={styles.handle} aria-hidden="true" />

        <h3 className={styles.title}>{t.modalTitle}</h3>
        {service ? <p className={styles.serviceHint}>{service}</p> : null}
        <p className={styles.lead}>{t.bookingHint}</p>

        <div className={styles.platforms}>
          {BOOKING_PLATFORMS.map((platform) => {
            const desc = t[platform.descKey]
            const isSoon = 'comingSoon' in platform && platform.comingSoon
            if (isSoon) {
              return (
                <div key={platform.id} className={`${styles.platform} ${styles.platformSoon}`}>
                  <span className={styles.platformName}>{platform.name}</span>
                  <span className={styles.platformDesc}>{desc}</span>
                  <span className={styles.badge}>{t.comingSoon}</span>
                </div>
              )
            }
            return (
              <a
                key={platform.id}
                href={platform.href}
                className={styles.platform}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.platformName}>{platform.name}</span>
                <span className={styles.platformDesc}>{desc}</span>
                <span className={styles.platformArrow} aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 14 L14 2 M6 2 H14 V10"/>
                  </svg>
                </span>
              </a>
            )
          })}
        </div>

        <p className={styles.or}>{t.modalOr}</p>
        <div className={styles.socials}>
          <span className={styles.socialLabel}>{t.modalWrite}</span>
          <a href={instagram} className={styles.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </div>
  )
}
