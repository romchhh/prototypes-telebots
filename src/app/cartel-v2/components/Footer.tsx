import PrototypeBanner from '../../components/PrototypeBanner'
import { BRAND } from '../../cartel/brand'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p className={styles.copy}>© Ambikom Ltd. {new Date().getFullYear()} · {BRAND.address}</p>
        <a href="/cartel" className={styles.v1Link}>Версія 1</a>
      </footer>
      <PrototypeBanner />
    </>
  )
}
