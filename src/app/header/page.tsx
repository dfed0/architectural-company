'use client'

import { Suspense } from 'react'
import HeaderComponent from '../components/Header'

// import i18next from '../a'

export default function Header() {
  return (
    <Suspense>
      <HeaderComponent />
    </Suspense>
  )
}
