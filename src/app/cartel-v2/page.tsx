import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Categories from './components/Categories'
import SplitPanels from './components/SplitPanels'
import ContactBand from './components/ContactBand'
import Footer from './components/Footer'

export default function CartelV2Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Categories />
        <SplitPanels />
        <ContactBand />
      </main>
      <Footer />
    </>
  )
}
