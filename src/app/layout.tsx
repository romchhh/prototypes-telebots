import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Прототипи сайтів — TeleBots',
  description: 'Демо-проєкти TeleBots для презентації клієнтам.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:ital,wght@0,800;0,900;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
