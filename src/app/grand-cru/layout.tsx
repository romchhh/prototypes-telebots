import type { Metadata } from 'next'
import './grand-cru.css'
import { BRAND } from './brand'

export const metadata: Metadata = {
  title: `${BRAND.name} — Bespoke Land Rover Defenders`,
  description: BRAND.description,
}

export default function GrandCruLayout({ children }: { children: React.ReactNode }) {
  return <div className="grand-cru">{children}</div>
}
