import type { FC, ReactNode } from 'react'
import useLocalStorage from '@hooks/useLocalStorage'
import { createContext, useEffect, useState } from 'react'

type ProviderProps = {
  children?: ReactNode
}

const ThemeContext = createContext<Record<string, any>>({})
const ThemeProvider: FC<ProviderProps> = ({ children }) => {
  const themeQuery = matchMedia('(prefers-color-scheme: dark)')
  const [systemTheme, setSystemTheme] = useState(
    themeQuery.matches ? 'dark' : 'light',
  )

  const [storageTheme, setStorageTheme] = useLocalStorage('theme')
  const [theme, _setTheme] = useState(storageTheme || systemTheme)

  const setTheme = (newTheme: string) => {
    setStorageTheme(newTheme)
    _setTheme(newTheme)
  }

  useEffect(() => {
    const handleChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? 'dark' : 'light')
    }

    themeQuery.addEventListener('change', handleChange)
    return () => themeQuery.removeEventListener('change', handleChange)
  }, [themeQuery])

  useEffect(() => {
    const rootElement = document.documentElement
    rootElement.style.colorScheme = theme
    rootElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    _setTheme(storageTheme || systemTheme)
  }, [storageTheme, systemTheme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
