'use client'
import '../i18n/translations/i18next'
import { Suspense } from 'react'
import { WindowSizeProvider } from '../contexts/WindowSizeContext'

import HomePage from '../homepage/HomePage'
import {
  GoogleDataProvider,
} from '../contexts/GoogleDataContext'
import { useSyncLanguageWithQuery } from '../components/languageSync'


export default function Home() {
  
  useSyncLanguageWithQuery()
  return (
    <Suspense>
      <WindowSizeProvider>
          <GoogleDataProvider>
            <HomePage />
          </GoogleDataProvider>
      </WindowSizeProvider>
    </Suspense>
  )
}
