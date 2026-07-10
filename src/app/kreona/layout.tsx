import type { Metadata } from 'next'
import './kreona.css'

export const metadata: Metadata = {
  title: 'Kreona Company — Автомобілі з Європи',
  description:
    'Kreona Company — підбір, покупка та продаж автомобілів з Європи. Прозорий процес і супровід під ключ.',
}

export default function KreonaLayout({ children }: { children: React.ReactNode }) {
  return <div className="kreona">{children}</div>
}
