'use client'
import { useState } from 'react'
import { BRAND, CONTACT_SERVICES } from '../brand'
import styles from './ContactSection.module.css'

type FormState = {
  name: string
  phone: string
  service: string
  comment: string
  consent: boolean
}
type Status = 'idle' | 'loading' | 'success'

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    service: '',
    comment: '',
    consent: false,
  })
  const [status, setStatus] = useState<Status>('idle')

  const set =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const val = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
      setForm((f) => ({ ...f, [k]: val }))
    }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.consent) return
    setStatus('loading')
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('success')
  }

  return (
    <section id="contact" className={styles.section}>
      <div id="napryamy" aria-hidden="true" />
      <div id="ciny" aria-hidden="true" />
      <div id="urok" aria-hidden="true" />
      <div id="faq" aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 className={styles.heading}>
            Запишіться<br />
            на <em>урок</em>
          </h2>
          <p className={styles.lead}>
            Залиште заявку — підберемо напрям і зручний час для пробного заняття.
          </p>

          <ul className={styles.meta}>
            <li>
              <span>Телефон</span>
              <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`}>{BRAND.phone}</a>
            </li>
            <li>
              <span>Email</span>
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
            </li>
            <li>
              <span>Адреса</span>
              <p>
                {BRAND.address}
                <br />
                {BRAND.city}
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.panel}>
          {status === 'success' ? (
            <div className={styles.success}>
              <span className={styles.successMark} aria-hidden="true">✓</span>
              <h3>Заявку отримано</h3>
              <p>Ми зв&apos;яжемося з вами найближчим часом.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="lexi-name">Ім&apos;я</label>
                  <input
                    id="lexi-name"
                    type="text"
                    placeholder="Ваше ім'я"
                    value={form.name}
                    onChange={set('name')}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="lexi-phone">Телефон</label>
                  <input
                    id="lexi-phone"
                    type="tel"
                    placeholder="+380…"
                    value={form.phone}
                    onChange={set('phone')}
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="lexi-service">Напрям</label>
                <div className={styles.selectWrap}>
                  <select id="lexi-service" value={form.service} onChange={set('service')}>
                    <option value="">Оберіть варіант</option>
                    {CONTACT_SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="lexi-comment">Коментар</label>
                <textarea
                  id="lexi-comment"
                  rows={4}
                  placeholder="Вік дитини, бажаний час, питання…"
                  value={form.comment}
                  onChange={set('comment')}
                />
              </div>

              <label className={styles.consent}>
                <input type="checkbox" checked={form.consent} onChange={set('consent')} required />
                <span>Погоджуюсь на обробку персональних даних для зворотного зв&apos;язку</span>
              </label>

              <button type="submit" className={styles.submit} disabled={!form.consent || status === 'loading'}>
                {status === 'loading' ? 'Надсилання…' : 'Надіслати заявку'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
