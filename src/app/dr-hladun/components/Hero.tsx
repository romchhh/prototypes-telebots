'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { BRAND } from '../brand'
import { useBooking } from './BookingContext'
import { useLocale } from './LocaleContext'
import styles from './Hero.module.css'

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

function useCountUp(target: number | null, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (target === null || !active) return

    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setValue(Math.round(easeOutCubic(progress) * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, active, duration])

  return value
}

function StatValue({
  target,
  suffix,
  text,
  active,
}: {
  target: number | null
  suffix?: string
  text?: string
  active: boolean
}) {
  const count = useCountUp(target, active)

  if (target === null) return <>{text}</>
  return <>{count}{suffix}</>
}

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const { openBooking } = useBooking()
  const { t } = useLocale()

  useEffect(() => {
    const el = statsRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const stats = [
    { target: 3 as number | null, suffix: '+', label: t.heroStat1Label, text: undefined as string | undefined },
    { target: 2, suffix: '', label: t.heroStat2Label, text: undefined },
    { target: null, suffix: undefined, label: t.heroStat3Label, text: t.heroStat3Value },
  ]

  return (
    <section className={styles.hero}>
      <div className={styles.main}>
        <div className={styles.copy}>
          <h1 className={styles.headline}>
            {t.heroHeadlineBefore}{' '}
            <span className={styles.headlineAccent}>{t.heroHeadlineAccent}</span>
            {' '}{t.heroHeadlineAfter}
          </h1>
          <p className={styles.lead}>{t.heroLead}</p>
          <div className={styles.actions}>
            <button type="button" className={styles.cta} onClick={() => openBooking()}>
              {t.ctaConsult}
              <span className={styles.ctaArrow} aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 14 L14 2 M6 2 H14 V10"/>
                </svg>
              </span>
            </button>
            <a
              href={BRAND.instagram}
              className={styles.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.ctaInstagram}
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.photo}>
            <Image
              src={BRAND.heroDesktop}
              alt="Dr. Taras Hladun — Urologist"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 42vw"
              className={styles.photoImg}
            />
          </div>
        </div>
      </div>

      <div className={styles.stats} ref={statsRef}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <span className={styles.statValue}>
              <StatValue
                target={stat.target}
                suffix={stat.suffix}
                text={stat.text}
                active={active}
              />
            </span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>

      <a
        href={BRAND.instagram}
        className={styles.floatWa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="12" cy="12" r="4.4" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" />
        </svg>
      </a>
    </section>
  )
}
