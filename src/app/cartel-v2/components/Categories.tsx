import Image from 'next/image'
import { BRAND } from '../../cartel/brand'
import styles from './Categories.module.css'

const ITEMS = [
  {
    title: 'Ресторани',
    hint: '19 закладів · 3 міста',
    cta: 'Переглянути',
    href: '#restorany',
    image: '/images/cartel/hero.jpg',
  },
  {
    title: 'Готелі',
    hint: 'Біля схилів Буковеля',
    cta: 'Забронювати',
    href: '#goteli',
    image: BRAND.heroDesktop,
  },
  {
    title: 'VODA club',
    hint: 'SPA та басейн',
    cta: 'Дізнатися',
    href: '#spa',
    image: BRAND.heroMobile,
  },
  {
    title: 'Дозвілля',
    hint: 'Банька · події',
    cta: 'Запитати',
    href: '#kontakt',
    image: BRAND.contactImage,
  },
] as const

export default function Categories() {
  return (
    <section id="restorany" className={styles.section} aria-label="Напрямки">
      <div className={styles.grid}>
        {ITEMS.map((item, i) => (
          <a
            key={i}
            href={item.href}
            className={styles.card}
            id={item.href === '#spa' ? 'spa' : undefined}
          >
            <Image src={item.image} alt="" fill sizes="25vw" className={styles.cardImg} />
            <div className={styles.cardShade} />
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>{item.title}</h2>
              <p className={styles.cardHint}>{item.hint}</p>
              <span className={styles.cardLink}>{item.cta}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
