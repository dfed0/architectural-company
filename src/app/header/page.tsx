'use client'

import { Suspense } from 'react'
import HeaderComponent from '../components/Header'


export default function Header() {
  return (
    <Suspense>
      <HeaderComponent />
    </Suspense>
  )
}
