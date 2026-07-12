import type { Metadata } from 'next'
import './nura.css'

export const metadata: Metadata = {
  title: 'Nura — Косметологічна клініка',
  description:
    'Nura — косметологія в Києві. Догляд за шкірою, інʼєкції, апаратні процедури. Індивідуальний підхід.',
}

export default function NuraLayout({ children }: { children: React.ReactNode }) {
  return <div className="nura">{children}</div>
}
