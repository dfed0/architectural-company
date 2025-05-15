'use client'
import Header from '@/Header/page'
import HighlightedSection from './sections/HighlightedSection'
import ImageGallerySection from './sections/ImageGallerySection'
import ServicesSection from './sections/ServicesSection'
import AdditionalInfoSection from './sections/AdditionalInfoSection'
import ClientsWorkSection from './sections/ClientsWorkSection'

export default function Home() {
  return (
    <div className="xl:flex xl:w-[90rem] xl:min-h-[56.25rem] xl:px-[3.5rem] xl:flex-col xl:items-start bg-background ">
      <Header></Header>
      <main className="self-stretch">
        <HighlightedSection />
        <ImageGallerySection />
        <ServicesSection />
        <AdditionalInfoSection />
        <ClientsWorkSection />
      </main>
    </div>
  )
}
