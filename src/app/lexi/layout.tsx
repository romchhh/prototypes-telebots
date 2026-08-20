import type { Metadata } from 'next'
import './lexi.css'

export const metadata: Metadata = {
  title: 'LEXI.education — школа іноземних мов для дітей',
  description:
    'LEXI.education — школа іноземних мов. Англійська, німецька та французька для дітей у невеликих групах.',
}

export default function LexiLayout({ children }: { children: React.ReactNode }) {
  return <div className="lexi">{children}</div>
}
