export const BRAND = {
  name: 'USA Auto',
  tagline: 'Авто з Америки',
  role: 'Підбір, аукціон і доставка авто з США під ключ — чесно і без зайвих сюрпризів',
  phone: '+380 44 500 18 20',
  email: 'hello@usa-auto.ua',
  address: 'вул. Богдана Хмельницького 19',
  city: '01030 Київ',
  heroImage: '/images/usa-auto/hero.png',
  heroBg: '/images/usa-auto/hero-bg.png',
  logo: '/images/usa-auto/logo.png',
  logoLight: '/images/usa-auto/logo-light.png',
  footerBg: '/images/usa-auto/footer-bg.png',
} as const

export const STATS = [
  { value: '1500+', label: 'пригнаних авто' },
  { value: '12+', label: 'років на ринку' },
  { value: '98%', label: 'успішних угод' },
] as const

export const SERVICES = [
  {
    slug: 'pidbir',
    label: 'Підбір авто',
    description: 'Знайдемо ідеальне авто під ваш бюджет і стиль',
    href: '#contact',
  },
  {
    slug: 'prygin',
    label: 'Пригін з США',
    description: 'Аукціон, доставка, розмитнення і постановка на облік',
    href: '#contact',
  },
] as const

export const CONTACT_SERVICES = [
  'Підбір авто',
  'Пригін з США',
  'Розмитнення',
  'Інше',
] as const
