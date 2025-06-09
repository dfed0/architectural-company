'use client'
import HighlightedSection from '@/app/sections/HighlightedSection'
import ImageGalleryProductSection from '@/app/sections/ImageGalleryProductSection'
import AdditionalPhotosSection from '@/app/sections/AdditionalPhotosSection'
import Footer from '@/app/footer/page'
import Header from '@/app/header/page'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { WindowSizeProvider } from '@/app/contexts/WindowSizeContext'
// import * as cheerio from 'cheerio'
export default function GalleryOfProject() {
  const searchParams = useSearchParams()
  const projectNumber = searchParams.get('project')
  const { t } = useTranslation()
  return (
    <Suspense>
      <WindowSizeProvider>
        <div className="sm:flex xl:w-[90rem] sm:px-[1.25rem]  xl:min-h-[56.25rem] xl:px-[3.5rem] xl:flex-col xl:items-start bg-background ">
          <Header/>
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
      </WindowSizeProvider>
    </Suspense>
  )
}
