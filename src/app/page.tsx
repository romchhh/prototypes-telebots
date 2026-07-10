import Link from 'next/link'
import styles from './page.module.css'

const PROTOTYPES = [
  {
    slug: 'dente',
    title: 'Denté',
    desc: 'Stomatologia — landing page (PL)',
    tag: 'Клініка',
  },
  {
    slug: 'proyav',
    title: 'PROяв',
    desc: 'Масштабна подія у Тернополі — event page (UA)',
    tag: 'Подія',
  },
  {
    slug: 'lake-alpha',
    title: 'Lake Alpha',
    desc: 'HutJet — кастомний лендинг модульного будинку (UA)',
    tag: 'Нерухомість',
  },
  {
    slug: 'lake-alpha-dente',
    title: 'Lake Alpha v2',
    desc: 'HutJet — альтернатива на layout Denté (UA)',
    tag: 'Нерухомість',
  },
  {
    slug: 'marathon',
    title: 'Royal Academy School',
    desc: 'Марафон англійської — landing page (UA)',
    tag: 'Освіта',
  },
  {
    slug: 'west-auto',
    title: 'West Auto Shipping',
    desc: 'Пригін авто з США — landing page (UA)',
    tag: 'Авто',
  },
  {
    slug: 'kreona',
    title: 'Kreona Company',
    desc: 'Автомобілі з Європи — підбір, покупка, продаж (UA)',
    tag: 'Авто',
  },
]

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a href="https://telebots.site/uk" target="_blank" rel="noopener noreferrer" className={styles.brand}>
          telebots<span>.</span>
        </a>
        <a href="https://telebots.site/uk" target="_blank" rel="noopener noreferrer" className={styles.headerCta}>
          Замовити розробку
        </a>
      </header>

      <main className={styles.main}>
        <p className={styles.eyebrow}>Прототипи сайтів</p>
        <h1 className={styles.title}>
          Демо-проєкти<br /><em>TeleBots</em>
        </h1>
        <p className={styles.sub}>
          Інтерактивні прототипи для презентації клієнтам.
          Оберіть проєкт, щоб переглянути.
        </p>

        <div className={styles.grid}>
          {PROTOTYPES.map((p) => (
            <Link key={p.slug} href={`/${p.slug}`} className={styles.card}>
              <span className={styles.tag}>{p.tag}</span>
              <h2 className={styles.cardTitle}>{p.title}</h2>
              <p className={styles.cardDesc}>{p.desc}</p>
              <span className={styles.cardLink}>
                Переглянути
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 14 L14 2 M6 2 H14 V10"/>
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <a href="https://telebots.site/uk" target="_blank" rel="noopener noreferrer" className={styles.siteLink}>
          telebots.site — розробка чат-ботів і сайтів під ключ
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M2 14 L14 2 M6 2 H14 V10"/>
          </svg>
        </a>
      </main>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} TeleBots</span>
        <a href="https://telebots.site/uk" target="_blank" rel="noopener noreferrer">telebots.site</a>
      </footer>
    </div>
  )
}
