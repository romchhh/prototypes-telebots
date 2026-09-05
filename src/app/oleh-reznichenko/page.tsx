'use client'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Quote from './components/Quote'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Faq from './components/Faq'
import ContactSection from './components/ContactSection'
import Socials from './components/Socials'
import Footer from './components/Footer'
import { BookingProvider } from './components/BookingContext'

export default function OlehReznichenkoPage() {
  return (
    <BookingProvider>
      <Navbar />
      <main>
        <Hero />
        <Quote />
        <About />
        <Services />
        <Experience />
        <Gallery />
        <Faq />
        <ContactSection />
        <Socials />
      </main>
      <Footer />
    </BookingProvider>
  )
}
