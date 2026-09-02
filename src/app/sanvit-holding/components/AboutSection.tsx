import { COMPANIES, STATS } from '../brand'
import styles from './AboutSection.module.css'

export default function AboutSection() {
  return (
    <section id="pro-nas" className={styles.section}>
      <div className={styles.layout}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            25 років<br /><em>повного циклу</em>
          </h2>
          <p className={styles.lead}>
            ТОВ «Санвіт-Холдинг» — група компаній, яка закриває пакування бізнесу одним контуром: виробництво, гнучка упаковка та супутні матеріали.
          </p>
          <div className={styles.stats}>
            {STATS.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <ul className={styles.companies}>
          {COMPANIES.map((company) => (
            <li key={company.name} className={styles.company}>
              <span className={styles.year}>{company.year}</span>
              <div className={styles.companyCopy}>
                <h3>{company.name}</h3>
                <p>{company.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
