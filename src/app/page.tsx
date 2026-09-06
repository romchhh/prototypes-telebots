import Link from 'next/link'
import styles from './page.module.css'

const PROPOSALS = [
  {
    href: '/proposals/filo-estate.html',
    title: 'Filo Estate',
    desc: 'Комерційна пропозиція TeleBots × Filo Estate',
    tag: 'КП',
  },
]

const PROTOTYPES = [
  {
    slug: 'dente',
    title: 'Denté',
    desc: 'Stomatologia — landing page (PL)',
    tag: 'Клініка',
  },
  {
    slug: 'yustytsiya',
    title: 'Юстиція',
    desc: 'Професійний юрист у Києві — landing page (UA)',
    tag: 'Юриспруденція',
  },
  {
    slug: 'lexi',
    title: 'LEXI.education',
    desc: 'Школа іноземних мов для дітей — landing page (UA)',
    tag: 'Освіта',
  },
  {
    slug: 'proassistant',
    title: 'ProAssistant',
    desc: 'Професійна підготовка майбутніх лідерів — landing page (UA)',
    tag: 'Освіта',
  },
  {
    slug: 'usa-auto',
    title: 'USA Auto',
    desc: 'Авто з Америки під ключ — landing page (UA)',
    tag: 'Авто',
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
    slug: 'sanvit-holding',
    title: 'Санвіт-Холдинг',
    desc: 'Повний цикл пакування для бізнесу — корпоративний B2B (UA)',
    tag: 'B2B',
  },
  {
    slug: 'filo-estate',
    title: 'Filo Estate',
    desc: 'Нерухомість в Анталії — filtered platform (RU/EN)',
    tag: 'Нерухомість',
  },
  {
    slug: 'common-hospitality',
    title: 'Commons Hospitality',
    desc: 'Консалтинг і управління в HoReCa — landing page (UA)',
    tag: 'HoReCa',
  },
  {
    slug: 'oleh-reznichenko',
    title: 'OLEH REZNICHENKO',
    desc: 'Szef kuchni — portfolio i CV (PL)',
    tag: 'HoReCa',
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
  {
    slug: 'litun',
    title: 'Ілля Літун',
    desc: 'Освітній бізнес — консалтинг, страт сесії, клуб (UA)',
    tag: 'Освіта',
  },
  {
    slug: 'differ-sport',
    title: 'Differ Sport',
    desc: 'Біговий клуб у Львові — тренування, підписка, цифрові продукти (UA)',
    tag: 'Спорт',
  },
  {
    slug: 'liquid-glass',
    title: 'Kreona · Liquid Glass',
    desc: 'Повний liquid glass UI — авто з Європи (UA)',
    tag: 'Авто',
  },
  {
    slug: 'nura',
    title: 'Nura',
    desc: 'Косметологічна клініка — landing page (UA)',
    tag: 'Клініка',
  },
  {
    slug: 'grand-cru',
    title: 'Grand Cru',
    desc: 'Bespoke Land Rover Defenders — landing page (EN)',
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

        <section className={styles.proposals}>
          <p className={styles.proposalsEyebrow}>Окремо</p>
          <h2 className={styles.proposalsTitle}>Комерційні пропозиції</h2>
          <p className={styles.proposalsSub}>
            Документи для клієнтів — не прототипи сайтів.
          </p>
          <div className={styles.proposalsGrid}>
            {PROPOSALS.map((p) => (
              <a key={p.href} href={p.href} className={styles.proposalCard}>
                <span className={styles.proposalTag}>{p.tag}</span>
                <h3 className={styles.proposalTitle}>{p.title}</h3>
                <p className={styles.proposalDesc}>{p.desc}</p>
                <span className={styles.cardLink}>
                  Відкрити
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2 14 L14 2 M6 2 H14 V10"/>
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </section>

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
