import PrototypeBanner from '../../components/PrototypeBanner'
import { BRAND } from '../brand'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.top}>
          <nav className={styles.links} aria-label="Навігація в підвалі">
            <a href="#pro-nas">Про групу</a>
            <a href="#produkciya">Продукція</a>
            <a href="#rishennya">Рішення</a>
            <a href="#vyrobnytstvo">Виробництво</a>
            <a href="#kontakty">Контакти</a>
          </nav>

          <div className={styles.cols}>
            <div className={styles.col}>
              <h3>Графік роботи</h3>
              <p>Пн–Пт: 09:00 – 18:00</p>
              <p>Сб–Нд — вихідний</p>
            </div>

            <div className={styles.col}>
              <h3>Контакти</h3>
              <p>{BRAND.address}</p>
              <p>{BRAND.factory}</p>
              <p>{BRAND.phone}</p>
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
            </div>

            <div className={styles.col}>
              <h3>Напрямки</h3>
              <p>Гофроупаковка</p>
              <p>Гнучка упаковка</p>
              <p>Витратні матеріали</p>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Санвіт-Холдинг. Усі права захищено.</span>
          <a href="#">Політика конфіденційності</a>
        </div>
      </footer>
      <PrototypeBanner />
    </>
  )
}
