import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://architectural-company.vercel.app'),
  title: {
    default: 'Masters100 – Ремонт квартир у Києві',
    template: '%s | Ремонт, Дизайн, Архітектура – Masters100',
  },
  description:
    'Елітний ремонт квартир у Києві з авторським дизайном. Галерея завершених проектів, сучасні інтерʼєри, професійна команда. Понад 100 обʼєктів.',
  keywords: [
    'ремонт квартир',
    'ремонт Київ',
    'ремонт під ключ',
    'дизайн інтерʼєру Київ',
    'євроремонт',
    'архітектор Київ',
    'авторський дизайн',
    'елітний ремонт',
    'ремонт ванної',
    'ремонт кухні',
    'візуалізація інтерʼєру',
    'дизайнер квартири',
    'новобудова',
    'ремонт студії',
    'планування квартири',
    'інтерʼєр лофт',
    'модерн дизайн',
    'ремонт бізнес-класу',
    'архітектурне бюро Київ',
    'ремонт без стресу',
    'якісний ремонт Київ',
    'проекти квартир Київ',
    'Masters100',
    'ремонт візуалізація дизайн Київ',
  ],
  authors: [
    { name: 'Masters100', url: 'https://architectural-company.vercel.app' },
  ],
  creator: 'Masters100',
  publisher: 'Masters100',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: 'https://architectural-company.vercel.app/uk',
    languages: {
      uk: 'https://architectural-company.vercel.app/uk',
      en: 'https://architectural-company.vercel.app/en',
    },
  },
  openGraph: {
    title: 'Masters100 – Преміум ремонт квартир у Києві',
    description:
      '100+ реалізованих проєктів. Дизайн інтерʼєру, архітектурні рішення, ремонт під ключ. Галерея робіт.',
    url: 'https://architectural-company.vercel.app',
    siteName: 'Masters100',
    locale: 'uk_UA',
    type: 'website',
    images: [
      {
        url: 'https://architectural-company.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Masters100 – Приклад ремонту квартири',
      },
    ],
  },
  verification: {
    google: 'LM466ngbgdc7qMgtqV9tf92DuifqCJzHgfzd_ScX8ME',
    other: {
      bing: 'BING_VERIFICATION_EXAMPLE',
      yandex: 'YANDEX_CODE',
      'google-site-verification': 'LM466ngbgdc7qMgtqV9tf92DuifqCJzHgfzd_ScX8ME',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
  },
  category: 'real_estate',
  other: {
    'google-site-verification': 'LM466ngbgdc7qMgtqV9tf92DuifqCJzHgfzd_ScX8ME',
    rating: 'general',
    distribution: 'global',
    'revisit-after': '7 days',
    'theme-color': '#ffffff',
    viewport: 'width=device-width, initial-scale=1.0',
    HandheldFriendly: 'true',
    MobileOptimized: '320',
    'X-UA-Compatible': 'IE=edge',
    referrer: 'origin-when-cross-origin',
    'content-language': 'uk',
    'Content-Type': 'text/html; charset=utf-8',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="sm:[font-size:var(--font-fluid-sm)] md:[font-size:var(--font-fluid-md)] xl:[font-size:var(--font-fluid-xl)]"
    >
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
