import type { Metadata } from 'next'
import './proyav.css'

export const metadata: Metadata = {
  title: 'PROяв — Масштабна подія у Тернополі',
  description: 'Одноденна подія для тих, хто хоче рости, надихатись і діяти. 26 вересня 2026, Тернопіль.',
}

export default function ProyavLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="proyav-page">
      {children}
    </div>
  )
}
