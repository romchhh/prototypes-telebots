import type { Metadata } from 'next'
import './usa-auto.css'

export const metadata: Metadata = {
  title: 'USA Auto — авто з Америки',
  description:
    'USA Auto — підбір, аукціон і доставка автомобілів з США під ключ. Чесний супровід від ставки до номерів.',
}

export default function UsaAutoLayout({ children }: { children: React.ReactNode }) {
  return <div className="usa-auto">{children}</div>
}
