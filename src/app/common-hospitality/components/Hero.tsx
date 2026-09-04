'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { BRAND } from '../brand'
import styles from './Hero.module.css'

const STATS: {
  target: number | null
  suffix?: string
  text?: string
  label: string
}[] = [
  { target: 26, suffix: '+', label: 'проєктів у портфоліо' },
  { target: 15, suffix: '+', label: 'років у hospitality' },
  { target: null, text: 'Онлайн і офлайн', label: 'повний супровід' },
]

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

  return (
    <section className={styles.hero}>
      <div className={styles.main}>
        <h1 className={styles.headline}>
          Створюємо успішні проєкти та{' '}
          <span className={styles.headlineAccent}>знакові місця</span>, до яких хочеться повертатися
        </h1>

        <div className={styles.visual}>
          <div className={styles.photo}>
            <Image
              src={BRAND.heroDesktop}
              alt="Шеф-консультант Commons Hospitality"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 38vw"
              className={styles.photoImg}
            />
          </div>
        </div>

        <div className={styles.copy}>
          <p className={styles.lead}>
            Ми поєднуємо капітал, нерухомість, концепції та управління, створюючи успішні проєкти у сфері HoReCa.
          </p>
          <div className={styles.actions}>
            <a href="#kontakt" className={styles.cta}>
              Обговорити проєкт
              <span className={styles.ctaArrow} aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 14 L14 2 M6 2 H14 V10"/>
                </svg>
              </span>
            </a>
            <a
              href="https://wa.me/380500000000"
              className={styles.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        <aside className={styles.quote}>
          <p className={styles.quoteText}>
            Великі проєкти не народжуються самі собою. Вони з’являються, коли правильні люди зустрічаються у правильний момент.
          </p>
          <div className={styles.quoteAuthor}>
            <strong>Сергій Юрчишин</strong>
            <span>Засновник</span>
          </div>
        </aside>
      </div>

      <div className={styles.stats} ref={statsRef}>
        {STATS.map((stat) => (
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
    </section>
  )
}
