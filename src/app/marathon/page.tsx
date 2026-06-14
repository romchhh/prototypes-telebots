import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarathonSections from './components/MarathonSections'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FloatingCta from './components/FloatingCta'

export default function MarathonPage() {
  return (
    <>
      <Navbar transparent />
      <main>
        <Hero />
        <MarathonSections />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCta />
    </>
  )
}
