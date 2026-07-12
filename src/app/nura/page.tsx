import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function NuraPage() {
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
