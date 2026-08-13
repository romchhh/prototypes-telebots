import Image from 'next/image'
import styles from './AboutSection.module.css'

export default function AboutSection() {
  return (
    <section id="pro-podiyu" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Про<br />подію
          </h2>
          <div className={styles.imgWrap}>
            <Image
              src="/images/proyav/about.jpg"
              alt="Атмосфера події PROяв"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.img}
            />
          </div>
        </div>

        <div className={styles.right}>
          <p className={styles.lead}>
            PROяв — це масштабна одноденна подія для тих, хто хоче рости,
            надихатись і діяти. 200+ учасників, насичена програма від ранку
            до вечора. Один день, який змінить твій погляд на себе і свої
            можливості.
          </p>

          <div className={styles.blocks}>
            <div className={styles.block}>
              <h3>Для кого</h3>
              <p>
                Для підприємців, фахівців, творчих людей і всіх, хто шукає
                нові ідеї, знайомства та імпульс до дії. Неважливо, чи ти на
                початку шляху, чи вже будуєш свою справу — тут знайдеш своє
                коло.
              </p>
            </div>

            <div className={styles.block}>
              <h3>Про що</h3>
              <p>
                Особистий розвиток, лідерство, креативність і практичні
                інструменти для життя та бізнесу. Виступи спікерів, живі
                дискусії, нетворкінг і простір, де ідеї перетворюються на
                конкретні кроки.
              </p>
            </div>

            <div className={styles.block}>
              <h3>Чому варто</h3>
              <p>
                Це не чергова лекція — це день енергії, натхнення та
                зустрічей, які можуть відкрити нові двері. Виходиш із залу
                з яснішим баченням, новими контактами і бажанням діяти вже
                завтра.
              </p>
            </div>
          </div>

          <a href="#kvitky" className={styles.cta}>
            Забронювати місце
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 14 L14 2 M6 2 H14 V10"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
