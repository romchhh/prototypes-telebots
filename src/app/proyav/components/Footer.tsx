import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <nav className={styles.links} aria-label="Навігація в підвалі">
          <a href="#pro-podiyu">Про подію</a>
          <a href="#pro-podiyu">Програма</a>
          <a href="#pro-podiyu">Спікери</a>
          <a href="#kvitky">Квитки</a>
          <a href="#kontakt">Контакти</a>
        </nav>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h3>Дата та час</h3>
            <p>26 вересня 2026</p>
            <p>09:00 — 21:00</p>
          </div>

          <div className={styles.col}>
            <h3>Локація</h3>
            <p>Тернопіль<br />Подоляни Холл</p>
            <p>+380 67 000 00 00</p>
            <a href="mailto:info@proyav.ua">info@proyav.ua</a>
          </div>

          <div className={styles.col}>
            <h3>Соцмережі</h3>
            <a href="#">INSTAGRAM</a>
            <a href="#">FACEBOOK</a>
            <a href="#">TELEGRAM</a>
          </div>
        </div>
      </div>

      <div className={styles.wordmark} aria-hidden="true">PROЯВ</div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} PROяв. Усі права захищені.</span>
        <a href="#">Політика конфіденційності</a>
        <a href="#" className={styles.dev}>ПРОТОТИП СТОРІНКИ</a>
      </div>
    </footer>
  )
}
