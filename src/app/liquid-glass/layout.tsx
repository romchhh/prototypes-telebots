import type { Metadata } from 'next'
import './liquid-glass.css'

export const metadata: Metadata = {
  title: 'Kreona Company — Liquid Glass',
  description:
    'Kreona Company у стилі liquid glass — підбір, покупка та продаж автомобілів з Європи.',
}

export default function LiquidGlassLayout({ children }: { children: React.ReactNode }) {
  return <div className="liquidGlass">{children}</div>
}
