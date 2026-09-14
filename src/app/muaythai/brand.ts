export const BRAND = {
  name: 'Київська федерація муайтай',
  shortName: 'Муайтай',
  cityName: 'Київ',
  phone: '+380 44 333 21 21',
  email: 'hello@kfmt.ua',
  address: 'вул. Спортивна 1',
  city: '02002 Київ',
  hours: 'Пн–Сб: 09:00 – 21:00',
  hoursNote: 'Неділя — змагання та семінари',
  instagram: '#',
  facebook: '#',
  telegram: '#',
  heroDesktop: '/images/muaythai/hero-desktop.png',
  heroMobile: '/images/muaythai/hero-mobile.jpeg',
  contactImage: '/images/muaythai/hero-desktop.png',
  aboutImage: '/images/muaythai/hero-mobile.jpeg',
} as const

export const NAV = [
  { href: '/muaythai#pro-nas', label: 'Федерація' },
  { href: '/muaythai#novyny', label: 'Новини' },
  { href: '/muaythai#podii', label: 'Події' },
  { href: '/muaythai#kluby', label: 'Клуби' },
  { href: '/muaythai#trenery', label: 'Тренери' },
  { href: '/muaythai#faq', label: 'FAQ' },
  { href: '/muaythai#kontakt', label: 'Контакти' },
] as const

export const PILLARS = ['Клуби', 'Тренери', 'Змагання'] as const

export const SERVICES = [
  'Пробне заняття',
  'Запис до клубу',
  'Участь у змаганнях',
  'Семінар / суддівство',
  'Членство клубу у федерації',
  'Звернення / скарга',
  'Інше',
] as const

export const ABOUT = {
  text: 'Київська федерація муайтай об’єднує клуби столиці та області, готує збірну міста до всеукраїнських і міжнародних стартів і проводить чемпіонати за правилами IFMA. Ми розвиваємо аматорський і професійний муайтай, суддівство, антидопінг і дитячо-юнацькі програми. Федерація відкрита для спортсменів, тренерів і клубів, які працюють за єдиними стандартами.',
  moreHref: '/muaythai/pro-nas',
}

export const NEWS = [
  {
    slug: 'chempionat-kyieva-2026',
    date: '12 січня 2026',
    title: 'Чемпіонат Києва: 140 спортсменів із 15 клубів',
    excerpt: 'Перший міський чемпіонат після паузи. Переможці формують збірну Києва на Кубок України.',
    image: '/images/muaythai/hero-desktop.png',
  },
  {
    slug: 'zbirna-kyieva-kubok',
    date: '4 лютого 2026',
    title: 'Збірна Києва готується до Кубка України',
    excerpt: 'Тренувальний збір на базі федерації. Розклад відкритих спарингів — у календарі подій.',
    image: '/images/muaythai/hero-mobile.jpeg',
  },
  {
    slug: 'seminar-suddiv-ifma',
    date: '18 березня 2026',
    title: 'Семінар суддів і тренерів за стандартами IFMA',
    excerpt: 'Оновлення правил, медичний протокол і антидопінговий брифінг для клубів-членів.',
    image: '/images/muaythai/hero-desktop.png',
  },
] as const

export const EVENTS = [
  {
    id: 'kyiv-champ',
    date: '24–25 січня',
    year: '2026',
    startDate: '2026-01-24',
    title: 'Чемпіонат міста Києва з муайтай',
    place: 'Палац спорту, Київ',
    status: 'Реєстрація відкрита',
  },
  {
    id: 'fed-cup',
    date: '14 березня',
    year: '2026',
    startDate: '2026-03-14',
    title: 'Кубок Київської федерації',
    place: 'СК «Атлет», Солом’янка',
    status: 'Скоро реєстрація',
  },
  {
    id: 'kyiv-open',
    date: '16–17 травня',
    year: '2026',
    startDate: '2026-05-16',
    title: 'Kyiv Open Muaythai',
    place: 'Київ, міжнародний турнір',
    status: 'Календар IFMA',
  },
] as const

