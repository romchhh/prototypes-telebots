import type { Metadata } from 'next'
import { MARATHON_BRAND, MARATHON_LOGO } from './brand'
import './marathon.css'

export const metadata: Metadata = {
  title: `${MARATHON_BRAND} — Марафон англійської`,
  description: '10 тем • 10 днів • 10 000 грн. Почни говорити англійською вже через 10 днів.',
  icons: {
    icon: MARATHON_LOGO,
    apple: MARATHON_LOGO,
  },
}

export default function MarathonLayout({ children }: { children: React.ReactNode }) {
  return <div className="marathon-page">{children}</div>
}
