import styles from './Careers.module.css'

export default function Careers() {
  return (
    <section id="vakansii" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.panel} id="komanda">
          <h2 className={styles.heading}>
            Стань частиною<br /><em>Cartel</em>
          </h2>
          <p className={styles.lead}>
            CARTEL Holding — команда людей, які обожнюють свою роботу. Понад 15 років у ресторанному
            й готельному бізнесі, нерухомості та розвагах. Ми відкриті для ініціативних і творчих
            фахівців, які прагнуть розвиватися.
          </p>
          <p className={styles.lead}>
            У CARTEL ви знайдете роботу в наймальовничішому куточку України — і станете частиною
            великої дружньої сімʼї.
          </p>
          <div className={styles.actions}>
            <a href="#kontakt" className={styles.primary}>
              Приєднуйся
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 14 L14 2 M6 2 H14 V10"/>
              </svg>
            </a>
            <a href="#kontakt" className={styles.secondary}>Більше вакансій</a>
          </div>
        </div>

        <ul className={styles.stats} aria-label="Факти про Cartel">
          <li>
            <strong>2004</strong>
            <span>рік перших проєктів у Буковелі</span>
          </li>
          <li>
            <strong>19+</strong>
            <span>ресторанів у сімʼї CARTEL</span>
          </li>
          <li>
            <strong>3</strong>
            <span>міста: Буковель, Яремче, Одеса</span>
          </li>
          <li>
            <strong>15+</strong>
            <span>років у HoReCa та розвагах</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
