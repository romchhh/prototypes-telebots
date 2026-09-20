'use client'

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

type BookingContextValue = {
  zip: string
  setZip: (zip: string) => void
  service: string
  setService: (service: string) => void
}

const BookingContext = createContext<BookingContextValue | null>(null)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [zip, setZip] = useState('')
  const [service, setService] = useState('')
  const value = useMemo(() => ({ zip, setZip, service, setService }), [zip, service])
  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
}

export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used within BookingProvider')
  return ctx
}

export function scrollToBooking() {
  document.getElementById('book')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
