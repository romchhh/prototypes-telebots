export const BRAND = {
  name: 'ProAssistant',
  tagline: 'Професійний асистент',
  role: 'Професійна підготовка майбутніх лідерів · навчання та підбір асистентів',
  phone: '+380 44 320 18 90',
  email: 'hello@proassistant.ua',
  address: 'вул. Велика Васильківська 72',
  city: '03150 Київ',
  heroImage: '/images/proassistant/hero.png',
  logo: '/images/proassistant/logo.png',
} as const

export const STATS = [
  { value: '200+', label: 'випускників школи' },
  { value: '80+', label: 'асистентів у базі' },
  { value: '5+', label: 'років підготовки' },
] as const

export const SERVICES = [
  {
    slug: 'navchannya',
    label: 'Навчання',
    description: 'Професійна підготовка майбутніх асистентів',
    href: '#contact',
  },
  {
    slug: 'poshuk',
    label: 'Пошук асистента',
    description: 'Знайти досвідченого асистента для вашого бізнесу',
    href: '#contact',
  },
] as const

export const CONTACT_SERVICES = [
  'Навчання',
  'Пошук асистента',
  'Інше',
] as const
