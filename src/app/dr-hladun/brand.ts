export const BRAND = {
  name: 'DR. TARAS HLADUN',
  shortName: 'Dr.',
  subName: 'Hladun',
  firstName: 'Taras',
  lastName: 'Hladun',
  title: 'Urologist',
  phone: '+48 000 000 000',
  email: 'kontakt@drhladun.pl',
  address: 'Szczecin, Polska',
  city: 'Szczecin',
  instagram: 'https://www.instagram.com/dr_hladun',
  instagramHandle: '@dr_hladun',
  heroDesktop: '/images/dr-hladun/hero.jpg',
  heroMobile: '/images/dr-hladun/hero.jpg',
  contactImage: '/images/dr-hladun/hero.jpg',
} as const

export const SOCIALS = [
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/dr_hladun' },
  { id: 'linkedin', label: 'LinkedIn', href: '#' },
  { id: 'facebook', label: 'Facebook', href: '#' },
  { id: 'youtube', label: 'YouTube', href: '#' },
] as const

/** External booking platforms — no on-site sales links (EU medical self-branding). */
export const BOOKING_PLATFORMS = [
  {
    id: 'znanylekarz',
    name: 'ZnanyLekarz',
    href: 'https://www.znanylekarz.pl/',
    descKey: 'platformZnany' as const,
  },
  {
    id: 'lekarze',
    name: 'Lekarze bez kolejki',
    href: 'https://lekarzebezkolejki.pl/',
    descKey: 'platformLekarze' as const,
  },
  {
    id: 'clinic-own',
    name: 'Własny gabinet',
    href: '#kontakt',
    descKey: 'platformOwn' as const,
    comingSoon: true,
  },
] as const

export const CLINICS = [
  {
    name: 'Klinika partnerska — Szczecin',
    city: 'Szczecin',
    href: '#',
  },
  {
    name: 'Klinika partnerska — Warszawa',
    city: 'Warszawa',
    href: '#',
  },
] as const

export const OFFERINGS = [
  {
    id: 'prosthetic',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    btn: 'red',
  },
  {
    id: 'andrology',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
    btn: 'milk',
  },
  {
    id: 'sexual',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
    btn: 'black',
  },
  {
    id: 'reconstructive',
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&q=80',
    btn: 'white',
  },
  {
    id: 'consultations',
    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=80',
    btn: 'red',
  },
  {
    id: 'education',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    btn: 'milk',
  },
] as const

export const EXPERIENCE = [
  {
    id: 'szczecin',
    period: 'obecnie',
  },
  {
    id: 'congress',
    period: '2023–2025',
  },
  {
    id: 'training',
    period: '2018–2022',
  },
] as const

export const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    alt: 'Procedura urologiczna',
  },
  {
    src: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
    alt: 'Konsultacja specjalistyczna',
  },
  {
    src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
    alt: 'Praca w sali operacyjnej',
  },
  {
    src: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&q=80',
    alt: 'Sprzęt medyczny',
  },
  {
    src: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=80',
    alt: 'Gabinet lekarski',
  },
  {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    alt: 'Edukacja medyczna',
  },
  {
    src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80',
    alt: 'Kongres medyczny',
  },
  {
    src: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80',
    alt: 'Zespół kliniczny',
  },
  {
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    alt: 'Dokumentacja medyczna',
  },
  {
    src: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80',
    alt: 'Szpital',
  },
  {
    src: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80',
    alt: 'Laboratorium',
  },
  {
    src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80',
    alt: 'Lekarz specjalista',
  },
] as const
