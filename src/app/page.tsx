'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import './i18n/translations/i18next'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/home?lang=en') // или router.push('/') — зависит от задачи
  }, [router])

  return null
}
