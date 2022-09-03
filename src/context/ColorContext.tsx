import { createContext } from 'react'
import type { FC, ReactNode } from 'react'
import useLocalStorage from '@hooks/useLocalStorage'

type ProviderProps = {
  children?: ReactNode
}

const ColorContext = createContext<Record<string, any>>({})
const ColorProvider: FC<ProviderProps> = ({ children }) => {
  const initialColors = ['#0055ff', ...Array(13).fill('')]
  const [colors, setColors] = useLocalStorage('colors', initialColors)
  const [activeColor, setActiveColor] = useLocalStorage('activeColor', 0)

  return (
    <ColorContext.Provider
      value={{ colors, setColors, activeColor, setActiveColor }}
    >
      {children}
    </ColorContext.Provider>
  )
}

export { ColorContext, ColorProvider }
