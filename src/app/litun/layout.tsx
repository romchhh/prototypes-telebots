import type { Metadata } from 'next'
import './litun.css'

export const metadata: Metadata = {
  title: 'Освітній бізнес з Іллею Літуном',
  description:
    'Ілля Літун — засновник Turbo Education. Консалтинг, консультації, страт сесії та клуб для освітнього бізнесу.',
}

export default function LitunLayout({ children }: { children: React.ReactNode }) {
  return <div className="litun">{children}</div>
}
