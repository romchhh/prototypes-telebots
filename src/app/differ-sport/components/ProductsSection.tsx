'use client'

import { useState } from 'react'
import { PRODUCTS, type Product } from '../brand'
import styles from './ProductsSection.module.css'

type Status = 'idle' | 'paying' | 'done'

function formatPrice(value: number) {
  return `${value} грн`
}

export default function ProductsSection() {
  const [active, setActive] = useState<Product | null>(null)
  const [status, setStatus] = useState<Status>('idle')

  const close = () => {
    setActive(null)
    setStatus('idle')
  }

  const pay = async () => {
    setStatus('paying')
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('done')
  }

  return (
    <section className={styles.section} aria-label="Цифрові продукти">
      <div className={styles.grid}>
        {PRODUCTS.map((product) => (
          <article key={product.id} className={styles.card}>
            <div className={styles.cardTop}>
              <p className={styles.category}>{product.category}</p>
              <span className={`${styles.badge} ${product.badge === 'Гаряча пропозиція' ? styles.badgeHot : ''}`}>
                {product.badge}
              </span>
            </div>
            <h3 className={styles.title}>{product.title}</h3>
            <p className={styles.meta}>{product.meta}</p>
            <p className={styles.extra}>{product.extra}</p>
            <div className={styles.cardBottom}>
              <span className={styles.price}>{formatPrice(product.price)}</span>
              <button type="button" className={styles.buy} onClick={() => setActive(product)}>
                Купити
              </button>
            </div>
          </article>
        ))}
      </div>

      {active && (
        <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="checkout-title">
          <div className={styles.modal}>
            <button type="button" className={styles.close} onClick={close} aria-label="Закрити">
              ×
            </button>
            {status === 'done' ? (
              <div className={styles.done}>
                <p className={styles.modalEyebrow}>Оплата успішна</p>
                <h3 id="checkout-title" className={styles.modalTitle}>{active.title}</h3>
                <p className={styles.modalLead}>
                  Матеріал уже доступний. У робочій версії файл приходить на email одразу після оплати.
                </p>
                <a className={styles.download} href="#" download={active.fileLabel}>
                  Завантажити {active.fileLabel}
                </a>
                <button type="button" className={styles.ghost} onClick={close}>
                  Закрити
                </button>
              </div>
            ) : (
              <div className={styles.checkout}>
                <p className={styles.modalEyebrow}>Онлайн-оплата</p>
                <h3 id="checkout-title" className={styles.modalTitle}>{active.title}</h3>
                <p className={styles.modalLead}>{active.extra} · {active.meta}</p>
                <p className={styles.modalPrice}>{formatPrice(active.price)}</p>
                <div className={styles.fakeCard}>
                  <label>
                    Картка
                    <input type="text" placeholder="ACCT-000015" readOnly />
                  </label>
                  <div className={styles.fakeRow}>
                    <label>
                      Термін
                      <input type="text" placeholder="12 / 28" readOnly />
                    </label>
                    <label>
                      CVV
                      <input type="text" placeholder="•••" readOnly />
                    </label>
                  </div>
                </div>
                <button type="button" className={styles.pay} onClick={pay} disabled={status === 'paying'}>
                  {status === 'paying' ? 'Оплата…' : `Оплатити ${formatPrice(active.price)}`}
                </button>
                <p className={styles.hint}>Демо-оплата для прототипу. Після успіху матеріал відкривається автоматично.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
