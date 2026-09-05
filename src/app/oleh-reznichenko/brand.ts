export const BRAND = {
  name: 'OLEH REZNICHENKO',
  shortName: 'OLEH',
  subName: 'REZNICHENKO',
  title: 'Szef kuchni',
  tagline: 'Szef kuchni',
  phone: '+48 512 659 312',
  email: 'chef.reznichenko.oleg@gmail.com',
  address: 'Polska',
  city: 'Polska',
  heroDesktop: '/images/oleh-reznichenko/hero.png',
  heroMobile: '/images/oleh-reznichenko/hero.png',
  contactImage: '/images/oleh-reznichenko/hero.png',
  quote:
    'Doświadczony szef kuchni, który spełni wszystkie marzenia o restauracji, do której ludzie będą chcieli wrócić.',
  about:
    'Kreatywny i doświadczony szef kuchni z 18-letnim doświadczeniem w przygotowaniu różnorodnych dań kuchni międzynarodowej i 6-letnim doświadczeniem jako szef kuchni. Specjalista w zarządzaniu zespołem oraz tworzeniu nowych menu.',
} as const

export const SOCIALS = [
  { id: 'instagram', label: 'Instagram', href: '#' },
  { id: 'linkedin', label: 'LinkedIn', href: '#' },
  { id: 'facebook', label: 'Facebook', href: '#' },
  { id: 'youtube', label: 'YouTube', href: '#' },
] as const

export const FORM_SERVICES = [
  'Konsulting restauracji od zera',
  'Aktualizacja menu',
  'Catering',
  'Masterclassy',
  'Kolacja prywatna',
  'Eventy korporacyjne',
  'Inne',
] as const

export const OFFERINGS = [
  {
    title: 'Konsulting restauracji od zera',
    desc: 'Pełne wsparcie przy starcie: koncepcja, kuchnia, menu, zespół i procesy operacyjne.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    btn: 'red',
  },
  {
    title: 'Aktualizacja menu',
    desc: 'Odświeżenie karty dań, nowe pozycje i dopasowanie oferty do sezonu oraz gości.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    btn: 'milk',
  },
  {
    title: 'Catering',
    desc: 'Organizacja cateringu na wydarzenia, bankiety i prywatne przyjęcia.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80',
    btn: 'black',
  },
  {
    title: 'Masterclassy',
    desc: 'Warsztaty kulinarne dla zespołów, firm i pasjonatów gotowania.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
    btn: 'white',
  },
  {
    title: 'Kolacja prywatna',
    desc: 'Ekskluzywna kolacja u Ciebie lub w wybranym miejscu — menu szyte na miarę.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    btn: 'red',
  },
  {
    title: 'Eventy korporacyjne',
    desc: 'Oprawa kulinarna eventów firmowych: degustacje, show cooking i catering.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    btn: 'milk',
  },
] as const

export const EXPERIENCE = [
  {
    role: 'Brand Szef',
    place: 'URBAN COFFEE',
    location: 'Kraków',
    period: '2025',
    highlights: [
      'Nadzór nad kuchnią i autorskie menu',
      'Catering na wydarzenia i bankiety',
      'Szkolenie zespołu i standardy HACCP',
    ],
  },
  {
    role: 'Szef kuchni',
    place: 'Piatto Italian Kitchen & Centralé',
    location: 'Szczecin',
    period: '2023–2024',
    highlights: [
      'Otwarcie restauracji od zera',
      'Menu, karty technologiczne i food-cost',
      'Zespół 10 kucharzy — operacje i budżet',
    ],
  },
  {
    role: 'Szef kuchni',
    place: "Restaurant 'All about U'",
    location: 'Odessa',
    period: '2018–2022',
    highlights: [
      'Współtworzenie menu z brand szefem',
      'Zarządzanie kuchnią i dostawcami',
      'Catering i szkolenie personelu',
    ],
  },
] as const

