import type { Metadata } from 'next'
import './differ-sport.css'

export const metadata: Metadata = {
  title: 'Differ Sport — біговий клуб у Львові',
  description:
    'Differ Sport — біговий клуб у Львові. Тренування, підписка, онлайн-формати та цифрові продукти. Тренуйся по-іншому.',
}

export default function DifferSportLayout({ children }: { children: React.ReactNode }) {
  return <div className="differSport">{children}</div>
}
