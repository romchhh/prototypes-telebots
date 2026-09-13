import Image from 'next/image'
import PrototypeBanner from '../../components/PrototypeBanner'
import { BRAND, NAV } from '../brand'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.top}>
        <nav className={styles.links} aria-label="Навігація в підвалі">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <div className={styles.cols}>
          <div className={styles.col} id="blog">
            <h3>Про CARTEL</h3>
            <p>
              Філософія здорового та якісного відпочинку вдома — з сервісом європейського рівня.
            </p>
          </div>

          <div className={styles.col}>
            <h3>Контакти</h3>
            <p>{BRAND.address}<br />{BRAND.city}</p>
            <p>{BRAND.phone}</p>
            <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          </div>

          <div className={styles.col}>
            <h3>Соцмережі</h3>
            <a href="#">INSTAGRAM</a>
            <a href="#">TELEGRAM</a>
            <a href="#">FACEBOOK</a>
          </div>
        </div>
      </div>

      <div className={styles.wordmark} aria-hidden="true">
        <Image
          src={BRAND.logoBlack}
          alt=""
          width={720}
          height={120}
          className={styles.wordmarkImg}
        />
      </div>

      <div className={styles.bottom}>
        <span>© Ambikom Ltd. {new Date().getFullYear()}</span>
        <a href="#kontakt">Приєднуйся</a>
      </div>
    </footer>
    <PrototypeBanner />
    </>
  )
}
