export const BRAND = {
  name: 'Differ Sport',
  shortName: 'Differ',
  mark: 'DS',
  tagline: 'Тренуйся по-іншому',
  role: 'Біговий клуб у Львові. Групові тренування, онлайн-формати та цифрові плани. Купив — і матеріал уже твій.',
  phone: '+380 67 000 00 00',
  email: 'hello@differsport.ua',
  address: 'Спортзал з панорамним видом',
  city: 'Львів',
  heroDesktop: '/images/differ-sport/hero.png',
  heroMobile: '/images/differ-sport/hero.png',
  contactImage: '/images/differ-sport/hero.png',
} as const

export const STATS = [
  { value: '10+', label: 'напрямків тренувань' },
  { value: 'Lviv', label: 'панорамний вид' },
  { value: 'Online', label: 'плани та відео' },
] as const

export const SOCIALS = [
  { label: 'Instagram', href: '#', short: 'Insta' },
  { label: 'Telegram', href: '#', short: 'TG' },
  { label: 'Threads', href: '#', short: 'Threads' },
  { label: 'LinkedIn', href: '#', short: 'LinkedIn' },
  { label: 'TikTok', href: '#', short: 'TT' },
] as const

export type ServiceSlug = 'trenuvannya' | 'trener' | 'pidpyska' | 'produkty'

export const SERVICES = [
  {
    slug: 'trenuvannya' as const,
    label: 'Тренування',
    title: 'Тренування клубу',
    cardSub: 'Групові пробіжки\nдля будь-якого рівня',
    href: '/differ-sport/trenuvannya',
    color: 'lime' as const,
    lead: 'Біговий клуб Differ Sport у Львові: легкі кроси, інтервали, long run і підготовка до стартів. Працюємо в залі з панорамним видом і на вулиці.',
    points: [
      'Easy run, інтервали, темпові та long run',
      'Групи під різний рівень підготовки',
      'Розклад кілька разів на тиждень',
      'Силова й відновлення в залі клубу',
    ],
  },
  {
    slug: 'trener' as const,
    label: 'Тренер',
    title: 'Тренер і супровід',
    cardSub: 'Персональний план\nі робота в групі',
    href: '/differ-sport/trener',
    color: 'orange' as const,
    lead: 'Тренер веде клубні тренування та персональний супровід: техніка, план, старти й прогрес без хаосу в голові.',
    points: [
      'Діагностика форми та техніки',
      'Індивідуальний план під ціль',
      'Робота в групі та 1:1',
      'Підготовка до 5K, 10K і півмарафону',
    ],
  },
  {
    slug: 'pidpyska' as const,
    label: 'Підписка',
    title: 'Підписка клубу',
    cardSub: 'Live · Онлайн\n· Додаткові послуги',
    href: '/differ-sport/pidpyska',
    color: 'white' as const,
    lead: 'Один вхід у клуб: живі тренування, онлайн-формати та додаткові послуги. Платите раз — і тренуєтесь у зручному ритмі.',
    points: [
      'Доступ до групових тренувань',
      'Онлайн-формати, якщо не встигаєте в зал',
      'Додаткові послуги: силова, відновлення, тести',
      'Спільнота клубу та розбір стартів',
    ],
  },
  {
    slug: 'produkty' as const,
    label: 'Продукти',
    title: 'Цифрові продукти',
    cardSub: 'PDF, відео\nі плани тренувань',
    href: '/differ-sport/produkty',
    color: 'surface' as const,
    lead: 'Готові матеріали, які можна купити в кілька кліків: плани, відео та гайди. Після оплати доступ приходить автоматично.',
    points: [
      'Оплата безпосередньо на сайті',
      'Миттєвий доступ після успішної оплати',
      'PDF, відео та інші цифрові формати',
      'Нові продукти додаються без переробки сайту',
    ],
  },
] as const

export const FORM_OPTIONS = [
  'Тренування',
  'Тренер',
  'Підписка',
  'Продукти',
  'Інше',
] as const

export type ProductBadge = 'New' | 'Гаряча пропозиція' | 'Доступно онлайн'

export const PRODUCTS = [
  {
    id: 'start-5k',
    category: 'PDF',
    title: 'Старт 5K',
    meta: '6 тижнів · миттєвий доступ',
    extra: 'План для першого фінішу',
    price: 490,
    badge: 'New' as ProductBadge,
    fileLabel: 'start-5k.pdf',
  },
  {
    id: 'plan-10k',
    category: 'PDF',
    title: '10K PRO Plan',
    meta: '8 тижнів · миттєвий доступ',
    extra: 'Темп, інтервали, силова',
    price: 790,
    badge: 'Гаряча пропозиція' as ProductBadge,
    fileLabel: '10k-pro-plan.pdf',
  },
  {
    id: 'technique',
    category: 'Відео',
    title: 'Техніка бігу',
    meta: '12 уроків · онлайн',
    extra: 'Каденс, стопа, постава',
    price: 990,
    badge: 'Доступно онлайн' as ProductBadge,
    fileLabel: 'technique-video.zip',
  },
  {
    id: 'strength',
    category: 'PDF + відео',
    title: 'Сила для бігуна',
    meta: '4 тижні · зал і дім',
    extra: 'Мінімум часу, максимум ефекту',
    price: 690,
    badge: 'New' as ProductBadge,
    fileLabel: 'strength-for-runners.zip',
  },
] as const

export type Product = (typeof PRODUCTS)[number]
