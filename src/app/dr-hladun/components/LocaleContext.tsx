'use client'
import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { DEFAULT_LOCALE, DICTS, type Locale } from '../i18n'

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (typeof DICTS)[Locale]
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    if (typeof document !== 'undefined') {
      document.documentElement.lang = next === 'uk' ? 'uk' : next
    }
  }, [])

  const value = useMemo(
    () => ({ locale, setLocale, t: DICTS[locale] }),
    [locale, setLocale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
