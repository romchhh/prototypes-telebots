import type { Metadata } from 'next'
import '../cartel/cartel.css'
import './cartel-v2.css'

export const metadata: Metadata = {
  title: 'Cartel v2 — холдинг у Буковелі',
  description:
    'CARTEL v2 — ресторани, готелі, SPA та розваги в Карпатах. Альтернативний лендінг у стилі luxury hospitality.',
}

export default function CartelV2Layout({ children }: { children: React.ReactNode }) {
  return <div className="cartel cartel-v2">{children}</div>
}
