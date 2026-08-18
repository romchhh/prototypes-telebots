import type { Metadata } from 'next'
import { SERVICES } from '../brand'
import Navbar from '../components/Navbar'
import ServiceHero from '../components/ServiceHero'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const service = SERVICES[0]

export const metadata: Metadata = {
  title: `${service.title} — Differ Sport`,
  description: service.lead,
}

export default function TrenuvannyaPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServiceHero service={service} />
        <div className="differBand">
          <ContactSection defaultService={service.label} />
        </div>
      </main>
      <Footer />
    </>
  )
}
