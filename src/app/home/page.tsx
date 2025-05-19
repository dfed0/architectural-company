'use server'
import AdditionalInfoSection from '@/app/sections/AdditionalInfoSection'
import ClientsWorkSection from '@/app/sections/ClientsWorkSection'
import ContactUsSection from '@/app/sections/ContactUsSection'
import HighlightedSection from '@/app/sections/HighlightedSection'
import ImageGallerySection from '@/app/sections/ImageGallerySection'
import ServicesSection from '@/app/sections/ServicesSection'
import Footer from '@/Footer/page'
import Header from '@/Header/page'
// import Image from 'next/image'
// import Link from 'next/link'

export default async function Home() {
  return (
    <div className="xl:flex xl:w-[90rem] xl:min-h-[56.25rem] xl:px-[3.5rem] xl:flex-col xl:items-start bg-background ">
      <Header></Header>
      <main className="self-stretch">
        <HighlightedSection />
        <ImageGallerySection />
        <ServicesSection />
        <AdditionalInfoSection />
        <ClientsWorkSection />
        <ContactUsSection />
        <Footer />
      </main>
    </div>
  )
}
