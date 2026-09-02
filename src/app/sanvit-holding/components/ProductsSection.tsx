import Image from 'next/image'
import { PRODUCTS } from '../brand'
import styles from './ProductsSection.module.css'

export default function ProductsSection() {
  return (
    <section id="produkciya" className={styles.section}>
      <div className={styles.intro}>
        <h2 className={styles.heading}>
          Усе, що потрібно<br />для пакування
        </h2>
        <p className={styles.lead}>
          Сім напрямків — від гофротари до витратних матеріалів. Підбираємо комплект під продукт, тираж і логістику.
        </p>
      </div>

      <div className={styles.grid}>
        {PRODUCTS.map((product, index) => (
          <a
            key={product.id}
            href="#kontakty"
            className={`${styles.card} ${index === 0 ? styles.featured : ''}`}
          >
            <span className={styles.body}>
              <h3>{product.title}</h3>
              <p>{product.text}</p>
              <span className={styles.link}>
                Замовити прорахунок
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 14 L14 2 M6 2 H14 V10"/>
                </svg>
              </span>
            </span>
            <span className={styles.media}>
              <Image
                src={product.image}
                alt=""
                width={280}
                height={280}
                className={styles.mediaImg}
              />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
