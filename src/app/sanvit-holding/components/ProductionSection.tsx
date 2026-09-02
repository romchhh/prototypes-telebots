import Image from 'next/image'
import { BRAND } from '../brand'
import styles from './ProductionSection.module.css'

const POINTS = [
  'Власний завод гофротари «Придніпровський»',
  'Гнучка упаковка всередині групи — Преміум Флекс Україна',
  'Індивідуальні конструкції та серійні тиражі',
  'Переробка макулатури й ресурсоощадні технології',
] as const

export default function ProductionSection() {
  return (
    <section id="vyrobnytstvo" className={styles.section}>
      <div className={styles.visual}>
        <Image
          src={BRAND.heroDesktop}
          alt="Продукція Санвіт-Холдинг — гофротара та пакувальні матеріали"
          fill
          sizes="(max-width: 900px) 100vw, 48vw"
          className={styles.img}
        />
      </div>

      <div className={styles.copy}>
        <h2 className={styles.heading}>
          Від сировини<br />до готової тари
        </h2>
        <p className={styles.lead}>
          Не перепродаємо чужий склад. Виробляємо гофрокартон і тару, доповнюємо гнучкою упаковкою та витратними матеріалами — щоб клієнт отримував один цикл, а не кілька підрядників.
        </p>
        <ul className={styles.list}>
          {POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <a href="#kontakty" className={styles.cta}>
          <span>Обговорити тираж</span>
          <span className={styles.ctaArrow} aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 14 L14 2 M6 2 H14 V10"/>
            </svg>
          </span>
        </a>
      </div>
    </section>
  )
}
