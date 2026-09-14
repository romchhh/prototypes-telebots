'use client'
import { useState } from 'react'
import { FAQ as ITEMS } from '../brand'
import styles from './FAQ.module.css'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Питання<br /><em>і відповіді</em>
          </h2>
          <p className={styles.lead}>
            Запис, вік, членство клубів, календар і антидопінг. Не знайшли відповідь — напишіть у формі заявки.
          </p>
          <a href="#kontakt" className={styles.cta}>
            Задати питання
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 14 L14 2 M6 2 H14 V10"/>
            </svg>
          </a>
        </div>
        <div className={styles.list}>
          {ITEMS.map((item, i) => {
            const expanded = open === i
            return (
              <div key={item.q} className={`${styles.item} ${expanded ? styles.itemOpen : ''}`}>
                <button
                  type="button"
                  className={styles.trigger}
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? -1 : i)}
                >
                  <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.question}>{item.q}</span>
                  <span className={styles.icon} aria-hidden="true">{expanded ? '—' : '+'}</span>
                </button>
                {expanded && <p className={styles.answer}>{item.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
