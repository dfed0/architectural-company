'use client'

import i18next from './translations/i18next'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const runsOnServerSide = typeof window === 'undefined'

export const useT = function useT(ns, options) {
  const lng = useParams()?.lng

  if (typeof lng !== 'string') {
    throw new Error('useT is only available inside /app/[lng]')
  }

  // Стейт для активного языка, вызывается всегда (хуки вне условий)
  const [activeLng, setActiveLng] = useState(i18next.resolvedLanguage)

  // Если SSR, меняем язык синхронно (вне хуков, т.к. SSR)
  if (runsOnServerSide && i18next.resolvedLanguage !== lng) {
    i18next.changeLanguage(lng)
  }

  // Этот useEffect следит за изменением activeLng и обновляет стейт при изменении i18next.resolvedLanguage
  useEffect(() => {
    if (activeLng !== i18next.resolvedLanguage) {
      setActiveLng(i18next.resolvedLanguage)
    }
  }, [activeLng])

  // Этот useEffect меняет язык i18next, если lng отличается от текущего языка
  useEffect(() => {
    if (!lng || i18next.resolvedLanguage === lng) return
    i18next.changeLanguage(lng)
  }, [lng])

  return useTranslation(ns, options)
}
