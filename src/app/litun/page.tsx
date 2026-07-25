import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialsSection from './components/SocialsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function LitunPage() {
  return (
    <>
      <Navbar transparent />
      <main>
        <Hero />
        <div className="litunBand">
          <SocialsSection />
          <ContactSection tightTop />
        </div>
      </main>
      <Footer />
    </>
  )
}
