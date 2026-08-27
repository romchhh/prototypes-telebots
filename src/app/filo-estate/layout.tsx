import type { Metadata } from 'next'
import './filo-estate.css'

export const metadata: Metadata = {
  title: 'Filo Estate — Antalya real estate, filtered.',
  description: 'Filo Estate — агентство недвижимости в Анталии. Мы не показываем всё. Мы фильтруем рынок.',
}

export default function FiloEstateLayout({ children }: { children: React.ReactNode }) {
  return <div className="filo-estate">{children}</div>
}
