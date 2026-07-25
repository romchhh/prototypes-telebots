export const BRAND = {
  name: 'Ілля Літун',
  shortName: 'Літун',
  tagline: 'Освітній бізнес з Іллею Літуном',
  role: 'Засновник однієї з найкращих освітніх екосистем — Turbo Education',
  phone: '+380 67 000 00 00',
  email: 'hello@turbo.education',
  address: 'онлайн · Київ',
  city: 'Україна',
  heroDesktop: '/images/litun/hero.jpg',
  heroMobile: '/images/litun/hero.jpg',
  contactImage: '/images/litun/hero.jpg',
} as const

export const STATS = [
  { value: '25 тис+', label: 'випускників' },
  { value: '5000', label: 'активних учнів щомісяця' },
  { value: 'Forbes', label: 'Next 250' },
] as const

export const SOCIALS = [
  { label: 'Instagram', href: '#', short: 'Insta' },
  { label: 'Telegram', href: '#', short: 'TG' },
  { label: 'Threads', href: '#', short: 'Threads' },
  { label: 'LinkedIn', href: '#', short: 'LinkedIn' },
  { label: 'TikTok', href: '#', short: 'TT' },
] as const

export type ServiceSlug = 'konsaltyng' | 'konsultatsiya' | 'strat-sesiya' | 'klub'

export const SERVICES = [
  {
    slug: 'konsaltyng' as const,
    label: 'Консалтинг',
    title: 'Консалтинг для освітнього бізнесу',
    cardSub: 'Стратегія, масштабування\nі системний ріст',
    href: '/litun/konsaltyng',
    color: 'blue' as const,
    lead: 'Глибокий супровід освітніх проєктів: від діагностики моделі до побудови процесів, які тримають ріст.',
    points: [
      'Аудит бізнес-моделі та юніт-економіки',
      'Побудова воронок і продуктової лінійки',
      'Операційна система команди',
      'План масштабування на 6–12 місяців',
    ],
  },
  {
    slug: 'konsultatsiya' as const,
    label: 'Консультація',
    title: 'Особиста консультація',
    cardSub: 'Точкові рішення\nпід ваш запит',
    href: '/litun/konsultatsiya',
    color: 'teal' as const,
    lead: 'Коротка, сфокусована сесія: розберемо вузьке місце, пріоритети й конкретні кроки, які варто зробити вже зараз.',
    points: [
      'Розбір поточного етапу бізнесу',
      'Відповіді на ключові питання',
      'Пріоритезація наступних кроків',
      'Рекомендації під ваш контекст',
    ],
  },
  {
    slug: 'strat-sesiya' as const,
    label: 'Страт сесія',
    title: 'Стратегічна сесія',
    cardSub: 'Фокусна робота\nнад напрямом росту',
    href: '/litun/strat-sesiya',
    color: 'indigo' as const,
    lead: 'Інтенсивна робота над стратегією: цілі, позиціонування, офери та план дій для команди чи соло-засновника.',
    points: [
      'Формулювання цілей і метрик',
      'Позиціонування та офер',
      'Дорожня карта на квартал',
      'Рішення по продуктах і каналах',
    ],
  },
  {
    slug: 'klub' as const,
    label: 'Клуб',
    title: 'Клуб освітніх підприємців',
    cardSub: 'Спільнота, обмін\nі постійний ріст',
    href: '/litun/klub',
    color: 'sky' as const,
    lead: 'Закрита спільнота для тих, хто будує освітній бізнес: регулярні зустрічі, розбори кейсів і доступ до експертизи.',
    points: [
      'Регулярні live-зустрічі та розбори',
      'Обмін досвідом між учасниками',
      'Доступ до матеріалів і шаблонів',
      'Підтримка на етапі впровадження',
    ],
  },
] as const

export const FORM_OPTIONS = [
  'Консалтинг',
  'Консультація',
  'Страт сесія',
  'Клуб',
  'Інше',
] as const
