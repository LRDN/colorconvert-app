import clsx from 'clsx'
import { colord } from 'colord'
import { X } from 'react-feather'
import { useContext } from 'react'
import type { FC, FormEvent } from 'react'
import Transparency from '@components/Transparency'
import { ColorContext } from '@context/ColorContext'
import styles from './ColorSwatch.module.scss'

const ColorSwatch: FC = () => {
  const { colors, setColors, activeColor, setActiveColor } =
    useContext(ColorContext)

  const getPreviousColor = () => {
    for (let i = activeColor - 1; i >= 0; i--) {
      if (colors[i]) return i
    }
  }

  return (
    <div className={styles.colorSwatch}>
      {colors.map((color: string, index: number) => {
        const isActiveColor = index === activeColor
        const hasClearButton = color && !!index && isActiveColor
        const itemClassName = clsx(styles.colorSwatch__item, {
          [styles['colorSwatch__item--active']]: isActiveColor,
        })

        const handleItemClick = () => {
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

        const handleClearClick = (event: FormEvent<HTMLSpanElement>) => {
          setActiveColor(getPreviousColor())
          setColors((colors: string[]) => {
            colors[index] = ''
            return [...colors]
          })

          event.stopPropagation()
        }

        return (
          <div
            className={itemClassName}
            onClick={handleItemClick}
            style={{ color }}
            key={index}
          >
            {color && <Transparency />}
            {hasClearButton && (
              <span
                className={styles.colorSwatch__clearButton}
                onClick={handleClearClick}
              >
                <X />
              </span>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default ColorSwatch
