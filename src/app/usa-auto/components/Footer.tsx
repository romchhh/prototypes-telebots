import Image from 'next/image'
import PrototypeBanner from '../../components/PrototypeBanner'
import { BRAND } from '../brand'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.bg} aria-hidden="true">
          <Image
            src={BRAND.footerBg}
            alt=""
            fill
            sizes="100vw"
            className={styles.bgImage}
          />
          <div className={styles.overlay} />
          <div className={styles.fadeTop} />
        </div>

        <div className={styles.inner}>
          <div className={styles.brand}>
            <Image
              src={BRAND.logoLight}
              alt={BRAND.name}
              width={280}
              height={60}
              className={styles.logo}
            />
          </div>

          <div className={styles.cols}>
            <div className={styles.col}>
              <span className={styles.label}>Компанія</span>
              <p>{BRAND.name}</p>
              <span className={styles.label}>Instagram</span>
              <a href="#">@usaauto.ua</a>
            </div>

            <div className={styles.col}>
              <span className={styles.label}>Адреса</span>
              <p>
                {BRAND.address}
                <br />
                {BRAND.city}
              </p>
              <span className={styles.label}>Графік</span>
              <p>Пн–Пт: 9:00 – 19:00</p>
            </div>

            <div className={styles.col}>
              <span className={styles.label}>Телефон</span>
              <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`}>{BRAND.phone}</a>
              <span className={styles.label}>Telegram</span>
              <a href="#">@usaauto</a>
            </div>

            <div className={styles.col}>
              <span className={styles.label}>Email</span>
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
              <span className={styles.label}>Послуги</span>
              <a href="#services">Підбір і пригін</a>
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.copy}>
              <span>© Copyright {BRAND.name} {new Date().getFullYear()}</span>
              <a href="#contact">Політика конфіденційності</a>
            </div>

            <a
              href="https://telebots.site/uk"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.telebots}
            >
              <span className={styles.telebotsMark} aria-hidden="true">
                t.
              </span>
              Сайт розроблено TeleBots
            </a>
          </div>
        </div>
      </footer>
      <PrototypeBanner />
    </>
  )
}
