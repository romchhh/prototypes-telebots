import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import TicketsSection from './components/TicketsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function ProyavPage() {
  return (
    <>
      <Navbar transparent />
      <main>
        <Hero />
        <AboutSection />
        <TicketsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
