'use client'
import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import BookingModal from './BookingModal'

type BookingContextValue = {
  openBooking: (service?: string) => void
  closeBooking: () => void
}

const BookingContext = createContext<BookingContextValue | null>(null)

export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used within BookingProvider')
  return ctx
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState({ open: false, service: '' })

  const openBooking = useCallback((service = '') => {
    setState({ open: true, service })
  }, [])

  const closeBooking = useCallback(() => {
    setState({ open: false, service: '' })
  }, [])

  const value = useMemo(() => ({ openBooking, closeBooking }), [openBooking, closeBooking])

  return (
    <BookingContext.Provider value={value}>
      {children}
      <BookingModal
        key={state.service}
        open={state.open}
        service={state.service}
        onClose={closeBooking}
      />
    </BookingContext.Provider>
  )
}
