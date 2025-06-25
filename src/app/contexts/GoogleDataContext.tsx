'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

// Создаем контекст для данных проектов
// ИСПРАВЛЕНО: projects теперь ожидается как массив
const GoogleDataContext = createContext({
  projects: { images: { projects: [] }, table: [] }, // Инициализируем images.projects как пустой массив
  loading: true,
  error: null,
})

// Переменные для кэширования данных проектов
let cachedProjectsData = null
let lastFetchTime = 0
const CACHE_LIFETIME = 5 * 60 * 1000 // Кэш живет 5 минут

// Функцию sortProjectsByOrder (если нужна) лучше определить вне провайдера
// или внутри него, но с useCallback, если она не меняется.
// const sortProjectsByOrder = (projects) => {
//   if (!Array.isArray(projects)) {
//     console.warn('sortProjectsByOrder: projects is not an array', projects);
//     return [];
//   }
//   const sorted = [...projects].sort((a, b) => {
//     const orderA = parseFloat(a.order) || Infinity;
//     const orderB = parseFloat(b.order) || Infinity;
//     console.log('Comparing:', a.order, b.order);
//     return orderA - orderB; // Сортировка по возрастанию
//   });
//   console.log('Sorted result:', sorted);
//   return sorted;
// }

export const GoogleDataProvider = ({ children }) => {
  console.log('Provider rendered'); // Лог для подтверждения рендера провайдера
  const [projects, setProjects] = useState({
    images: { projects: [] }, // ИСПРАВЛЕНО: projects теперь массив
    table: [],
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadProjects() {
      const currentTime = Date.now()

      // Проверка кэша
      if (cachedProjectsData && currentTime - lastFetchTime < CACHE_LIFETIME) {
        console.log('Using cached data.'); // Лог для кэша
        setProjects(cachedProjectsData); // Используем закэшированные данные
        setLoading(false);
        return;
      }

      try {
        setLoading(true)
        setError(null)

        // ИСПРАВЛЕНО: Изменен URL API на правильный путь /api/googleApis/data
        console.log('Fetching new data from /api/googleApis/data...');
        const dataRes = await fetch('/api/googleApis/data'); // <-- ИСПРАВЛЕНО ЗДЕСЬ
        if (!dataRes.ok) {
          const errorText = await dataRes.text();
          console.error(
            'HTTP error from /api/googleApis/data:', // <-- ИСПРАВЛЕНО ЗДЕСЬ
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
          const parsedData = JSON.parse(responseTextData) // Правильная переменная для парсинга

          console.log('This is parsed data...', parsedData)
          data = {
            images: { projects: parsedData.images.projects }, // Используем parsedData
            table: parsedData.table, // Используем parsedData
          }
        } catch (jsonError) {
          // ИСПРАВЛЕНО: Сообщение об ошибке парсинга JSON
          console.error('JSON parsing error from /api/googleApis/data:', jsonError);
          throw new Error('API returned invalid JSON.');
        }

        // ИСПРАВЛЕНО: Проверка структуры данных
        // Теперь images.projects ожидается как МАССИВ.
        if (
          data.images &&
          Array.isArray(data.images.projects) && // КОРРЕКТНАЯ ПРОВЕРКА: images.projects - это массив
          data.table &&
          Array.isArray(data.table) // table остается массивом объектов
        ) {
          console.log('Setting projects data:', data)
          cachedProjectsData = { ...data } // Кэшируем данные
          lastFetchTime = currentTime
          setProjects(() => data)
        } else {
          console.warn('Invalid data structure from API:', data)
          // ИСПРАВЛЕНО: projects теперь массив и при некорректных данных
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
    // ИСПРАВЛЕНО: Сообщение об ошибке для правильного провайдера
    throw new Error('useGoogleData must be used within a GoogleDataProvider');
  }
  return context;
};
