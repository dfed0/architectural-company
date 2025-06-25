'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import i18n from 'i18next'

export function useSyncLanguageWithQuery() {
  const searchParams = useSearchParams()
  const lang = searchParams.get('lang')

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang)
    }
  }, [lang])
}
