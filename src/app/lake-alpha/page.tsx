import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function LakeAlphaPage() {
  return (
    <div className="lake-alpha-page">
      <Navbar />
      <main>
        <Hero />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
