import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Directions from './components/Directions'
import About from './components/About'
import Careers from './components/Careers'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function CartelPage() {
  return (
    <>
      <Navbar transparent />
      <main>
        <Hero />
        <Directions />
        <About />
        <Careers />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
