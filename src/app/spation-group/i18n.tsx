'use client'

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

export type Lang = 'ua' | 'en'

type Dictionary = {
  nav: {
    about: string
    services: string
    projects: string
    contacts: string
    cta: string
    openMenu: string
    closeMenu: string
    mobileNav: string
  }
  hero: {
    lines: [string, string, string]
    side: string
    cta: string
    cards: [
      { label: string; title: string; text: string },
      { label: string; title: string; text: string },
    ]
  }
  contact: {
    heading: string
    headingEm: string
    lead: string
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
      about: 'Про нас',
      services: 'Послуги',
      projects: 'Проєкти',
      contacts: 'Контакти',
      cta: 'Обговорити інвестицію',
      openMenu: 'Відкрити меню',
      closeMenu: 'Закрити',
      mobileNav: 'Мобільна навігація',
    },
    hero: {
      lines: ['Інвестуйте', 'в нерухомість', 'з дохідністю'],
      side: 'Інвестиційна компанія в ніші нерухомості — відбір активів, структура угод і супровід до виходу з позиції.',
      cta: 'Обговорити інвестицію',
      cards: [
        {
          label: 'Портфель',
          title: 'Інвестиційні активи',
          text: 'Обʼєкти з прозорою економікою, прогнозованим cash flow і зрозумілим горизонтом.',
        },
        {
          label: 'Партнерство',
          title: 'Супровід інвестора',
          text: 'Від due diligence до закриття угоди й управління активом після входу.',
        },
      ],
    },
    contact: {
      heading: 'Підберемо інвестицію',
      headingEm: 'в нерухомість',
      lead: 'Консультація для інвесторів — розкажіть про бюджет і горизонт, ми відфільтруємо ринок під вашу стратегію.',
      visualText: 'Дохідність · Активи · Due diligence · Вихід',
      visualAlt: 'Інвестиційна нерухомість — Spation Group',
      formTitle: 'Заявка',
      name: "Імʼя",
      namePh: "Ваше імʼя",
      phone: 'Телефон',
      phonePh: '+380',
      service: 'Сценарій',
      servicePh: 'Оберіть варіант',
      comment: 'Коментар',
      commentPh: 'Бюджет, горизонт, тип активу...',
      consent: 'Надсилаючи форму, ви погоджуєтесь на обробку персональних даних',
      submit: 'Надіслати заявку',
      submitting: 'Надсилання…',
      successTitle: 'Дякуємо!',
      successText: 'Ми звʼяжемося з вами найближчим часом.',
      services: [
        'Купівля для дохідності',
        'Портфельні інвестиції',
        'Обʼєкти під оренду',
        'Резиденційна нерухомість',
        'Комерційна нерухомість',
        'Due diligence',
        'Супровід угоди',
        'Інше',
      ],
    },
    footer: {
      navLabel: 'Навігація в підвалі',
      hours: 'Графік роботи',
      hoursWeek: 'Пн–Пт: 10:00 – 19:00',
      hoursSun: 'Сб–Нд — за записом',
      contactsTitle: 'Контакти',
      social: 'Соцмережі',
      rights: 'Усі права захищено.',
      privacy: 'Політика конфіденційності',
    },
  },
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contacts: 'Contacts',
      cta: 'Discuss an investment',
      openMenu: 'Open menu',
      closeMenu: 'Close',
      mobileNav: 'Mobile navigation',
    },
    hero: {
      lines: ['Invest', 'in real estate', 'for yield'],
      side: 'An investment company in real estate — asset selection, deal structuring, and support through exit.',
      cta: 'Discuss an investment',
      cards: [
        {
          label: 'Portfolio',
          title: 'Investment assets',
          text: 'Properties with transparent unit economics, projected cash flow, and a clear horizon.',
        },
        {
          label: 'Partnership',
          title: 'Investor support',
          text: 'From due diligence to closing — and asset management after entry.',
        },
      ],
    },
    contact: {
      heading: 'We will source',
      headingEm: 'a real estate investment',
      lead: 'A consultation for investors — share your budget and horizon, and we will filter the market to your strategy.',
      visualText: 'Yield · Assets · Due diligence · Exit',
      visualAlt: 'Investment real estate — Spation Group',
      formTitle: 'Inquiry',
      name: 'Name',
      namePh: 'Your name',
      phone: 'Phone',
      phonePh: '+380',
      service: 'Scenario',
      servicePh: 'Select an option',
      comment: 'Comment',
      commentPh: 'Budget, horizon, asset type...',
      consent: 'By submitting this form, you agree to the processing of personal data',
      submit: 'Send inquiry',
      submitting: 'Sending…',
      successTitle: 'Thank you!',
      successText: 'We will get back to you shortly.',
      services: [
        'Yield acquisition',
        'Portfolio investing',
        'Rental assets',
        'Residential real estate',
        'Commercial real estate',
        'Due diligence',
        'Deal support',
        'Other',
      ],
    },
    footer: {
      navLabel: 'Footer navigation',
      hours: 'Working hours',
      hoursWeek: 'Mon–Fri: 10:00 – 19:00',
      hoursSun: 'Sat–Sun — by appointment',
      contactsTitle: 'Contacts',
      social: 'Social',
      rights: 'All rights reserved.',
      privacy: 'Privacy policy',
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