export const DISTRICTS = [
  'Усі',
  'Голосіївський',
  'Дарницький',
  'Деснянський',
  'Дніпровський',
  'Оболонський',
  'Печерський',
  'Подільський',
  'Святошинський',
  'Солом’янський',
  'Шевченківський',
  'Київська область',
] as const

export type District = (typeof DISTRICTS)[number]

export const CLUBS = [
  {
    id: 'fighter',
    name: 'Fighter Gym',
    district: 'Печерський' as District,
    address: 'вул. Велика Васильківська 72',
    hours: 'Пн–Сб 08:00–22:00',
    lat: 50.427,
    lng: 30.538,
  },
  {
    id: 'tiger',
    name: 'Tiger Muaythai',
    district: 'Шевченківський' as District,
    address: 'вул. Січових Стрільців 24',
    hours: 'Пн–Пт 07:30–21:30',
    lat: 50.454,
    lng: 30.489,
  },
  {
    id: 'podil',
    name: 'Muaythai Podil',
    district: 'Подільський' as District,
    address: 'вул. Нижній Вал 15',
    hours: 'Щодня 09:00–21:00',
    lat: 50.468,
    lng: 30.516,
  },
  {
    id: 'obolon',
    name: 'Sit-Up Gym',
    district: 'Оболонський' as District,
    address: 'пр. Оболонський 16',
    hours: 'Пн–Сб 08:00–22:00',
    lat: 50.501,
    lng: 30.498,
  },
  {
    id: 'solomyanka',
    name: 'Fairtex Kyiv',
    district: 'Солом’янський' as District,
    address: 'вул. Преображенська 23',
    hours: 'Пн–Сб 09:00–21:00',
    lat: 50.426,
    lng: 30.458,
  },
  {
    id: 'darnytsia',
    name: 'Legion Muaythai',
    district: 'Дарницький' as District,
    address: 'пр. Миколи Бажана 8',
    hours: 'Пн–Пт 08:00–21:00',
    lat: 50.407,
    lng: 30.628,
  },
  {
    id: 'holosiiv',
    name: 'Champion Club',
    district: 'Голосіївський' as District,
    address: 'вул. Васильківська 30',
    hours: 'Щодня 08:00–22:00',
    lat: 50.397,
    lng: 30.497,
  },
  {
    id: 'sviatoshyn',
    name: 'West Ring',
    district: 'Святошинський' as District,
    address: 'пр. Перемоги 67',
    hours: 'Пн–Сб 09:00–21:00',
    lat: 50.457,
    lng: 30.365,
  },
  {
    id: 'dnipro',
    name: 'Left Bank Gym',
    district: 'Дніпровський' as District,
    address: 'вул. Будівельників 32',
    hours: 'Пн–Сб 08:00–21:00',
    lat: 50.448,
    lng: 30.613,
  },
  {
    id: 'desna',
    name: 'Desna Fight',
    district: 'Деснянський' as District,
    address: 'вул. Милославська 14',
    hours: 'Пн–Пт 09:00–21:00',
    lat: 50.515,
    lng: 30.598,
  },
  {
    id: 'boryspil',
    name: 'Boryspil Muaythai',
    district: 'Київська область' as District,
    address: 'м. Бориспіль, вул. Київський Шлях 79',
    hours: 'Пн–Сб 10:00–21:00',
    lat: 50.352,
    lng: 30.955,
  },
  {
    id: 'irpin',
    name: 'Irpin Team',
    district: 'Київська область' as District,
    address: 'м. Ірпінь, вул. Університетська 7',
    hours: 'Пн–Сб 09:00–21:00',
    lat: 50.518,
    lng: 30.239,
  },
] as const

