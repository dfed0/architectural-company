'use client'
import { useEffect, useState } from 'react'
import { useWindowSize } from '../contexts/WindowSizeContext'
import Header from '../header/Header'
import HighlightedSection from '../sections/HighlightedSection'
import { useSearchParams } from 'next/navigation'
import ImageGalleryProductSection from '../sections/ImageGalleryProductSection'
import AdditionalPhotosSection from '../sections/AdditionalPhotosSection'
import Footer from '../footer/Footer'
import { useTranslation } from 'react-i18next'

export default function GalleryPage() {
  const searchParams = useSearchParams()
  const projectNumber = searchParams.get('project')
  const { t } = useTranslation()
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
      {clientWidth >= 390 && clientWidth < 800 && (
        <div
          className="sm:flex xl:w-[90rem] xl:min-h-[56.25rem] xl:flex-col xl:items-start bg-background"
          style={{
            paddingLeft: `calc(1.25rem + ${(clientWidth - 390) / 2}px)`,
            paddingRight: `calc(1.25rem + ${(clientWidth - 390) / 2}px)`,
          }}
        >
          <Header />
          <main className="self-stretch">
            <HighlightedSection
              title={t(`projects.title_${projectNumber}`)}
              projectNumber={projectNumber}
            />
            <div className="flex flex-col sm:pb-[1.25rem] xl:py-[3.5rem] items-start self-stretch">
              <ImageGalleryProductSection />
              <AdditionalPhotosSection />
            </div>
            <Footer />
          </main>
        </div>
      )}
      {clientWidth >= 800 && clientWidth < 1440 && (
        <div
          className="sm:flex xl:w-[90rem] xl:min-h-[56.25rem] xl:flex-col xl:items-start bg-background"
          style={{
            paddingLeft: `calc(1.25rem + ${(clientWidth - 800) / 2}px)`,
            paddingRight: `calc(1.25rem + ${(clientWidth - 800) / 2}px)`,
          }}
        >
          <Header />
          <main className="self-stretch">
            <HighlightedSection
              title={t(`projects.title_${projectNumber}`)}
              projectNumber={projectNumber}
            />
            <div className="flex flex-col sm:pb-[1.25rem] xl:py-[3.5rem] items-start self-stretch">
              <ImageGalleryProductSection />
              <AdditionalPhotosSection />
            </div>
            <Footer />
          </main>
        </div>
      )}
      {(clientWidth >= 1440 || clientWidth < 390) && (
        <div className="sm:flex xl:w-[90rem] sm:px-[1.25rem]  xl:min-h-[56.25rem] xl:px-[3.5rem] xl:flex-col xl:items-start bg-background ">
          <Header />
          <main className="self-stretch">
            <HighlightedSection
              title={t(`projects.title_${projectNumber}`)}
              projectNumber={projectNumber}
            />
            <div className="flex flex-col sm:pb-[1.25rem] xl:py-[3.5rem] items-start self-stretch">
              <ImageGalleryProductSection />
              <AdditionalPhotosSection />
            </div>
            <Footer />
          </main>
        </div>
      )}
    </>
  )
}
