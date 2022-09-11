import { colord } from 'colord'
import { createContext } from 'react'
import type { FC, ReactNode } from 'react'
import useLocalStorage from '@hooks/useLocalStorage'

type ProviderProps = {
  children?: ReactNode
}

const ColorContext = createContext<Record<string, any>>({})
const ColorProvider: FC<ProviderProps> = ({ children }) => {
  const [activeColor, setActiveColor] = useLocalStorage('activeColor', 0)
  const [colors, setColors] = useLocalStorage('colors', [
    colord('#0055ff').toLchString(),
    ...Array(13).fill(''),
  ])

  return (
    <ColorContext.Provider
      value={{ colors, setColors, activeColor, setActiveColor }}
    >
      {children}
    </ColorContext.Provider>
  )
}

export { ColorContext, ColorProvider }
