import type { Metadata } from 'next'
import './spation-group.css'

export const metadata: Metadata = {
  title: 'Spation Group — Real estate investment company',
  description:
    'Spation Group — інвестиційна компанія в ніші нерухомості. Відбір активів, структура угод і супровід інвестора.',
}

export default function SpationGroupLayout({ children }: { children: React.ReactNode }) {
  return <div className="spation-group">{children}</div>
}
