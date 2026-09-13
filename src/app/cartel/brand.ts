export const BRAND = {
  name: 'Cartel',
  shortName: 'Cartel',
  phone: '+380 67 000 00 00',
  email: 'hello@cartel.ua',
  address: 'ТК «Буковель», Івано-Франківська обл.',
  city: 'Поляниця',
  heroDesktop: '/images/cartel/Gemini_Generated_Image_cj5q8gcj5q8gcj5q.jpeg',
  heroMobile: '/images/cartel/Gemini_Generated_Image_evwxd7evwxd7evwx.jpeg',
  contactImage: '/images/cartel/Gemini_Generated_Image_evwxd7evwxd7evwx.jpeg',
  logoWhite: '/images/cartel/logo-white.png',
  logoBlack: '/images/cartel/logo-black.png',
} as const

export const NAV = [
  { href: '#pro-nas', label: 'Про нас' },
  { href: '#restorany', label: 'Ресторани' },
  { href: '#goteli', label: 'Готелі' },
  { href: '#spa', label: 'SPA' },
  { href: '#komanda', label: 'Команда' },
  { href: '#vakansii', label: 'Вакансії' },
  { href: '#blog', label: 'Блог' },
  { href: '#kontakt', label: 'Контакти' },
] as const

export const DIRECTIONS = [
  {
    id: 'spa',
    title: 'VODA club',
    text: 'Найвисокогірніший пляж країни у самому серці Карпат. Всесезонний басейн, SPA, джакузі та італійський ресторан.',
    image: '/images/cartel/Gemini_Generated_Image_cj5q8gcj5q8gcj5q.jpeg',
  },
  {
    id: 'banya',
    title: 'Банька на дровах',
    text: 'Тихий куточок у центрі Буковелю. Старовинний банний обряд і професійний масаж.',
    image: '/images/cartel/Gemini_Generated_Image_evwxd7evwxd7evwx.jpeg',
  },
  {
    id: 'eat',
    title: 'Пункти швидкого харчування',
    text: 'Швидко та смачно на схилах Буковелю — ситні страви, коли потрібна енергія між трасами.',
    image: '/images/cartel/contact.jpg',
  },
  {
    id: 'restorany',
    title: 'Ресторани',
    text: 'Сімʼя закладів CARTEL у Буковелі, Одесі та Яремче — українська, італійська, азійська та американська кухні.',
    image: '/images/cartel/hero.jpg',
  },
] as const

export const SERVICES = [
  'Бронювання столика',
  'Доставка страв',
  'VODA club / SPA',
  'Банька на дровах',
  'Готелі Cartel',
  'Корпоратив / івент',
  'Вакансії',
  'Інше',
] as const
