import type { Metadata } from 'next'
import './cartel.css'

export const metadata: Metadata = {
  title: 'Cartel — холдинг у Буковелі',
  description:
    'CARTEL — ресторани, готелі, SPA VODA club та Банька на дровах у Буковелі, Яремче й Одесі. Доступний відпочинок європейської якості.',
}

export default function CartelLayout({ children }: { children: React.ReactNode }) {
  return <div className="cartel">{children}</div>
}
