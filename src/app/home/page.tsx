export async function generateMetadata({ params }: { params: { lang: string } }) {
  const isUk = params.lang === 'uk'

  return {
    title: isUk
      ? 'Архітектурна компанія – Дизайн інтер’єру та Ремонт в Україні'
      : 'Architectural Company – Interior Design & Renovation in Ukraine',
    description: isUk
      ? 'Архітектурна компанія пропонує професійний дизайн інтер’єру, ремонти та управління проєктами квартир та будинків в Україні.'
      : 'Architectural Company offers professional interior design, renovations, and project management for apartments and houses in Ukraine.',
    openGraph: {
      title: isUk
        ? 'Архітектурна компанія – Дизайн інтер’єру та Ремонт'
        : 'Architectural Company – Interior Design & Renovation',
      description: isUk
        ? 'Перегляньте наші завершені проєкти та надихайтеся!'
        : 'Browse our completed projects and get inspired!',
      url: 'https://architectural-company.vercel.app',
      images: [
        {
          url: 'https://architectural-company.vercel.app/og-image.jpg',
          width: 1200,
          height: 630,
        },
      ],
      type: 'website',
    },
    alternates: {
      canonical: `https://architectural-company.vercel.app/home?lang=${isUk ? 'uk' : 'en'}`,
      languages: {
        en: 'https://architectural-company.vercel.app/home?lang=en',
        uk: 'https://architectural-company.vercel.app/home?lang=uk',
      },
    },
  }
}


import HomeClient from "../components/HomeClient"

export default function Home() {
  return <HomeClient />
}