export const SKILLS = [
  'Kuchnia włoska i śródziemnomorska',
  'Kuchnia francuska i ukraińska',
  'Autorskie dania i menu',
  'Zarządzanie zespołem',
  'Food-cost i zapasy',
  'HACCP',
] as const

export const MENU_IMAGES = [
  'Picture11.jpg',
  'Picture111.jpg',
  'Picture1111.jpg',
  'Picture112.jpg',
  'Picture1123.jpg',
  'Picture112321.jpg',
  'Picture1213.jpg',
  'Picture131232113.jpg',
  'Picture13211321.jpg',
  'Picture13213213.jpg',
  'Picture2131.jpg',
  'Picture312311.jpg',
  'Picture31232131.jpg',
  'Picture32131231.jpg',
  'Picture3213211.jpg',
  'Picture32132131.jpg',
].map((file) => ({
  src: `/images/oleh-reznichenko/menu/${file}`,
  alt: 'Danie autorskie — OLEH REZNICHENKO',
}))

export const FAQ_TABS = [
  {
    id: 'projekt',
    label: 'Projekt',
    items: [
      {
        q: 'Z jakimi projektami pracujesz?',
        a: 'Restauracje, bary, kawiarnie, beach clubs, hotele i inne lokale gastronomiczne — od nowych koncepcji po działający biznes.',
      },
      {
        q: 'Na jakim etapie najlepiej się zgłosić?',
        a: 'Na każdym — od pomysłu i planowania otwarcia po audyt i optymalizację działającej kuchni. Im wcześniej, tym łatwiej zaplanować proces.',
      },
      {
        q: 'Czy pracujesz tylko z nowymi projektami?',
        a: 'Nie. Wspieram zarówno starty od zera, jak i rozwój istniejących lokali — nowe menu, reorganizacja kuchni, szkolenia zespołu.',
      },
      {
        q: 'W jakich krajach pracujesz?',
        a: 'Głównie Polska i Ukraina, z doświadczeniem w projektach międzynarodowych. Format współpracy dostosowuję do lokalizacji.',
      },
    ],
  },
  {
    id: 'proces',
    label: 'Proces',
    items: [
      {
        q: 'Jak wygląda pierwsza konsultacja?',
        a: 'Krótka rozmowa o lokalu, celach i wyzwaniach. Omawiamy zakres prac, harmonogram i proponuję format współpracy.',
      },
      {
        q: 'Ile trwa opracowanie menu?',
        a: 'Zależy od skali — od kilku tygodni dla mniejszego lokalu do kilku miesięcy przy pełnym launchu z kartami technologicznymi.',
      },
      {
        q: 'Czy pracujesz zdalnie?',
        a: 'Tak — konsultacje online są możliwe. Przy otwarciu restauracji i szkoleniach zespołu preferuję obecność na miejscu.',
      },
      {
        q: 'Co otrzymuję po zakończeniu projektu?',
        a: 'Gotowe menu, karty technologiczne, ustawiony food-cost, przeszkolony zespół i jasne standardy operacyjne kuchni.',
      },
    ],
  },
  {
    id: 'wspolpraca',
    label: 'Współpraca',
    items: [
      {
        q: 'W jakim formacie współpracujesz?',
        a: 'Jednorazowe projekty, krótkoterminowe wsparcie przy otwarciu lub stała opieka jako brand chef — w zależności od potrzeb lokalu.',
      },
      {
        q: 'Czy oferujesz stałą obsługę jako brand chef?',
        a: 'Tak. Nadzoruję kuchnię, utrzymuję standardy jakości, rozwijam menu i wspieram zespół w codziennych operacjach.',
      },
      {
        q: 'Jak wygląda wycena usług?',
        a: 'Indywidualnie — po poznaniu zakresu, wielkości lokalu i terminów. Pierwsza konsultacja pozwala określić budżet i etapy.',
      },
      {
        q: 'Jak szybko odpowiadasz na zapytania?',
        a: 'Staram się odpowiadać w ciągu 24–48 godzin. Pilne sprawy operacyjne omawiamy telefonicznie.',
      },
    ],
  },
] as const
