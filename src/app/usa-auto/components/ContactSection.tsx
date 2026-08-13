'use client'
import { useEffect, useState } from 'react'
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

  useEffect(() => {
    const onService = (e: Event) => {
      const label = (e as CustomEvent<string>).detail
      if (label) setForm((f) => ({ ...f, service: label }))
    }
    window.addEventListener('ua-service', onService)
    return () => window.removeEventListener('ua-service', onService)
  }, [])

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
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 className={styles.heading}>
            Запишіться на<br />
            <em>консультацію</em>
          </h2>
          <p className={styles.lead}>
            Оберіть напрям — підбір або пригін з США — і команда USA Auto
            зв&apos;яжеться з вами з наступним кроком.
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
              <span>Офіс</span>
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
                  <label htmlFor="ua-name">Ім&apos;я</label>
                  <input
                    id="ua-name"
                    type="text"
                    placeholder="Ваше ім'я"
                    value={form.name}
                    onChange={set('name')}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="ua-phone">Телефон</label>
                  <input
                    id="ua-phone"
                    type="tel"
                    placeholder="+380…"
                    value={form.phone}
                    onChange={set('phone')}
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="ua-service">Послуга</label>
                <div className={styles.selectWrap}>
                  <select id="ua-service" value={form.service} onChange={set('service')}>
                    <option value="">Оберіть напрям</option>
                    {CONTACT_SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="ua-comment">Коротко про авто</label>
                <textarea
                  id="ua-comment"
                  rows={4}
                  placeholder="Яке авто шукаєте, бюджет і терміни…"
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
