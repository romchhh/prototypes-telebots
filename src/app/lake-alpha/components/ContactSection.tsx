'use client'
import Image from 'next/image'
import { useState } from 'react'
import { BRAND } from '../brand'
import styles from './ContactSection.module.css'

const INTERESTS = [
  'Записатися на перегляд',
  'Отримати консультацію',
  'Отримати презентацію',
  'Екскурсія виробництвом',
  'Інше',
]

type FormState = {
  name: string
  phone: string
  email: string
  interest: string
  comment: string
  consent: boolean
}

type Status = 'idle' | 'loading' | 'success'

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    interest: '',
    comment: '',
    consent: false,
  })
  const [status, setStatus] = useState<Status>('idle')

  const set = (k: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const val = e.target.type === 'checkbox'
      ? (e.target as HTMLInputElement).checked
      : e.target.value
    setForm((f) => ({ ...f, [k]: val }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.consent) return
    setStatus('loading')
    await new Promise((r) => setTimeout(r, 1400))
    setStatus('success')
  }

  return (
    <section id="kontakt" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Почніть жити<br /><em>без компромісів</em>
          </h2>
          <p className={styles.lead}>
            Залиште заявку — ми розповімо про модель, покажемо будинок
            та допоможемо обрати комплектацію під ваш стиль життя.
          </p>

          <div className={styles.imgWrap}>
            <Image
              src={BRAND.heroImage}
              alt="Lake Alpha — інтер'єр та архітектура"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.img}
            />
          </div>

          <div className={styles.contacts}>
            <div>
              <span className={styles.contactLabel}>Телефон</span>
              <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`}>{BRAND.phone}</a>
            </div>
            <div>
              <span className={styles.contactLabel}>Email</span>
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          {status === 'success' ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="var(--red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="16" cy="16" r="13"/>
                  <path d="M10 16 L14 20 L22 12"/>
                </svg>
              </div>
              <h3>Дякуємо!</h3>
              <p>Ми зв&apos;яжемося з вами найближчим часом.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label htmlFor="name">Ім&apos;я</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Ваше ім'я"
                  value={form.name}
                  onChange={set('name')}
                  required
                />
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="phone">Телефон</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+380"
                    value={form.phone}
                    onChange={set('phone')}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={set('email')}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="interest">Мене цікавить</label>
                <div className={styles.selectWrap}>
                  <select id="interest" value={form.interest} onChange={set('interest')}>
                    <option value="">Оберіть варіант</option>
                    {INTERESTS.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                  <svg className={styles.chevron} width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--gray)" strokeWidth="2" strokeLinecap="round">
                    <path d="M3 6 L8 11 L13 6"/>
                  </svg>
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="comment">Коментар</label>
                <textarea
                  id="comment"
                  placeholder="Розкажіть про ваші побажання..."
                  rows={4}
                  value={form.comment}
                  onChange={set('comment')}
                />
              </div>

              <label className={styles.consent}>
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={set('consent')}
                  required
                />
                <span>
                  Надсилаючи форму, ви погоджуєтесь на обробку персональних даних
                </span>
              </label>

              <button
                type="submit"
                className={styles.submit}
                disabled={!form.consent || status === 'loading'}
              >
                {status === 'loading' ? 'Надсилання…' : 'Надіслати заявку'}
                {status !== 'loading' && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
