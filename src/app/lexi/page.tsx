import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function LexiPage() {
  return (
    <>
      <Navbar transparent />
      <main>
        <Hero />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
