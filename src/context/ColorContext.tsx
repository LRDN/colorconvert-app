import type { FC, ReactNode } from 'react'
import type { HsvaColor, RgbaColor } from 'colord'
import useLocalStorage from '@hooks/useLocalStorage'
import { createContext, useCallback, useEffect, useState } from 'react'

type ProviderProps = {
  children?: ReactNode
}

export type Color = HsvaColor | RgbaColor | null

const ColorContext = createContext<Record<string, any>>({})
const ColorProvider: FC<ProviderProps> = ({ children }) => {
  const [activeColor, setActiveColor] = useState(0)
  const [colors, setColors] = useLocalStorage('colors', [
    { r: 0, g: 85, b: 255, a: 1 },
    ...Array(13).fill(null),
  ])

  const getPreviousColor = useCallback(() => {
    for (let i = activeColor - 1; i >= 0; i--) {
      if (colors[i]) return i
    }
  }, [colors, activeColor])

  useEffect(() => {
    if (!colors[activeColor]) {
      setActiveColor(getPreviousColor()!)
    }
  }, [colors, activeColor, getPreviousColor])

  return (
    <ColorContext.Provider
      value={{ colors, setColors, activeColor, setActiveColor }}
    >
      {children}
    </ColorContext.Provider>
  )
}

export { ColorContext, ColorProvider }
