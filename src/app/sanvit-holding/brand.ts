export const BRAND = {
  name: 'Санвіт-Холдинг',
  shortName: 'санвіт',
  legalName: 'ТОВ «Санвіт-Холдинг»',
  phone: '+38 044 206 45 40',
  phoneAlt: '+38 067 409 47 60',
  email: 'info@sanvit-holding.com.ua',
  address: 'м. Київ, вул. Ялтинська, 5-Б',
  factory: 'м. Городище, вул. Чехова, 2',
  city: 'Київ',
  heroDesktop: '/images/sanvit-holding/hero-desktop.png',
  heroTablet: '/images/sanvit-holding/hero-tablet.png',
  heroMobile: '/images/sanvit-holding/hero-mobile.png',
  contactImage: '/images/sanvit-holding/hero-desktop.png',
} as const

export const COMPANIES = [
  { name: 'ТОВ «Санвіт-Холдинг»', year: '2003', role: 'Керуюча компанія групи' },
  { name: 'ТОВ «Завод гофротари “Придніпровський”»', year: '2008', role: 'Власне виробництво гофротари' },
  { name: 'ТОВ «Преміум Флекс Україна»', year: '2020', role: 'Гнучка упаковка' },
  { name: 'ТОВ «Ай Ті-Трейд»', year: '2025', role: 'Партнерство та дистриб’юція' },
] as const

export const PRODUCTS = [
  {
    id: 'corrugated-pack',
    title: 'Гофроупаковка',
    text: 'Ящики, лотки та нестандартні конструкції під ваш продукт.',
    image: '/images/sanvit-holding/products/gofroupakovka.png',
  },
  {
    id: 'corrugated-tare',
    title: 'Гофротара',
    text: 'Серійна тара для виробництва, складу та логістики.',
    image: '/images/sanvit-holding/products/gofrotara.png',
  },
  {
    id: 'flex',
    title: 'Гнучка упаковка',
    text: 'Плівки та пакети для харчової й промислової продукції.',
    image: '/images/sanvit-holding/products/gnuchka-upakovka.png',
  },
  {
    id: 'tape',
    title: 'Скотч',
    text: 'Пакувальні стрічки для лінії, складу та відвантаження.',
    image: '/images/sanvit-holding/products/skotch.png',
  },
  {
    id: 'stretch',
    title: 'Стрейч-плівка',
    text: 'Палетування вантажів — стабільно і з контролем витрати.',
    image: '/images/sanvit-holding/products/streych-plivka.png',
  },
  {
    id: 'bubble',
    title: 'Повітряно-бульбашкова плівка',
    text: 'Захист крихких і габаритних відправлень у дорозі.',
    image: '/images/sanvit-holding/products/bulbashkova-plivka.png',
  },
  {
    id: 'kraft',
    title: 'Крафт-папір',
    text: 'Обгортка, прокладки та екологічні пакувальні рішення.',
    image: '/images/sanvit-holding/products/kraft-papir.png',
  },
] as const

export const SOLUTIONS = [
  {
    title: 'Виробництво',
    text: 'Серійна упаковка під лінію: тираж, міцність, друк і стабільні поставки.',
  },
  {
    title: 'Дистриб’юція',
    text: 'Тара й витратні матеріали з одним договором і прогнозованим циклом.',
  },
  {
    title: 'Ритейл',
    text: 'Полицьова та транспортна упаковка, яка витримує логістику мереж.',
  },
  {
    title: 'Логістика',
    text: 'Палетування, захист вантажу та комплектація під складські процеси.',
  },
] as const

export const STATS = [
  { value: '25', label: 'років на ринку' },
  { value: '4', label: 'компанії в групі' },
  { value: '7', label: 'напрямків пакування' },
] as const
