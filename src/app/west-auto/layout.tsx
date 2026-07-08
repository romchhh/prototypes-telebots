import type { Metadata } from 'next'
import './west-auto.css'

export const metadata: Metadata = {
  title: 'West Auto Shipping — Пригін авто з США',
  description:
    'West Auto Shipping — підберемо, купимо та доставимо авто з Америки під ключ. Аукціони США, розмитнення, перевірка історії.',
}

export default function WestAutoLayout({ children }: { children: React.ReactNode }) {
  return <div className="west-auto">{children}</div>
}
