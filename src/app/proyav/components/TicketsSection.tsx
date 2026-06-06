import styles from './TicketsSection.module.css'

const TIERS = [
  {
    name: 'Стандарт',
    features: [
      'Доступ до всіх виступів',
      'Кава-брейки протягом дня',
      'Матеріали спікерів',
    ],
    price: '990',
    featured: false,
  },
  {
    name: 'PRO',
    features: [
      'Усе з тарифу «Стандарт»',
      'Місце в першому ряду',
      'Нетворкінг-сесія зі спікерами',
    ],
    price: '1 490',
    featured: true,
  },
  {
    name: 'VIP',
    features: [
      'Усе з тарифу «PRO»',
      'Окрема VIP-зона',
      'Персональна консультація з ментором',
    ],
    price: '2 490',
    featured: false,
  },
]

export default function TicketsSection() {
  return (
    <section id="kvitky" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Квитки</h2>
          <p className={styles.notice}>
            Ціни зростуть <strong>1 серпня 2026</strong> — встигни придбати за поточною вартістю
          </p>
        </div>

        <div className={styles.grid}>
          {TIERS.map((tier) => (
            <article
              key={tier.name}
              className={`${styles.card} ${tier.featured ? styles.featured : ''}`}
            >
              {tier.featured && <span className={styles.badge}>Популярний</span>}
              <h3 className={styles.tierName}>{tier.name}</h3>
              <ul className={styles.features}>
                {tier.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className={styles.price}>
                <span className={styles.currency}>₴</span>
                {tier.price}
              </p>
              <a href="#kontakt" className={styles.buy}>
                Придбати
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 14 L14 2 M6 2 H14 V10"/>
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
