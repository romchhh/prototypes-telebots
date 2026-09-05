'use client'
import { useEffect, useState } from 'react'
import { BRAND } from '../brand'
import styles from './BookingModal.module.css'

type FormState = { name: string; phone: string; email: string }
type Status = 'idle' | 'loading' | 'success'

type Props = {
  open: boolean
  service?: string
  onClose: () => void
}

export default function BookingModal({ open, service = '', onClose }: Props) {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', email: '' })
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    if (open) {
      setForm({ name: '', phone: '', email: '' })
      setStatus('idle')
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open, service])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(f => ({ ...f, [k]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    await new Promise(r => setTimeout(r, 1400))
    setStatus('success')
  }

  if (!open) return null

  const wa = `https://wa.me/${BRAND.phone.replace(/\D/g, '')}`

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Formularz kontaktu">
      <button type="button" className={styles.backdrop} onClick={onClose} aria-label="Zamknij" />
      <div className={styles.sheet}>
        <div className={styles.handle} aria-hidden="true" />

        {status === 'success' ? (
          <div className={styles.success}>
            <h3>Dziękuję!</h3>
            <p>Skontaktuję się z Tobą w najbliższym czasie.</p>
            <button type="button" className={styles.submit} onClick={onClose}>
              Zamknij
              <span className={styles.submitArrow} aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 14 L14 2 M6 2 H14 V10"/>
                </svg>
              </span>
            </button>
          </div>
        ) : (
          <>
            <h3 className={styles.title}>Skontaktuj się z nami</h3>
            {service ? <p className={styles.serviceHint}>{service}</p> : null}

            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="imię"
                value={form.name}
                onChange={set('name')}
                required
                className={styles.input}
                autoComplete="name"
              />
              <input
                type="tel"
                placeholder="telefon"
                value={form.phone}
                onChange={set('phone')}
                required
                className={styles.input}
                autoComplete="tel"
              />
              <input
                type="email"
                placeholder="email"
                value={form.email}
                onChange={set('email')}
                required
                className={styles.input}
                autoComplete="email"
              />

              <button type="submit" className={styles.submit} disabled={status === 'loading'}>
                {status === 'loading' ? 'Wysyłanie…' : 'Wyślij'}
                {status !== 'loading' && (
                  <span className={styles.submitArrow} aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 14 L14 2 M6 2 H14 V10"/>
                    </svg>
                  </span>
                )}
              </button>
            </form>

            <p className={styles.or}>Lub</p>
            <div className={styles.socials}>
              <span className={styles.socialLabel}>Napisz do nas w</span>
              <a href="#" className={styles.telegram} target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.062 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141a.506.506 0 0 1 .171.325c.016.093.036.305.02.472z"/>
                </svg>
                Telegram
              </a>
              <a href={wa} className={styles.whatsapp} target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
