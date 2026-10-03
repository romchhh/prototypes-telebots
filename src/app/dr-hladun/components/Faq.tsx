'use client'
import { useState } from 'react'
import { useBooking } from './BookingContext'
import { useLocale } from './LocaleContext'
import styles from './Faq.module.css'

export default function Faq() {
  const [tab, setTab] = useState(0)
  const [open, setOpen] = useState(0)
  const { openBooking } = useBooking()
  const { t } = useLocale()

  const active = t.faqTabs[tab]

  const switchTab = (i: number) => {
    setTab(i)
    setOpen(0)
  }

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            {t.faqHeading}<br />
            <em>{t.faqHeadingEm}</em>
          </h2>
          <p className={styles.lead}>{t.faqLead}</p>
          <button
            type="button"
            className={styles.cta}
            onClick={() => openBooking()}
          >
            {t.faqCta}
            <span className={styles.ctaArrow} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 14 L14 2 M6 2 H14 V10"/>
              </svg>
            </span>
          </button>
        </div>

        <div className={styles.right}>
          <div className={styles.tabs} role="tablist">
            {t.faqTabs.map((tabItem, i) => (
              <button
                key={tabItem.id}
                type="button"
                role="tab"
                aria-selected={tab === i}
                className={`${styles.tab} ${tab === i ? styles.tabActive : ''}`}
                onClick={() => switchTab(i)}
              >
                {tabItem.label}
              </button>
            ))}
          </div>

          <div className={styles.list} role="tabpanel">
            {active.items.map((item, i) => {
              const expanded = open === i
              return (
                <div
                  key={item.q}
                  className={`${styles.item} ${expanded ? styles.itemOpen : ''}`}
                >
                  <button
                    type="button"
                    className={styles.trigger}
                    aria-expanded={expanded}
                    onClick={() => setOpen(expanded ? -1 : i)}
                  >
                    <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                    <span className={styles.question}>{item.q}</span>
                    <span className={styles.icon} aria-hidden="true">
                      {expanded ? '—' : '+'}
                    </span>
                  </button>
                  {expanded && (
                    <p className={styles.answer}>{item.a}</p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
