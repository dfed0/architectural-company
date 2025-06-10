'use client'
import { Suspense } from 'react'
import { WindowSizeProvider } from '@/app/contexts/WindowSizeContext'
import GalleryPage from '@/app/gallerypage/GalleryPage'
// import * as cheerio from 'cheerio'
export default function GalleryOfProject() {
  return (
    <Suspense>
      <WindowSizeProvider>
        <GalleryPage />
      </WindowSizeProvider>
    </Suspense>
  )
}
