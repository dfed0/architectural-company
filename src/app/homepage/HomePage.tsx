'use client'
import { useEffect, useState } from 'react'
import { useWindowSize } from '../contexts/WindowSizeContext'
import Footer from '../components/Footer'
import Header from '../header/Header'
import AdditionalInfoSection from '../sections/AdditionalInfoSection'
import ClientsWorkSection from '../sections/ClientsWorkSection'
import HighlightedSection from '../sections/HighlightedSection'
import ImageGallerySection from '../sections/ImageGallerySection'
import ServicesSection from '../sections/ServicesSection'
import { useSyncLanguageWithQuery } from '../components/languageSync'

export default function HomePage() {
  const { clientWidth } = useWindowSize()
  const [mounted, setMounted] = useState(false)
  useSyncLanguageWithQuery()
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="bg-[#fff] fixed left-[0vw] right-[0vw] top-[0vh] bottom-[0vh]"></div>
    )
  }

  return (
    <>
      {clientWidth >= 390 && clientWidth < 800 && (
        <div
          className="sm:flex xl:w-[90rem] xl:min-h-[56.25rem] xl:px-[3.5rem] sm:flex-col sm:items-start md:items-center md:content-center xl:items-start bg-background md:w-[50rem]"
          style={{
            paddingLeft: `calc(1.25rem + ${(clientWidth - 390) / 2}px)`,
            paddingRight: `calc(1.25rem + ${(clientWidth - 390) / 2}px)`,
          }}
        >
          <Header></Header>
          <main className="self-stretch w-[100%]">
            <HighlightedSection page="home" />
            <section className="py-[1.5rem] sm:pb-[4.25rem] md:pb-[1.5rem] flex flex-col self-stretch items-start">
              <ImageGallerySection />
              <ServicesSection />
              <AdditionalInfoSection />
            </section>
            <ClientsWorkSection />
            <Footer />
          </main>
        </div>
      )}
      {clientWidth >= 800 && clientWidth < 1440 && (
        <div
          className="sm:flex xl:w-[90rem] xl:min-h-[56.25rem] xl:px-[3.5rem] sm:flex-col sm:items-start md:items-center md:content-center xl:items-start bg-background "
          style={{
            paddingLeft: `calc(1.25rem + ${(clientWidth - 800) / 2}px)`,
            paddingRight: `calc(1.25rem + ${(clientWidth - 800) / 2}px + 15px)`,
            width: `calc(50rem + ${clientWidth - 800}px)`,
          }}
        >
          <Header></Header>
          <main className="self-stretch w-[100%]">
            <HighlightedSection page="home" />
            <section className="py-[1.5rem] sm:pb-[4.25rem] md:pb-[1.5rem] flex flex-col self-stretch items-start">
              <ImageGallerySection />
              <ServicesSection />
              <AdditionalInfoSection />
            </section>
            <ClientsWorkSection />
            <Footer />
          </main>
        </div>
      )}
      {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
      {(clientWidth >= 1440 || clientWidth < 390) && (
        <div className="sm:flex xl:w-[90rem] xl:min-h-[56.25rem] xl:px-[3.5rem] sm:flex-col sm:items-start md:items-center md:content-center xl:items-start bg-background md:w-[50rem] sm:px-[1.25rem]">
          <Header></Header>
          <main className="self-stretch w-[100%]">
            <HighlightedSection page="home" />
            <section className="flex flex-col self-stretch items-start">
              <ImageGallerySection />
              <ServicesSection />
              <AdditionalInfoSection />
            </section>
            <ClientsWorkSection />
            <Footer />
          </main>
        </div>
      )}
      {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
      {/* <div className="sm:hidden xl:w-[90rem] xl:min-h-[56.25rem] xl:px-[3.5rem] md:w-[50rem] sm:px-[1.25rem] "></div> */}
    </>
  )
}
