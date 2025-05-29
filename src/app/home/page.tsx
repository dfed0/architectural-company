'use client'
import AdditionalInfoSection from '@/app/sections/AdditionalInfoSection'
import ClientsWorkSection from '@/app/sections/ClientsWorkSection'
// import ContactUsSection from '@/app/sections/ContactUsSection'
import HighlightedSection from '@/app/sections/HighlightedSection'
import ImageGallerySection from '@/app/sections/ImageGallerySection'
import ServicesSection from '@/app/sections/ServicesSection'
import Footer from '@/app/footer/page'
import Header from '@/app/header/page'
// import Image from 'next/image'
// import Link from 'next/link'
import '../i18n/translations/i18next'
export default function Home() {
  return (
    <div className="sm:flex xl:w-[90rem] xl:min-h-[56.25rem] xl:px-[3.5rem] sm:flex-col sm:items-start md:items-center md:content-center xl:items-start bg-background md:w-[50rem] sm:px-[1.25rem] ">
      <Header></Header>
      <main className="self-stretch w-[100%]">
        <HighlightedSection />
        <section className="py-[1.5rem] flex flex-col self-stretch items-start">
          <ImageGallerySection />
          <ServicesSection />
          <AdditionalInfoSection />
        </section>
        <ClientsWorkSection />
        {/* <ContactUsSection /> */}
        <Footer />
      </main>
    </div>
  )
}
