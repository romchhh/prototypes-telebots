export const BRAND = {
  name: 'Grand Cru',
  nameLower: 'grandcru',
  tagline: 'Bespoke Land Rover Defenders, restored and reimagined by hand in Scotland.',
  description:
    'Grand Cru builds bespoke Land Rover Defenders by hand in Scotland.',
  email: 'info@grandcru.vehicles',
  site: 'grandcru.vehicles',
  location: 'Scotland',
  heroYear: '1973',
  since: '2009',
  heroImage: '/images/grand-cru/hero.png',
} as const

export const NAV = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
] as const

export const PROJECTS = [
  {
    meta: 'Commission · 2024',
    title: 'The Highland Defender',
    paragraphs: [
      'A 110 built for long Scottish winters and longer Scottish summers. Matte olive paint, black steel wheels, a walnut and tweed interior woven to order. The brief was simple: a vehicle that belonged on a Highland track at dawn and outside a hotel in Edinburgh by evening.',
      'Six months from first conversation to keys in hand. Chassis stripped, galvanised, rebuilt. TD5 engine refreshed. Every panel aligned by eye, not machine.',
    ],
    images: [
      {
        src: 'https://images.squarespace-cdn.com/content/v1/5d581a2dc66cb10001cff270/1776972979730-32C9ZDYEESG0UCXJIHI6/9A5A8420.jpg',
        alt: 'Highland Defender exterior',
      },
      {
        src: 'https://images.squarespace-cdn.com/content/v1/5d581a2dc66cb10001cff270/1776973007027-QV5ASPANG7QEHVZWTKFN/9A5A8430.jpg',
        alt: 'Highland Defender detail',
      },
      {
        src: 'https://images.squarespace-cdn.com/content/v1/5d581a2dc66cb10001cff270/1776972988628-3693ED4PRWRJWRXGWT34/9A5A8433.jpg',
        alt: 'Highland Defender interior',
      },
    ],
  },
  {
    meta: 'Commission · 2023',
    title: 'The Coastal Build',
    paragraphs: [
      'Commissioned for a client who spends half the year on the Atlantic coast. Sand-resistant finishes, a teak rear deck, and an interior in pale leather and navy tartan — Registered Tartan no. 14107, woven exclusively for Grand Cru by Lochcarron of Scotland.',
      'The vehicle had to feel effortless at 20 mph on a beach track and entirely at home parked outside a harbour restaurant. That tension — rugged and refined — is where Grand Cru does its best work.',
    ],
    images: [
      {
        src: 'https://images.squarespace-cdn.com/content/v1/5d581a2dc66cb10001cff270/1766757801539-L7BJ5IDNG4GN8Q2U6S42/9A5A1817.JPG',
        alt: 'Coastal Defender',
      },
      {
        src: 'https://images.squarespace-cdn.com/content/v1/5d581a2dc66cb10001cff270/1766757801426-1N5RT0JSZLVS8SGHUEA5/9A5A4873.JPG',
        alt: 'Coastal Defender side view',
      },
      {
        src: 'https://images.squarespace-cdn.com/content/v1/5d581a2dc66cb10001cff270/1766757689272-RGHCLEP1UHKZ8HL32NTH/9A5A6596.jpg',
        alt: 'Coastal Defender rear',
      },
    ],
  },
  {
    meta: 'Notable commission',
    title: 'Trusted by those who know',
    paragraphs: [
      '"Then I found Graham Mann, this incredible craftsman based in Scotland, who\'s a dab hand at revamping them and to an incredibly high standard." — Country Life Magazine',
      'David Beckham is among the clients who have commissioned a bespoke Defender through Grand Cru. But the majority of our work is for people who simply want the best Defender that can be built — and are prepared to wait for it.',
    ],
    images: [
      {
        src: 'https://images.squarespace-cdn.com/content/v1/5d581a2dc66cb10001cff270/1716819541571-TL1LFDF1GB0523V2XUFB/IMG_9972.JPG',
        alt: 'Workshop finish',
      },
      {
        src: 'https://images.squarespace-cdn.com/content/v1/5d581a2dc66cb10001cff270/1716819553442-GCDXN5Z8QG5IKP47C669/IMG_9845.JPG',
        alt: 'Interior craftsmanship',
      },
      {
        src: 'https://images.squarespace-cdn.com/content/v1/5d581a2dc66cb10001cff270/1716819577018-ZBC4TPM2OERXCUM2A28H/9A5A9978.JPG',
        alt: 'Detail work',
      },
    ],
  },
] as const

export const PROCESS_STEPS = [
  {
    title: 'Assessment',
    body: 'Every vehicle arrives with a history. We document chassis condition, previous repairs and original specification before a single panel is removed.',
  },
  {
    title: 'Stripping & chassis',
    body: 'The body comes off. The chassis is media-blasted, inspected, repaired and hot-dip galvanised. This is the foundation everything else depends on.',
  },
  {
    title: 'Body & paint',
    body: 'Panels are aligned by hand. Gaps are set by eye. Paint is applied in our own booth — not outsourced, not rushed.',
  },
  {
    title: 'Interior & trim',
    body: 'Walnut consoles, tweed seat panels, tartan headlinings, teak load floors — made in-house or by the same Scottish suppliers we have used for fifteen years.',
  },
  {
    title: 'Final assembly',
    body: 'Engine, drivetrain, electrics, weather seals. Then a road test on Scottish roads before the vehicle is signed off.',
  },
] as const

export const PROCESS_IMAGES = [
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5d581a2dc66cb10001cff270/1674053941708-RHIHH60WVVVE8RMYGSS3/IMG_7518.JPG',
    alt: 'Chassis restoration',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5d581a2dc66cb10001cff270/1654020606090-NSUZ44ROX05LN7J5WUDN/IMG_2034.JPG',
    alt: 'Interior trim work',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5d581a2dc66cb10001cff270/1654020611560-K8W9B90MLMAOB3Q5IH18/IMG_2012.JPG',
    alt: 'Walnut console',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5d581a2dc66cb10001cff270/1676902553124-GS30S12Y6F831U6DFCGJ/IMG_2577.JPG',
    alt: 'Seat upholstery',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5d581a2dc66cb10001cff270/1654020627322-5F2QCSIY7T1AQBG56ZG9/IMG_2042.JPG',
    alt: 'Dashboard detail',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5d581a2dc66cb10001cff270/1674054309158-CWZSQT5XJPC2YNL8FSNJ/IMG_9410.jpg',
    alt: 'Bodywork in progress',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5d581a2dc66cb10001cff270/1762184835894-3KRSPJG48OR3CQRQP80Y/9A5A0205.JPG',
    alt: 'Tartan interior',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5d581a2dc66cb10001cff270/1674054312573-7OQEX87WO70BO4IZD9A4/IMG_9435.JPG',
    alt: 'Paint and finish',
  },
] as const
