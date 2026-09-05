import PrototypeBanner from '../../components/PrototypeBanner'
import { BRAND } from '../brand'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.top}>
        <nav className={styles.links} aria-label="Nawigacja w stopce">
          <a href="#o-mnie">O mnie</a>
          <a href="#uslugi">Usługi</a>
          <a href="#doswiadczenie">Doświadczenie</a>
          <a href="#menu">Menu</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h3>Rola</h3>
            <p>Szef kuchni</p>
            <p>Brand chef · Konsultacje</p>
          </div>

          <div className={styles.col}>
            <h3>Kontakt</h3>
            <p>{BRAND.address}</p>
            <p>{BRAND.phone}</p>
            <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          </div>

          <div className={styles.col}>
            <h3>Media społecznościowe</h3>
            <a href="#">INSTAGRAM</a>
            <a href="#">LINKEDIN</a>
            <a href="#">FACEBOOK</a>
            <a href="#">YOUTUBE</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} OLEH REZNICHENKO. Wszelkie prawa zastrzeżone.</span>
        <a href="#">Polityka prywatności</a>
      </div>
    </footer>
    <PrototypeBanner />
    </>
  )
}
