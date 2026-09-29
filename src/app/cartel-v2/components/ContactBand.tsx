import { BRAND } from '../../cartel/brand'
import styles from './ContactBand.module.css'

const COL_A = [
  { label: 'Ресторани', href: '#restorany' },
  { label: 'Вакансії', href: '#komanda' },
  { label: 'Преса', href: '#kontakt' },
  { label: 'Контакти', href: '#kontakt' },
  { label: 'Корпоративи', href: '#kontakt' },
]

const COL_B = [
  { label: 'Конфіденційність', href: '#' },
  { label: 'Cookies', href: '#' },
  { label: 'Умови', href: '#' },
  { label: 'Етика', href: '#' },
]

export default function ContactBand() {
  return (
    <section id="kontakt" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.ctaCol}>
          <h2 className={styles.heading}>Контакти</h2>
          <p className={styles.lead}>
            Столик, доставка, готель чи подія — напишіть або зателефонуйте:{' '}
            <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`} className={styles.phone}>{BRAND.phone}</a>
          </p>
          <a href={`mailto:${BRAND.email}`} className={styles.ghostBtn}>Надіслати лист</a>
        </div>
        <nav className={styles.links} aria-label="Посилання">
          <ul>
            {COL_A.map((item) => (
              <li key={item.label}><a href={item.href}>{item.label}</a></li>
            ))}
          </ul>
          <ul>
            {COL_B.map((item) => (
              <li key={item.label}><a href={item.href}>{item.label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