export const TRAINERS = [
  {
    slug: 'andrii-koval',
    name: 'Андрій Коваль',
    role: 'Головний тренер збірної',
    club: 'Fighter Gym',
    featured: true,
    image: '/images/muaythai/hero-desktop.png',
  },
  {
    slug: 'olena-marchenko',
    name: 'Олена Марченко',
    role: 'Тренерка національної категорії',
    club: 'Tiger Muaythai',
    featured: true,
    image: '/images/muaythai/hero-mobile.jpeg',
  },
  {
    slug: 'viktor-petrenko',
    name: 'Віктор Петренко',
    role: 'Тренер збірної Києва',
    club: 'Fairtex Kyiv',
    featured: true,
    image: '/images/muaythai/hero-desktop.png',
  },
  {
    slug: 'maryna-lytvin',
    name: 'Марина Литвин',
    role: 'Дитячо-юнацька програма',
    club: 'Muaythai Podil',
    featured: true,
    image: '/images/muaythai/hero-mobile.jpeg',
  },
  {
    slug: 'dmytro-savchuk',
    name: 'Дмитро Савчук',
    role: 'КМС, тренер клубу',
    club: 'Sit-Up Gym',
    featured: true,
    image: '/images/muaythai/hero-desktop.png',
  },
  {
    slug: 'ihor-bondar',
    name: 'Ігор Бондар',
    role: 'Суддя IFMA, тренер',
    club: 'Legion Muaythai',
    featured: true,
    image: '/images/muaythai/hero-mobile.jpeg',
  },
  {
    slug: 'sofiia-hrytsenko',
    name: 'Софія Гриценко',
    role: 'Тренерка жіночої команди',
    club: 'Champion Club',
    featured: true,
    image: '/images/muaythai/hero-desktop.png',
  },
  {
    slug: 'pavlo-melnyk',
    name: 'Павло Мельник',
    role: 'Тренер профі-групи',
    club: 'West Ring',
    featured: true,
    image: '/images/muaythai/hero-mobile.jpeg',
  },
  {
    slug: 'ostap-kravets',
    name: 'Остап Кравець',
    role: 'Тренер клубу',
    club: 'Left Bank Gym',
    featured: false,
    image: '/images/muaythai/hero-desktop.png',
  },
  {
    slug: 'nadiia-shvets',
    name: 'Надія Швець',
    role: 'Дитячі групи',
    club: 'Desna Fight',
    featured: false,
    image: '/images/muaythai/hero-mobile.jpeg',
  },
] as const

export const FAQ = [
  {
    q: 'Як записатися на пробне заняття?',
    a: 'Залиште заявку на сайті або зателефонуйте. Ми підберемо клуб у вашому районі й узгодимо час із тренером. Пробне заняття — без зобов’язань.',
  },
  {
    q: 'З якого віку можна починати?',
    a: 'Дитячі групи — з 6–7 років. Підліткові та дорослі секції працюють окремо. Перед першим тренуванням потрібна медична довідка.',
  },
  {
    q: 'Як клубу стати членом федерації?',
    a: 'Надішліть заявку через форму (послуга «Членство клубу»). Потрібні статутні документи, дані тренерів і підтвердження роботи за правилами IFMA.',
  },
  {
    q: 'Де дивитися календар змагань?',
    a: 'Найближчі старти — на головній у блоці подій. Повний календар оновлює адміністратор федерації. Реєстрація на чемпіонати — через клуб або форму заявки.',
  },
  {
    q: 'Що з антидопінгом і медициною?',
    a: 'Федерація працює за протоколами WADA / Національного антидопінгового центру. На змаганнях обов’язковий медичний допуск. Деталі — у розділі «Про федерацію».',
  },
  {
    q: 'Як подати звернення або скаргу?',
    a: 'Оберіть у формі «Звернення / скарга» і коротко опишіть ситуацію. Заявки розглядає секретаріат федерації. Анонімні звернення приймаємо на email.',
  },
] as const

export const LEADERSHIP = [
  { name: 'Іван Шевельов', role: 'Президент федерації' },
  { name: 'Олена Марченко', role: 'Віцепрезидентка, спорт' },
  { name: 'Андрій Коваль', role: 'Головний тренер збірної' },
  { name: 'Ігор Бондар', role: 'Голова суддівської колегії' },
] as const
