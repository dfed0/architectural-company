'use client'
import '../i18n/translations/i18next'
import { Suspense } from 'react'
import { WindowSizeProvider } from '../contexts/WindowSizeContext'

import HomePage from '../homepage/HomePage'
import {
  GoogleDataProvider,
} from '../contexts/GoogleDataContext'


export default function Home() {
  
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
