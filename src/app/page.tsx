'use client'
import { useRouter } from 'next/navigation'
import { Suspense, useEffect } from 'react'
import './i18n/translations/i18next'
import { WindowSizeProvider } from './contexts/WindowSizeContext'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/home?lang=en') // или router.push('/') — зависит от задачи
  }, [router])

  return <Suspense><WindowSizeProvider><div></div></WindowSizeProvider></Suspense>
}
