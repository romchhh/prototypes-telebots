'use client'
import Image from 'next/image'
import { useState } from 'react'
import { BRAND, FORM_SERVICES } from '../brand'
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
        <div className={styles.intro}>
          <h2 className={styles.heading}>
            Porozmawiajmy<br /><em>o Twojej kuchni</em>
          </h2>
          <p className={styles.lead}>
            Otwarcie restauracji, nowe menu, brand chef lub wsparcie operacyjne — napisz, a wrócę z propozycją współpracy.
          </p>
        </div>

        <div className={styles.panel}>
          <div className={styles.visual}>
            <Image
              src={BRAND.contactImage}
              alt="Szef kuchni OLEH REZNICHENKO"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
              className={styles.img}
            />
            <div className={styles.visualOverlay} aria-hidden="true" />
            <div className={styles.visualContent}>
              <p className={styles.visualText}>
                Menu · Zespół · Operacje · Food-cost
              </p>
              <div className={styles.visualContacts}>
                <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`}>{BRAND.phone}</a>
                <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
              </div>
            </div>
          </div>

          <div className={styles.formCard}>
            {status === 'success' ? (
              <div className={styles.success}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="var(--deep)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="24" cy="24" r="20"/>
                  <path d="M14 24 L21 31 L34 18"/>
                </svg>
                <h3>Dziękuję!</h3>
                <p>Skontaktuję się z Tobą w najbliższym czasie.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <p className={styles.formTitle}>Zgłoszenie</p>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name">Imię</label>
                    <input id="name" type="text" placeholder="Twoje imię" value={form.name} onChange={set('name')} required />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="phone">Telefon</label>
                    <input id="phone" type="tel" placeholder="+48" value={form.phone} onChange={set('phone')} required />
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="service">Scenariusz</label>
                  <div className={styles.selectWrap}>
                    <select id="service" value={form.service} onChange={set('service')}>
                      <option value="">Wybierz opcję</option>
                      {FORM_SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <svg className={styles.chevron} width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--stone)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 6 L8 11 L13 6"/>
                    </svg>
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="comment">Komentarz</label>
                  <textarea id="comment" placeholder="Typ lokalu, miasto, terminy..." rows={3} value={form.comment} onChange={set('comment')} />
                </div>
                <label className={styles.consent}>
                  <input type="checkbox" checked={form.consent} onChange={set('consent')} required />
                  <span>Wysyłając formularz, wyrażasz zgodę na przetwarzanie danych osobowych</span>
                </label>
                <button type="submit" className={styles.submit} disabled={!form.consent || status === 'loading'}>
                  {status === 'loading' ? 'Wysyłanie…' : 'Wyślij zgłoszenie'}
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
      </div>
    </section>
  )
}
