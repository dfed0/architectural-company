'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/home') // или router.push('/') — зависит от задачи
  }, [router])

  return null
}
