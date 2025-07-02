'use client'
import { useEffect, useState } from 'react'
import { useWindowSize } from '../contexts/WindowSizeContext'
import Header from '../header/Header'
import HighlightedSection from '../sections/HighlightedSection'
import { useSearchParams } from 'next/navigation'
import ImageGalleryProductSection from '../sections/ImageGalleryProductSection'
import AdditionalPhotosSection from '../sections/AdditionalPhotosSection'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'
import ContactUsSection from '../sections/ContactUsSection'
import { useGoogleData } from '../contexts/GoogleDataContext'

export default function GalleryPage() {
  const searchParams = useSearchParams()
  const projectNumber = searchParams.get('project')
  const { projects, loading, error } = useGoogleData()
  const [projectTitle, setProjectTitle] = useState(null)
  const { i18n } = useTranslation()
 
  useEffect(() => {
   
    if (i18n.language === 'en') {
      setProjectTitle(
        () => projects.table.find(el => {
          return el.order === projectNumber})?.titleen
      )
    }

    if (i18n.language === 'uk') {
      setProjectTitle(
        () => projects.table.find(el => el.order === projectNumber)?.titleuk
      )
    }

  }, [projects, projectNumber, i18n.language, projectTitle])

  const { clientWidth } = useWindowSize()
  const [mounted, setMounted] = useState(false)

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
      {!loading && clientWidth >= 320 && clientWidth < 800 && (
        <div
          className="sm:flex xl:w-[90rem] xl:min-h-[56.25rem] xl:flex-col xl:px-[3.5rem] xl:items-start bg-background"
          style={{
            paddingLeft: `calc(1.25rem + ${(clientWidth - 320) / 2}px)`,
            paddingRight: `calc(1.25rem + ${(clientWidth - 320) / 2}px)`,
          }}
        >
          <Header />
          <main className="self-stretch w-full">
            <HighlightedSection
              title={projectTitle}
              projectNumber={projectNumber}
              page="project"
            />
            <section className="flex flex-col sm:pb-[1.25rem] xl:py-[3.5rem] items-start self-stretch">
              <ImageGalleryProductSection />
              <AdditionalPhotosSection />
            </section>
            <div className="pb-[2.5rem]">
              <ContactUsSection />
            </div>
            <Footer />
          </main>
        </div>
      )}
      {!loading && clientWidth >= 800 && clientWidth < 1440 && (
        <div
          className="sm:flex xl:w-[90rem] xl:min-h-[56.25rem] xl:flex-col xl:items-start bg-background"
         style={{
            paddingLeft: `calc(1.25rem + ${(clientWidth - 800) / 2}px)`,
            paddingRight: `calc(1.25rem + ${(clientWidth - 800) / 2}px)`,
          }}
        >
          <Header />
          <main className="self-stretch w-full">
            <HighlightedSection
              title={projectTitle}
              projectNumber={projectNumber}
              page="project"
            />
            <div className="flex flex-col sm:pb-[1.25rem] xl:py-[3.5rem] items-start self-stretch">
              <ImageGalleryProductSection />
              <AdditionalPhotosSection />
            </div>
            <div className="pb-[2.5rem]">
              <ContactUsSection />
            </div>
            <Footer />
          </main>
        </div>
      )}
      {!loading && (clientWidth >= 1440 || clientWidth < 320) && (
        <div className="sm:flex xl:w-[90rem] sm:px-[1.25rem]  xl:min-h-[56.25rem] xl:px-[3.5rem] xl:flex-col xl:items-start bg-background" >
          <Header />
          <main className="self-stretch w-full">
            <HighlightedSection
              title={projectTitle}
              projectNumber={projectNumber}
              page="project"
            />
            <div className="flex flex-col sm:pb-[1.25rem] xl:pb-[0rem] items-start self-stretch">
              <ImageGalleryProductSection />
              <AdditionalPhotosSection />
            </div>
            <div className="pb-[6rem]">
              <ContactUsSection />
            </div>
            <Footer />
          </main>
        </div>
      )}
    </>
  )
}
