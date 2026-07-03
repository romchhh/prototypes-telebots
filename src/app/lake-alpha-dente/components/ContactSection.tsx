'use client'
import Image from 'next/image'
import { useState } from 'react'
import { BRAND, SERVICES } from '../brand'
import styles from './ContactSection.module.css'

type FormState = { name: string; phone: string; service: string; comment: string; consent: boolean }
type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', service: '', comment: '', consent: false })
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
            Почнімо розмову<br />про будинок
          </h2>
          <div className={styles.imgWrap}>
            <Image
              src={BRAND.contactImage}
              alt="Сучасний модульний будинок Lake Alpha від HutJet"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.img}
            />
          </div>
        </div>

        <div className={styles.right}>
          <p className={styles.subheading}>
            Безкоштовна консультація — залиште заявку,<br />
            і ми зв&apos;яжемося, щоб домовитись про зручний час перегляду
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
                <input id="name" type="text" placeholder="Введіть ім&apos;я" value={form.name} onChange={set('name')} required />
              </div>
              <div className={styles.field}>
                <label htmlFor="phone">Номер телефону</label>
                <input id="phone" type="tel" placeholder="Ваш номер телефону" value={form.phone} onChange={set('phone')} required />
              </div>
              <div className={styles.field}>
                <label htmlFor="service">Оберіть послугу</label>
                <div className={styles.selectWrap}>
                  <select id="service" value={form.service} onChange={set('service')}>
                    <option value="">Потрібна послуга</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <svg className={styles.chevron} width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--slate)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 6 L8 11 L13 6"/>
                  </svg>
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="comment">Коментар</label>
                <textarea id="comment" placeholder="Ваш коментар..." rows={4} value={form.comment} onChange={set('comment')} />
              </div>
              <label className={styles.consent}>
                <input type="checkbox" checked={form.consent} onChange={set('consent')} required />
                <span>Надсилаючи форму, ви погоджуєтесь на обробку персональних даних</span>
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
