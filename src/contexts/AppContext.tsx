import { createContext, ReactNode, useState, useEffect } from 'react'

interface AppContextValue {
  theme: 'light' | 'dark'
  toggleTheme: () => void
  isDrawerOpen: boolean
  toggleDrawer: () => void
}

export const AppContext = createContext<AppContextValue | undefined>(undefined)

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const toggleTheme = () => setTheme((current) => (current === 'light' ? 'dark' : 'light'))

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev)

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isDrawerOpen])

  return (
    <AppContext.Provider value={{ theme, toggleTheme, isDrawerOpen, toggleDrawer }}>
      {children}
    </AppContext.Provider>
  )
}
