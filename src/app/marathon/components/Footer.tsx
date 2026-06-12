import PrototypeBanner from '../../components/PrototypeBanner'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.top}>
        <nav className={styles.links} aria-label="Навігація в підвалі">
          <a href="#">Про марафон</a>
          <a href="#">Програма</a>
          <a href="#">Викладачі</a>
          <a href="#">Історії учасників</a>
          <a href="#">Відгуки</a>
        </nav>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h3>Формат</h3>
            <p>10 тем за 10 днів</p>
            <p>Щоденні уроки та практика</p>
          </div>

          <div className={styles.col}>
            <h3>Контакт</h3>
            <p>Онлайн-формат</p>
            <p>+380 97 123 45 67</p>
            <a href="mailto:hello@10x10.ua">hello@10x10.ua</a>
          </div>

          <div className={styles.col}>
            <h3>Соцмережі</h3>
            <a href="#">INSTAGRAM</a>
            <a href="#">FACEBOOK</a>
            <a href="#">TIKTOK</a>
          </div>
        </div>
      </div>

      <div className={styles.wordmark} aria-hidden="true">10×10</div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} 10×10. Усі права захищені.</span>
        <a href="#">Політика конфіденційності</a>
      </div>
    </footer>
    <PrototypeBanner />
    </>
  )
}
