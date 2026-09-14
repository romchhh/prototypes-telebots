import { BRAND, CLUBS, EVENTS, TRAINERS } from '../brand'

const origin = 'https://prototypes-telebots.vercel.app'

export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SportsOrganization',
        '@id': `${origin}/muaythai#org`,
        name: BRAND.name,
        alternateName: 'Kyiv Muaythai Federation',
        url: `${origin}/muaythai`,
        sport: 'Muaythai',
        email: BRAND.email,
        telephone: BRAND.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: BRAND.address,
          addressLocality: 'Київ',
          postalCode: '02002',
          addressCountry: 'UA',
        },
        memberOf: {
          '@type': 'SportsOrganization',
          name: 'IFMA — International Federation of Muaythai Associations',
        },
      },
      ...TRAINERS.map((t) => ({
        '@type': 'Person',
        name: t.name,
        jobTitle: t.role,
        worksFor: { '@type': 'SportsOrganization', name: t.club },
        affiliation: { '@id': `${origin}/muaythai#org` },
      })),
      ...CLUBS.map((c) => ({
        '@type': ['LocalBusiness', 'SportsActivityLocation'],
        name: c.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: c.address,
          addressLocality: c.district === 'Київська область' ? c.address.split(',')[0] : 'Київ',
          addressRegion: c.district,
          addressCountry: 'UA',
        },
        geo: { '@type': 'GeoCoordinates', latitude: c.lat, longitude: c.lng },
        openingHours: c.hours,
        parentOrganization: { '@id': `${origin}/muaythai#org` },
      })),
      ...EVENTS.map((e) => ({
        '@type': 'Event',
        name: e.title,
        startDate: e.startDate,
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: {
          '@type': 'Place',
          name: e.place,
          address: { '@type': 'PostalAddress', addressLocality: 'Київ', addressCountry: 'UA' },
        },
        organizer: { '@id': `${origin}/muaythai#org` },
        sport: 'Muaythai',
      })),
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
