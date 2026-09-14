import styles from './InnerHero.module.css'

export default function InnerHero({
  eyebrow,
  title,
  em,
  lead,
}: {
  eyebrow: string
  title: string
  em?: string
  lead: string
}) {
  return (
    <header className={styles.hero}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h1 className={styles.heading}>
        {title}{em ? <> <em>{em}</em></> : null}
      </h1>
      <p className={styles.lead}>{lead}</p>
    </header>
  )
}
