import type { Metadata } from 'next'
import './lake-alpha.css'

export const metadata: Metadata = {
  title: 'Lake Alpha v2 — HutJet (Denté layout)',
  description: 'HutJet Lake Alpha — альтернативна версія лендингу на базі layout Denté.',
}

export default function LakeAlphaDenteLayout({ children }: { children: React.ReactNode }) {
  return <div className="lake-alpha-dente">{children}</div>
}
