import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ProductsSection from './components/ProductsSection'
import SolutionsSection from './components/SolutionsSection'
import ProductionSection from './components/ProductionSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function SanvitHoldingPage() {
  return (
    <>
      <Navbar transparent />
      <main>
        <Hero />
        <AboutSection />
        <ProductsSection />
        <SolutionsSection />
        <ProductionSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
