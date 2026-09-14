import type { Metadata } from 'next'
import './muaythai.css'

export const metadata: Metadata = {
  title: 'Київська федерація муайтай',
  description:
    'Клуби, тренери та змагання з муайтай у Києві та області. Запис на пробне заняття, календар стартів і карта клубів.',
  robots: { index: true, follow: true },
}

export default function MuaythaiLayout({ children }: { children: React.ReactNode }) {
  return <div className="muaythai">{children}</div>
}
