import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function UsaAutoPage() {
  return (
    <>
      <Navbar transparent />
      <main>
        <Hero />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
