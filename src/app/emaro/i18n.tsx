'use client'

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

export type Lang = 'ua' | 'pl'

type Dictionary = {
  nav: {
    services: string
    mobile: string
    about: string
    cta: string
    openMenu: string
    closeMenu: string
    mobileNav: string
  }
  hero: {
    lines: string[]
    accent: string
    pillars: [string, string, string]
    cardLabel: string
    cardTitle: string
    cardSub: string
  }
  contact: {
    heading: string
    headingEm: string
    lead: string
    visualLabel: string
    visualText: string
    visualAlt: string
    formTitle: string
    name: string
    namePh: string
    phone: string
    phonePh: string
    service: string
    servicePh: string
    comment: string
    commentPh: string
    consent: string
    submit: string
    submitting: string
    successTitle: string
    successText: string
    services: string[]
  }
  footer: {
    navLabel: string
    links: [string, string, string, string, string]
    hours: string
    hoursWeek: string
    hoursSun: string
    contactsTitle: string
    social: string
    rights: string
    privacy: string
  }
}

const dictionaries: Record<Lang, Dictionary> = {
  ua: {
    nav: {
      services: 'Послуги',
      mobile: 'Мобільний сервіс',
      about: 'Про нас',
      cta: 'Консультація',
      openMenu: 'Відкрити меню',
      closeMenu: 'Закрити',
      mobileNav: 'Мобільна навігація',
    },
    hero: {
      lines: [
        'Преміум-детейлінг',
        'з виїздом до вас',
        'по всій Варшаві',
      ],
      accent: 'детейлінг',
      pillars: ['Мийка', 'Полірування', 'Захист'],
      cardLabel: 'Виїзд по Варшаві',
      cardTitle: 'Замовити детейлінг',
      cardSub: 'Приїдемо до вас — будинок,\nофіс або паркінг',
    },
    contact: {
      heading: 'Замовте',
      headingEm: 'виїзд',
      lead: 'Мобільний детейлінг у Варшаві — приїдемо туди, де вам зручно, і доглянемо авто на місці.',
      visualLabel: 'Emaro Premium Auto Care',
      visualText: 'Мобільний детейлінг · Варшава',
      visualAlt: 'Emaro — мобільний детейлінг у Варшаві',
      formTitle: 'Заявка на виїзд',
      name: "Імʼя",
      namePh: "Ваше імʼя",
      phone: 'Телефон',
      phonePh: '+48',
      service: 'Послуга',
      servicePh: 'Оберіть варіант',
      comment: 'Коментар',
      commentPh: 'Марка авто, адреса, бажаний час...',
      consent: 'Надсилаючи форму, ви погоджуєтесь на обробку персональних даних',
      submit: 'Надіслати заявку',
      submitting: 'Надсилання…',
      successTitle: 'Дякуємо!',
      successText: 'Ми звʼяжемося з вами найближчим часом.',
      services: [
        'Мобільна мийка',
        'Детейлінг салону',
        'Полірування кузова',
        'Керамічний захист',
        'Хімчистка салону',
        'Очищення дисків',
        'Підготовка до продажу',
        'Інше',
      ],
    },
    footer: {
      navLabel: 'Навігація в підвалі',
      links: ['Про компанію', 'Послуги', 'Мобільний сервіс', 'Пакети', 'Відгуки'],
      hours: 'Графік роботи',
      hoursWeek: 'Пн–Сб: 09:00 – 20:00',
      hoursSun: 'Неділя — за записом',
      contactsTitle: 'Контакти',
      social: 'Соціальні мережі',
      rights: 'Усі права захищені.',
      privacy: 'Політика конфіденційності',
    },
  },
  pl: {
    nav: {
      services: 'Usługi',
      mobile: 'Detailing mobilny',
      about: 'O nas',
      cta: 'Konsultacja',
      openMenu: 'Otwórz menu',
      closeMenu: 'Zamknij',
      mobileNav: 'Nawigacja mobilna',
    },
    hero: {
      lines: [
        'Premium detailing',
        'z dojazdem do Ciebie',
        'po całej Warszawie',
      ],
      accent: 'detailing',
      pillars: ['Mycie', 'Polerowanie', 'Ochrona'],
      cardLabel: 'Wyjazd po Warszawie',
      cardTitle: 'Zamów detailing',
      cardSub: 'Przyjedziemy do Ciebie — dom,\nbiuro lub parking',
    },
    contact: {
      heading: 'Zamów',
      headingEm: 'wyjazd',
      lead: 'Mobilny detailing w Warszawie — przyjedziemy tam, gdzie Ci wygodnie, i zadbamy o auto na miejscu.',
      visualLabel: 'Emaro Premium Auto Care',
      visualText: 'Mobilny detailing · Warszawa',
      visualAlt: 'Emaro — mobilny detailing w Warszawie',
      formTitle: 'Zgłoszenie wyjazdu',
      name: 'Imię',
      namePh: 'Twoje imię',
      phone: 'Telefon',
      phonePh: '+48',
      service: 'Usługa',
      servicePh: 'Wybierz opcję',
      comment: 'Komentarz',
      commentPh: 'Marka auta, adres, preferowana godzina...',
      consent: 'Wysyłając formularz, zgadzasz się na przetwarzanie danych osobowych',
      submit: 'Wyślij zgłoszenie',
      submitting: 'Wysyłanie…',
      successTitle: 'Dziękujemy!',
      successText: 'Skontaktujemy się z Tobą wkrótce.',
      services: [
        'Mycie mobilne',
        'Detailing wnętrza',
        'Polerowanie lakieru',
        'Ochrona ceramiczna',
        'Pranie tapicerki',
        'Czyszczenie felg',
        'Przygotowanie do sprzedaży',
        'Inne',
      ],
    },
    footer: {
      navLabel: 'Nawigacja w stopce',
      links: ['O firmie', 'Usługi', 'Detailing mobilny', 'Pakiety', 'Opinie'],
      hours: 'Godziny pracy',
      hoursWeek: 'Pn–Sb: 09:00 – 20:00',
      hoursSun: 'Niedziela — na życzenie',
      contactsTitle: 'Kontakt',
      social: 'Social media',
      rights: 'Wszelkie prawa zastrzeżone.',
      privacy: 'Polityka prywatności',
    },
  },
}

type LangContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dictionary
}

const LangContext = createContext<LangContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ua')
  const value = useMemo(() => ({ lang, setLang, t: dictionaries[lang] }), [lang])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
