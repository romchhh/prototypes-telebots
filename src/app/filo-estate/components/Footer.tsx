import PrototypeBanner from '../../components/PrototypeBanner'
import { BRAND } from '../brand'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.top}>
        <nav className={styles.links} aria-label="Навигация в подвале">
          <a href="#">О компании</a>
          <a href="#">Объекты</a>
          <a href="#">Filo Picks</a>
          <a href="#">Рынок</a>
          <a href="#">Отзывы</a>
        </nav>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h3>График работы</h3>
            <p>Пн–Сб: 10:00 – 19:00</p>
            <p>Воскресенье — выходной</p>
          </div>

          <div className={styles.col}>
            <h3>Контакты</h3>
            <p>{BRAND.address}<br />{BRAND.city}</p>
            <p>{BRAND.phone}</p>
            <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          </div>

          <div className={styles.col}>
            <h3>Социальные сети</h3>
            <a href="#">INSTAGRAM</a>
            <a href="#">TELEGRAM</a>
            <a href="#">YOUTUBE</a>
          </div>
        </div>
      </div>

      <div className={styles.wordmark} aria-hidden="true">filo</div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Filo Estate. Все права защищены.</span>
        <a href="#">Политика конфиденциальности</a>
      </div>
    </footer>
    <PrototypeBanner />
    </>
  )
}
