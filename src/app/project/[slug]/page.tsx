'use client'
import { Suspense } from 'react'
import { WindowSizeProvider } from '../../../app/contexts/WindowSizeContext'
import GalleryPage from '../../Gallerypage/GalleryPage'
import { I18nextProvider } from 'react-i18next'
import i18next from '../../i18n/translations/i18next'
import { GoogleDataProvider } from '@/app/contexts/GoogleDataContext'
import { useSyncLanguageWithQuery } from '@/app/components/languageSync'
export default function GalleryOfProject() {
useSyncLanguageWithQuery()
  return (
    <Suspense>
        <GoogleDataProvider>
          <WindowSizeProvider>
            <I18nextProvider i18n={i18next}>
              
              <GalleryPage />
            </I18nextProvider>
          </WindowSizeProvider>
        </GoogleDataProvider>
    </Suspense>
  )
}
