import type { Metadata } from 'next'
import './common-hospitality.css'

export const metadata: Metadata = {
  title: 'Commons Hospitality — консалтинг і управління в HoReCa',
  description:
    'Commons Hospitality — консалтинг і управління в HoReCa. Створюємо успішні проєкти та знакові місця.',
}

export default function CommonHospitalityLayout({ children }: { children: React.ReactNode }) {
  return <div className="common-hospitality">{children}</div>
}
