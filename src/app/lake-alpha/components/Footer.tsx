import PrototypeBanner from '../../components/PrototypeBanner'
import { BRAND } from '../brand'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logoMark}>h</span>
            <div>
              <strong>{BRAND.name}</strong>
              <small>{BRAND.tagline}</small>
            </div>
          </div>

          <nav className={styles.links} aria-label="Навігація в підвалі">
            <a href="#">Каталог</a>
            <a href="#">Виробництво</a>
            <a href="#">Про нас</a>
            <a href="#kontakt">Контакти</a>
          </nav>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} HutJet. Усі права захищено.</span>
          <a href="#">Політика конфіденційності</a>
        </div>
      </footer>
      <PrototypeBanner />
    </>
  )
}
