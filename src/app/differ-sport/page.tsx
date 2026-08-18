import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialsSection from './components/SocialsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function DifferSportPage() {
  return (
    <>
      <Navbar transparent />
      <main>
        <Hero />
        <div className="differBand">
          <SocialsSection />
          <ContactSection tightTop />
        </div>
      </main>
      <Footer />
    </>
  )
}
