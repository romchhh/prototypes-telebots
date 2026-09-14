import Image from 'next/image'
import { BRAND } from '../brand'
import styles from './Directions.module.css'

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 14 L14 2 M6 2 H14 V10" />
  </svg>
)

export default function Directions() {
  return (
    <section id="restorany" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 className={styles.heading}>
            <span>Сімʼя проєктів</span>
            <em>CARTEL</em>
          </h2>
          <div className={styles.introAside}>
            <span className={styles.slash} aria-hidden="true">/</span>
            <p className={styles.lead}>
              Ресторани, SPA, готелі та розваги — усе для відпочинку в Буковелі та за його межами.
            </p>
          </div>
        </div>

        <div className={styles.bento}>
          <a id="spa" href="#kontakt" className={`${styles.tile} ${styles.feature}`}>
            <Image
              src={BRAND.heroDesktop}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.tileImg}
            />
            <div className={styles.tileShade} />
            <span className={styles.tag}>VODA club</span>
            <span className={styles.tileArrow} aria-hidden="true"><Arrow /></span>
            <div className={styles.tileCopy}>
              <h3>Найвисокогірніший пляж країни</h3>
              <p>Всесезонний басейн, SPA, джакузі та італійський ресторан у серці Карпат.</p>
            </div>
          </a>

          <a href="#kontakt" className={`${styles.tile} ${styles.choice}`}>
            <span className={styles.tagMuted}>Ресторани</span>
            <h3>19 закладів</h3>
            <p>Українська, італійська, азійська та американська кухні — Буковель, Яремче, Одеса.</p>
            <div className={styles.tiltWrap}>
              <Image
                src={BRAND.contactImage}
                alt=""
                width={160}
                height={120}
                className={styles.tiltImg}
              />
            </div>
          </a>

          <a href="#kontakt" className={`${styles.tile} ${styles.tall}`}>
            <Image
              src={BRAND.heroMobile}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 30vw"
              className={styles.tileImg}
            />
            <div className={styles.tileShade} />
            <span className={styles.tag}>SPA & відпочинок</span>
            <div className={styles.tallCopy}>
              <span>Гори</span>
              <span>Смак</span>
              <span>Сервіс</span>
            </div>
          </a>

          <a id="eat" href="#kontakt" className={`${styles.tile} ${styles.stat}`}>
            <Image
              src="/images/cartel/hero.jpg"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 30vw"
              className={styles.tileImg}
            />
            <div className={styles.tileShade} />
            <div className={styles.statCopy}>
              <strong>EatʼnʼGo</strong>
              <p>Швидко та смачно на схилах Буковелю</p>
            </div>
          </a>

          <a href="#kontakt" className={`${styles.tile} ${styles.accent}`}>
            <span className={styles.accentIcon} aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-4.5-7-10a7 7 0 1 1 14 0c0 5.5-7 10-7 10z" />
                <circle cx="12" cy="11" r="2.2" />
              </svg>
            </span>
            <span className={styles.tagOnAccent}>Готелі</span>
            <h3>Комфорт біля схилів</h3>
          </a>

          <a id="banya" href="#kontakt" className={`${styles.tile} ${styles.wide}`}>
            <Image
              src="/images/cartel/contact.jpg"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
              className={styles.tileImg}
            />
            <div className={styles.tileShade} />
            <div className={styles.wideCopy}>
              <p>Старовинний обряд і професійний масаж</p>
              <h3>Банька на дровах</h3>
            </div>
          </a>
        </div>

        <div id="goteli" className={styles.hotels}>
          <div className={styles.hotelsMedia}>
            <Image
              src={BRAND.heroDesktop}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              className={styles.hotelsImg}
            />
            <div className={styles.hotelsShade} />
          </div>
          <div className={styles.hotelsBody}>
            <h3>Готелі CARTEL у <em>Буковелі</em></h3>
            <p>
              Комфорт біля схилів і повний сервіс холдингу: від сніданку до SPA.
              Бронюйте проживання в атмосфері Карпат.
            </p>
            <a href="#kontakt" className={styles.hotelsCta}>
              Забронювати проживання
              <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
