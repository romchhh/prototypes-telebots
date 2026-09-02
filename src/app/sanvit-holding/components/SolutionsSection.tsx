import { SOLUTIONS } from '../brand'
import styles from './SolutionsSection.module.css'

export default function SolutionsSection() {
  return (
    <section id="rishennya" className={styles.section}>
      <div className={styles.intro}>
        <h2 className={styles.heading}>
          Комплекс під<br />ваш процес
        </h2>
        <p className={styles.lead}>
          Працюємо з виробничими компаніями, дистриб’юторами, ритейлом і логістикою. Не окремий SKU — а система пакування.
        </p>
      </div>

      <div className={styles.grid}>
        {SOLUTIONS.map((item, index) => (
          <article key={item.title} className={styles.card}>
            <span className={styles.num}>{String(index + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
