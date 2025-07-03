'use client'
import '../i18n/translations/i18next'
import { Suspense } from 'react'
import { WindowSizeProvider } from '../contexts/WindowSizeContext'

import HomePage from '../homepage/HomePage'
import { GoogleDataProvider } from '../contexts/GoogleDataContext'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'

export default function Home() {
  const { t, i18n } = useTranslation()
  return (
    <>
      <Head>
        <title>{t('home.seo.title')}</title>
        <meta name="description" content={t('home.seo.description')} />
        <meta name="keywords" content={t('home.seo.keywords')} />
        <meta property="og:title" content={t('home.seo.title')} />
        <meta property="og:description" content={t('home.seo.description')} />
        <meta
          property="og:locale"
          content={i18n.language === 'uk' ? 'uk_UA' : 'en_US'}
        />
        <html lang={i18n.language} />
      </Head>
      <Suspense>
        <WindowSizeProvider>
          <GoogleDataProvider>
            <HomePage />
          </GoogleDataProvider>
        </WindowSizeProvider>
      </Suspense>
    </>
  )
}
