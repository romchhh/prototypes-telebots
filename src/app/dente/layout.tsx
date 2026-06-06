import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Denté – Twój Dentysta',
  description: 'Komfortowa stomatologia dla dzieci i dorosłych w Warszawie.',
}

export default function DenteLayout({ children }: { children: React.ReactNode }) {
  return children
}
