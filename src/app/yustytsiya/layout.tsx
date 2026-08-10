import type { Metadata } from 'next'
import './yustytsiya.css'

export const metadata: Metadata = {
  title: 'Юстиція — професійний юрист у Києві',
  description:
    'Юридична компанія «Юстиція» в Києві. Адвокатський захист, цивільні та кримінальні справи, корпоративне й сімейне право.',
}

export default function YustytsiyaLayout({ children }: { children: React.ReactNode }) {
  return <div className="yustytsiya">{children}</div>
}
