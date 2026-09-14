import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import News from './components/News'
import Events from './components/Events'
import ClubsMap from './components/ClubsMap'
import Trainers from './components/Trainers'
import FAQ from './components/FAQ'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import JsonLd from './components/JsonLd'

export default function MuaythaiPage() {
  return (
    <>
      <JsonLd />
      <Navbar transparent />
      <main>
        <Hero />
        <About />
        <News />
        <Events />
        <ClubsMap />
        <Trainers />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
