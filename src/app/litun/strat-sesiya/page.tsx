import type { Metadata } from 'next'
import { SERVICES } from '../brand'
import Navbar from '../components/Navbar'
import ServiceHero from '../components/ServiceHero'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const service = SERVICES[2]

export const metadata: Metadata = {
  title: `${service.title} — Ілля Літун`,
  description: service.lead,
}

export default function StratSesiyaPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServiceHero service={service} />
        <div className="litunBand">
          <ContactSection defaultService={service.label} />
        </div>
      </main>
      <Footer />
    </>
  )
}
