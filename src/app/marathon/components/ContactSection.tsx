'use client'
import Image from 'next/image'
import { useState } from 'react'
import styles from './ContactSection.module.css'

type FormState = { name: string; phone: string; comment: string; consent: boolean }
type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', comment: '', consent: false })
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
            Приєднуйся<br />до марафону
          </h2>
          <div className={styles.imgWrap}>
            <Image
              src="/images/001.JPG"
              alt="Учасниця марафону англійської"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.img}
            />
          </div>
        </div>

        <div className={styles.right}>
          <p className={styles.subheading}>
            Залиш заявку та отримай доступ до марафону за 490 грн<br />
            замість 2 450 грн — знижка 80% діє обмежений час
          </p>

          {status === 'success' ? (
            <div className={styles.success}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="var(--sky)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="24" cy="24" r="20"/>
                <path d="M14 24 L21 31 L34 18"/>
              </svg>
              <h3>Дякуємо!</h3>
              <p>Ми зв&apos;яжемося з вами найближчим часом.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label htmlFor="name">Ім&apos;я</label>
                <input id="name" type="text" placeholder="Введіть ім'я" value={form.name} onChange={set('name')} required />
              </div>
              <div className={styles.field}>
                <label htmlFor="phone">Номер телефону</label>
                <input id="phone" type="tel" placeholder="Ваш номер телефону" value={form.phone} onChange={set('phone')} required />
              </div>
              <div className={styles.field}>
                <label htmlFor="comment">Коментар</label>
                <textarea id="comment" placeholder="Ваш коментар..." rows={4} value={form.comment} onChange={set('comment')} />
              </div>
              <label className={styles.consent}>
                <input type="checkbox" checked={form.consent} onChange={set('consent')} required />
                <span>Заповнюючи форму, ви погоджуєтесь на обробку персональних даних</span>
              </label>
              <button type="submit" className={styles.submit} disabled={!form.consent || status === 'loading'}>
                {status === 'loading' ? 'Надсилання…' : 'Приєднатись до марафону зі знижкою 80%'}
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
