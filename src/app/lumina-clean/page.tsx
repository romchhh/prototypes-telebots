'use client'

import { BookingProvider } from './booking'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function LuminaCleanPage() {
  return (
    <BookingProvider>
      <Navbar transparent />
      <main>
        <Hero />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </BookingProvider>
  )
}
