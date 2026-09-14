import Navbar from '../components/Navbar'
import InnerHero from '../components/InnerHero'
import Footer from '../components/Footer'
import { LEADERSHIP } from '../brand'
import styles from '../components/InnerPage.module.css'

export default function AboutFederationPage() {
  return (
    <>
      <Navbar />
      <main>
        <InnerHero
          eyebrow="Організація"
          title="Про"
          em="федерацію"
          lead="Керівництво, статут, муайтай як вид спорту, здоров’я та антидопінг — каркас розділів як у великих федерацій, без корпоративного перевантаження."
        />
        <div className={styles.page}>
          <article className={styles.card}>
            <h2>Хто <em>ми</em></h2>
            <p>
              Київська федерація муайтай об’єднує клуби столиці та області, формує збірну міста,
              проводить чемпіонати й семінари за правилами IFMA. Ми працюємо з дітьми, аматорами
              і професіоналами — з єдиними стандартами суддівства, медицини та членства клубів.
            </p>
            <p>
              Федерація відкрита для нових залів: після заявки секретаріат перевіряє тренерський склад,
              умови залу і готовність до календарного плану.
            </p>
          </article>

          <article className={styles.card}>
            <h2>Керівництво</h2>
            <div className={styles.grid}>
              {LEADERSHIP.map((person) => (
                <div key={person.name} className={styles.person}>
                  <strong>{person.name}</strong>
                  <span>{person.role}</span>
                </div>
              ))}
            </div>
            <a className={styles.link} href="#">Статут федерації (PDF)</a>
          </article>

          <article className={styles.card}>
            <h2>Про <em>муайтай</em></h2>
            <p>
              Муайтай — національний вид спорту Таїланду, олімпійська дисципліна IFMA. Удари руками,
              ногами, ліктями й колінами, клінч і робота в стійці. У Києві вид розвивається з кінця 1980-х:
              дитячі секції, аматорські чемпіонати міста й виходи на всеукраїнські та міжнародні ринг.
            </p>
          </article>

          <article id="anty-doping" className={styles.card}>
            <h2>Здоров’я та <em>антидопінг</em></h2>
            <p>
              Участь у змаганнях федерації можлива лише з медичним допуском. Антидопінгова політика
              відповідає WADA та Національному антидопінговому центру України. На семінарах для тренерів
              і суддів — окремий блок про заборонені речовини, терапевтичні виключення та протокол травм.
            </p>
            <p>
              Звернення щодо порушення правил або безпеки на рингу надсилайте через форму на головній
              («Звернення / скарга») або на hello@kfmt.ua.
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
