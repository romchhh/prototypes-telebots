import type { Metadata } from 'next'
import './oleh-reznichenko.css'

export const metadata: Metadata = {
  title: 'OLEH REZNICHENKO — Szef kuchni',
  description:
    'OLEH REZNICHENKO — kreatywny szef kuchni z 18-letnim doświadczeniem. Menu, zespół, otwarcia restauracji.',
}

export default function OlehReznichenkoLayout({ children }: { children: React.ReactNode }) {
  return <div className="oleh-reznichenko">{children}</div>
}
