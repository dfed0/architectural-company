'use server'
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

export default async function Home() {
  return (
    <div className="xl:flex xl:w-[90rem] xl:min-h-[56.25rem] xl:px-[3.5rem] xl:flex-col xl:items-start bg-background ">
      <Header></Header>
      <main className="self-stretch">
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
