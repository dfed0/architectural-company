// WindowSizeContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react'

type WindowSize = {
  windowWidth: number
  windowHeight: number
}

const WindowSizeContext = createContext<WindowSize | null>(null)

export const WindowSizeProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [size, setSize] = useState<WindowSize>({
    windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
    windowHeight: typeof window !== 'undefined' ? window.innerHeight : 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <WindowSizeContext.Provider value={size}>
      {children}
    </WindowSizeContext.Provider>
  )
}

export const useWindowSize = () => {
  const context = useContext(WindowSizeContext)
  if (!context) {
    throw new Error('useWindowSize must be used within a WindowSizeProvider')
  }
  return context
}
