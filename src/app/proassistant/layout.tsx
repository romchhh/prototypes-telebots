import type { Metadata } from 'next'
import './proassistant.css'

export const metadata: Metadata = {
  title: 'ProAssistant — професійний асистент',
  description:
    'ProAssistant — професійна підготовка майбутніх лідерів. Навчання асистентів і пошук досвідченого асистента для вашого бізнесу.',
}

export default function ProAssistantLayout({ children }: { children: React.ReactNode }) {
  return <div className="proassistant">{children}</div>
}
