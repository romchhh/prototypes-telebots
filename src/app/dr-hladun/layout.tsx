import type { Metadata } from 'next'
import './dr-hladun.css'

export const metadata: Metadata = {
  title: 'Dr. Taras Hladun — Urologist | Szczecin',
  description:
    'Dr. Taras Hladun — urologist specializing in prosthetic & reconstructive urology, surgical and regenerative andrology, sexual medicine. Szczecin, Poland.',
}

export default function DrHladunLayout({ children }: { children: React.ReactNode }) {
  return <div className="dr-hladun">{children}</div>
}
