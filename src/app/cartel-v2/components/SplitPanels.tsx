import Image from 'next/image'
import { BRAND } from '../../cartel/brand'
import styles from './SplitPanels.module.css'

const PANELS = [
  {
    id: 'goteli',
    eyebrow: 'Буковель · Яремче · Одеса',
    title: 'Наші заклади',
    cta: 'Весь портфель',
    image: '/images/cartel/hero.jpg',
    href: '#restorany',
  },
  {
    id: 'komanda',
    eyebrow: 'Ресторани, готелі, SPA',
    title: 'Робота в CARTEL',
    cta: 'Вакансії',
    image: BRAND.contactImage,
    href: '#kontakt',
  },
] as const

export default function SplitPanels() {
  return (
    <section className={styles.section} aria-label="Портфель і команда">
      <div className={styles.split}>
        {PANELS.map((panel) => (
          <a key={panel.id} id={panel.id} href={panel.href} className={styles.panel}>
            <Image src={panel.image} alt="" fill sizes="50vw" className={styles.panelImg} />
            <div className={styles.panelShade} />
            <div className={styles.panelCopy}>
              <p className={styles.eyebrow}>{panel.eyebrow}</p>
              <h2 className={styles.title}>{panel.title}</h2>
              <span className={styles.btn}>{panel.cta}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
