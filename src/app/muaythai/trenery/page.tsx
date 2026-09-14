import Navbar from '../components/Navbar'
import InnerHero from '../components/InnerHero'
import Trainers from '../components/Trainers'
import Footer from '../components/Footer'

export default function TrainersPage() {
  return (
    <>
      <Navbar />
      <main>
        <InnerHero
          eyebrow="Каталог"
          title="Тренери"
          em="клубів"
          lead="Повний склад тренерів федерації. У продакшені картки оновлює адміністратор через CMS — без правки коду."
        />
        <Trainers all />
      </main>
      <Footer />
    </>
  )
}
