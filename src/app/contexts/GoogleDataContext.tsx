'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

const GoogleDataContext = createContext({
  projects: { images: { projects: [] }, table: [] }, 
  loading: true,
  error: null,
})

// Переменные для кэширования данных проектов
let cachedProjectsData = null
let lastFetchTime = 0
const CACHE_LIFETIME = 5 * 60 * 1000 


export const GoogleDataProvider = ({ children }) => {
  const [projects, setProjects] = useState({
    images: { projects: [] }, 
    table: [],
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadProjects() {
      const currentTime = Date.now()

      if (cachedProjectsData && currentTime - lastFetchTime < CACHE_LIFETIME) {
        console.log('Using cached data.'); 
        setProjects(cachedProjectsData); 
        setLoading(false);
        return;
      }

      try {
        setLoading(true)
        setError(null)

        console.log('Fetching new data from /api/googleApis/data...');
        const dataRes = await fetch('/api/googleApis/data'); 
        if (!dataRes.ok) {
          const errorText = await dataRes.text();
          console.error(
            'HTTP error from /api/googleApis/data:', 
            dataRes.status,
            errorText
          );
          throw new Error(
            `HTTP error! status: ${dataRes.status}. Message: ${errorText}`
          );
        }

        const responseTextData = await dataRes.text();

        let data;
        try {
          const parsedData = JSON.parse(responseTextData) 

          console.log('This is parsed data...', parsedData)
          data = {
            images: { projects: parsedData.images.projects }, 
            table: parsedData.table, 
          }
        } catch (jsonError) {
          console.error('JSON parsing error from /api/googleApis/data:', jsonError);
          throw new Error('API returned invalid JSON.');
        }

        if (
          data.images &&
          Array.isArray(data.images.projects) && 
          data.table &&
          Array.isArray(data.table) 
        ) {
          console.log('Setting projects data:', data)
          cachedProjectsData = { ...data } 
          lastFetchTime = currentTime
          setProjects(() => data)
        } else {
          console.warn('Invalid data structure from API:', data)
          cachedProjectsData = { images: { projects: [] }, table: [] }
          setProjects({ images: { projects: [] }, table: [] })
        }
      } catch (err) {
        console.error('General error loading projects:', err)
        setError(err.message)
        cachedProjectsData = null
      } finally {
        setLoading(false)
      }
    }
    loadProjects()
  }, [])

  const contextValue = { projects, loading, error }

  return (
    <GoogleDataContext.Provider value={contextValue}>
      {children}
    </GoogleDataContext.Provider>
  )
}

/**
 * Хук для использования данных проектов из контекста.
 * @returns {{ projects: Object, loading: boolean, error: string | null }}
 */
export const useGoogleData = () => {
  const context = useContext(GoogleDataContext)
  if (context === undefined) {
    throw new Error('useGoogleData must be used within a GoogleDataProvider');
  }
  return context;
};
