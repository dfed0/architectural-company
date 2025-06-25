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
  // const { projects, loading, error } = useProjects()
  // const lastProjects = projects.table.slice(-9)
  // const lastProjectsMainImages = projects.images.projects
  //   .map((project) => project.mainImageUrl)
  //   .slice(-9)
  // const projectsWithMainImg = lastProjects.map((projects, index) => ({
  //   ...projects,
  //   imageUrl: lastProjectsMainImages[index],
  // }))
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
