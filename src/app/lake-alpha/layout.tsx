import type { Metadata } from 'next'
import './lake-alpha.css'

export const metadata: Metadata = {
  title: 'Lake Alpha — HutJet Dynamic House',
  description:
    'Власний будинок замість компромісів. Готовий простір для життя там, де ти хочеш бути.',
}

export default function LakeAlphaLayout({ children }: { children: React.ReactNode }) {
  return <div className="lake-alpha">{children}</div>
}
