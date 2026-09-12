import type { Metadata } from 'next'
import './emaro.css'

export const metadata: Metadata = {
  title: 'Emaro — Mobilny detailing · Warszawa',
  description:
    'Emaro Premium Auto Care — мобільний детейлінг у Варшаві. Мийка, полірування та захист авто з виїздом до вас.',
}

export default function EmaroLayout({ children }: { children: React.ReactNode }) {
  return <div className="emaro">{children}</div>
}
