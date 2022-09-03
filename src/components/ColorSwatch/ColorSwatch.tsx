import clsx from 'clsx'
import type { FC } from 'react'
import { colord } from 'colord'
import { useContext } from 'react'
import Transparency from '@components/Transparency'
import { ColorContext } from '@context/ColorContext'
import styles from './ColorSwatch.module.scss'

const ColorSwatch: FC = () => {
  const { colors, setColors, activeColor, setActiveColor } =
    useContext(ColorContext)

  return (
    <div className={styles.colorSwatch}>
      {colors.map((color: string, index: number) => {
        const itemClassName = clsx(styles.colorSwatch__item, {
          [styles['colorSwatch__item--active']]: index === activeColor,
        })

        const handleClick = () => {
          if (!color) {
            setColors((colors: string[]) => {
              const randomHue = colord(colors[0]).hue() + index * 25
              const randomColor = { h: randomHue, s: 75, l: 50 }
              colors[index] = colord(randomColor).toHex()
              return [...colors]
            })
          }

          setActiveColor(index)
        }

        return (
          <div
            className={itemClassName}
            onClick={handleClick}
            style={{ color }}
            key={index}
          >
            {color && <Transparency />}
          </div>
        )
      })}
    </div>
  )
}

export default ColorSwatch
