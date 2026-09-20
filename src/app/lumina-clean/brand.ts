export const BRAND = {
  name: 'Lumina Cleaning Co.',
  shortName: 'Lumina',
  tagline: 'Residential & Commercial Cleaning',
  phone: '+1 (305) 555-0148',
  email: 'hello@luminaclean.com',
  address: 'Miami-Dade & Broward Counties',
  city: 'Miami, Florida',
  hero: '/images/lumina-clean/hero.png',
  contactImage: '/images/lumina-clean/hero.png',
} as const

export const SERVICE_IMAGES: Record<string, string> = {
  recurring:
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
  standard:
    'https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=900&q=80',
  deep:
    'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=900&q=80',
  move:
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
  office:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
  airbnb:
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',
}

export const ZIP_PATTERN = /^\d{5}(?:-\d{4})?$/
