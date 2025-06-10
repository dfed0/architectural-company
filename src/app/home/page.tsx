'use client'
// import AdditionalInfoSection from '@/app/sections/AdditionalInfoSection'
// import ClientsWorkSection from '@/app/sections/ClientsWorkSection'
// // import ContactUsSection from '@/app/sections/ContactUsSection'
// import HighlightedSection from '@/app/sections/HighlightedSection'
// import ImageGallerySection from '@/app/sections/ImageGallerySection'
// import ServicesSection from '@/app/sections/ServicesSection'
// import Footer from '@/app/footer/page'
// import Header from '@/app/header/page'

import '../i18n/translations/i18next'
import { Suspense } from 'react'
import { WindowSizeProvider } from '../contexts/WindowSizeContext'
import HomePage from '../homepage/HomePage'
export default function Home() {
  return (
    <Suspense>
      <WindowSizeProvider>
        <HomePage />
      </WindowSizeProvider>
    </Suspense>
  )
}
