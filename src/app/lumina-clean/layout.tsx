import type { Metadata } from 'next'
import './lumina-clean.css'

export const metadata: Metadata = {
  title: 'Lumina Cleaning Co. — House cleaning in Miami',
  description:
    'Lumina Cleaning Co. — residential and commercial cleaning in South Florida. Choose a service, enter your ZIP, and book a visit.',
}

export default function LuminaCleanLayout({ children }: { children: React.ReactNode }) {
  return <div className="lumina-clean">{children}</div>
}
