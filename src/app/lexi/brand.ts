export const BRAND = {
  name: 'LEXI.education',
  shortName: 'lexi',
  headline: ['Англійська для дітей', 'у невеликих групах', 'зі стартом уже цього тижня'],
  highlight: 'невеликих групах',
  role: 'Школа іноземних мов у Львові. Живе спілкування, гра й результат уже з перших занять — для дітей будь-якого рівня.',
  phone: '+380 67 000 00 00',
  email: 'hello@lexi.education',
  address: 'вул. Січових Стрільців 12',
  city: 'Львів',
  logo: '/images/lexi/logo.png',
  heroImage: '/images/lexi/hero.jpg',
} as const

export const NAV = [
  { label: 'Напрями', href: '#napryamy' },
  { label: 'Ціни', href: '#ciny' },
  { label: 'Як проходить урок', href: '#urok' },
  { label: 'Часті питання', href: '#faq' },
  { label: 'Контакти', href: '#contact' },
] as const

export const STATS = [
  { value: '8+', label: 'років досвіду' },
  { value: '420+', label: 'щасливих учнів' },
  { value: '1:6', label: 'у групі максимум' },
] as const

export const CONTACT_SERVICES = [
  'Англійська для дітей',
  'Німецька для дітей',
  'Французька для дітей',
  'Підготовка до школи',
  'Індивідуальні заняття',
  'Онлайн-уроки',
  'Інше',
] as const
