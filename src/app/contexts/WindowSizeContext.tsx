// WindowSizeContext.tsx
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

type WindowSize = {
  windowWidth: number
  windowHeight: number
  clientWidth: number
  scrollSize: number
  divWidth: number
}

const WindowSizeContext = createContext<WindowSize | null>(null)

export const WindowSizeProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [size, setSize] = useState<WindowSize>({
    windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
    clientWidth:
      typeof document !== 'undefined'
        ? document.documentElement.clientWidth
        : 0,
    windowHeight: typeof window !== 'undefined' ? window.innerHeight : 0,
    scrollSize: 15,
    divWidth: undefined,
  })

  const handleResize = useCallback(() => {
    setSize({
      windowWidth: window?.innerWidth,
      windowHeight: window?.innerHeight,
      clientWidth: document.documentElement?.clientWidth,
      scrollSize: window.innerWidth - document.querySelector('div')?.offsetWidth,
      divWidth: document.querySelector('div')?.offsetWidth,
    })
  }, [setSize])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [handleResize])
  useEffect(() => {
    // console.log(document.querySelector('div').clientWidth)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])
  console.log(size.scrollSize, size.divWidth, size.windowWidth)
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
