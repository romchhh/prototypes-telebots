'use client'
import Image from 'next/image'
import { useState } from 'react'
import { BRAND, SERVICES } from '../brand'
import styles from './ContactSection.module.css'

type FormState = { name: string; phone: string; service: string; comment: string; consent: boolean }
type Status = 'idle' | 'loading' | 'success'

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
            Запишіться<br /><em>на візит</em>
          </h2>
          <p className={styles.lead}>
            Залиште заявку — підберемо процедуру та зручний час.
          </p>
        </div>

        <div className={styles.panel}>
          <div className={styles.visual}>
            <Image
              src={BRAND.contactImage}
              alt="Nura — косметологічна клініка"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
              className={styles.img}
            />
            <div className={styles.visualOverlay} aria-hidden="true" />
            <div className={styles.visualContent}>
              <p className={styles.visualLabel}>Nura</p>
              <p className={styles.visualText}>Чистка · інʼєкції · догляд · лазер</p>
              <div className={styles.visualContacts}>
                <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`}>{BRAND.phone}</a>
                <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
              </div>
            </div>
          </div>

          <div className={styles.formCard}>
            {status === 'success' ? (
              <div className={styles.success}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="var(--sage)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="24" cy="24" r="20"/>
                  <path d="M14 24 L21 31 L34 18"/>
                </svg>
                <h3>Дякуємо!</h3>
                <p>Ми зв&apos;яжемося з вами найближчим часом.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <p className={styles.formTitle}>Запис на консультацію</p>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="nura-name">Ім&apos;я</label>
                    <input id="nura-name" type="text" placeholder="Ваше ім&apos;я" value={form.name} onChange={set('name')} required />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="nura-phone">Телефон</label>
                    <input id="nura-phone" type="tel" placeholder="+380" value={form.phone} onChange={set('phone')} required />
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="nura-service">Послуга</label>
                  <div className={styles.selectWrap}>
                    <select id="nura-service" value={form.service} onChange={set('service')}>
                      <option value="">Оберіть варіант</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <svg className={styles.chevron} width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--stone)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 6 L8 11 L13 6"/>
                    </svg>
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="nura-comment">Коментар</label>
                  <textarea id="nura-comment" placeholder="Тип шкіри, побажання..." rows={3} value={form.comment} onChange={set('comment')} />
                </div>
                <label className={styles.consent}>
                  <input type="checkbox" checked={form.consent} onChange={set('consent')} required />
                  <span>Надсилаючи форму, ви погоджуєтесь на обробку персональних даних</span>
                </label>
                <button type="submit" className={styles.submit} disabled={!form.consent || status === 'loading'}>
                  {status === 'loading' ? 'Надсилання…' : 'Записатися'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
