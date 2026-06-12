import type { Metadata } from 'next'
import './marathon.css'

export const metadata: Metadata = {
  title: '10×10 — Марафон англійської',
  description: '10 тем • 10 днів • 10 000 грн. Почни говорити англійською вже через 10 днів.',
}

export default function MarathonLayout({ children }: { children: React.ReactNode }) {
  return <div className="marathon-page">{children}</div>
}
