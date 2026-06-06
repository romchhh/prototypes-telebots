'use client'
import Image from 'next/image'
import { useState } from 'react'
import styles from './ContactSection.module.css'

const TICKET_TYPES = [
  'Стандарт',
  'PRO',
  'VIP',
]

type FormState = { name: string; phone: string; ticket: string; comment: string; consent: boolean }
type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', ticket: '', comment: '', consent: false })
  const [status, setStatus] = useState<Status>('idle')

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const val = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
    setForm(f => ({ ...f, [k]: val }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.consent) return
    setStatus('loading')
    await new Promise(r => setTimeout(r, 1400))
    setStatus('success')
  }

  return (
    <section id="kontakt" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Залишити<br />заявку
          </h2>
          <div className={styles.imgWrap}>
            <Image
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
              alt="Атмосфера події PROяв"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.img}
            />
          </div>
        </div>

        <div className={styles.right}>
          <p className={styles.subheading}>
            Залиш заявку на квиток — ми зв&apos;яжемось з тобою<br />
            та надішлемо деталі оплати та підтвердження
          </p>

          {status === 'success' ? (
            <div className={styles.success}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="var(--sky)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="24" cy="24" r="20"/>
                <path d="M14 24 L21 31 L34 18"/>
              </svg>
              <h3>Дякуємо!</h3>
              <p>Ми зв&apos;яжемось з тобою найближчим часом.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label htmlFor="name">Ім&apos;я</label>
                <input id="name" type="text" placeholder="Введи ім&apos;я" value={form.name} onChange={set('name')} required />
              </div>
              <div className={styles.field}>
                <label htmlFor="phone">Номер телефону</label>
                <input id="phone" type="tel" placeholder="Твій номер телефону" value={form.phone} onChange={set('phone')} required />
              </div>
              <div className={styles.field}>
                <label htmlFor="ticket">Тип квитка</label>
                <div className={styles.selectWrap}>
                  <select id="ticket" value={form.ticket} onChange={set('ticket')}>
                    <option value="">Обери тип квитка</option>
                    {TICKET_TYPES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <svg className={styles.chevron} width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--slate)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 6 L8 11 L13 6"/>
                  </svg>
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="comment">Коментар</label>
                <textarea id="comment" placeholder="Твій коментар..." rows={4} value={form.comment} onChange={set('comment')} />
              </div>
              <label className={styles.consent}>
                <input type="checkbox" checked={form.consent} onChange={set('consent')} required />
                <span>Заповнюючи форму, ти погоджуєшся на обробку персональних даних</span>
              </label>
              <button type="submit" className={styles.submit} disabled={!form.consent || status === 'loading'}>
                {status === 'loading' ? 'Надсилання…' : 'Надіслати заявку'}
                {status !== 'loading' && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2 14 L14 2 M6 2 H14 V10"/>
                  </svg>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
