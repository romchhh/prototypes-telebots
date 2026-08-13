export const BRAND = {
  name: 'Юстиція',
  role: 'Юридична компанія в Києві · адвокатський захист і супровід справ',
  phone: '+380 44 200 45 67',
  email: 'info@yustytsiya.ua',
  address: 'вул. Хрещатик 15',
  city: '01001 Київ',
  heroImage: '/images/yustytsiya/hero.png',
} as const

export const SERVICES = [
  { slug: 'civil', label: 'Цивільні спори', href: '#contact', color: 'gold' },
  { slug: 'criminal', label: 'Кримінальний захист', href: '#contact', color: 'navy' },
  { slug: 'family', label: 'Сімейне право', href: '#contact', color: 'dark' },
  { slug: 'corporate', label: 'Корпоративне право', href: '#contact', color: 'warm' },
] as const

export const STATS = [
  { value: '15+', label: 'років практики' },
  { value: '980+', label: 'виграних справ' },
  { value: '24/7', label: 'підтримка клієнта' },
] as const

export const CONTACT_SERVICES = [
  'Цивільні спори',
  'Кримінальний захист',
  'Сімейне право',
  'Корпоративне право',
  'Нерухомість і земля',
  'Трудове право',
  'Спадкові справи',
  'Інше',
] as const
