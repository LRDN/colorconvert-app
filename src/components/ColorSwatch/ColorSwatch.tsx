import clsx from 'clsx'
import { colord } from 'colord'
import { useContext } from 'react'
import { Plus, X } from 'react-feather'
import type { FC, FormEvent } from 'react'
import type { Color } from '@context/ColorContext'
import Transparency from '@components/Transparency'
import { ColorContext } from '@context/ColorContext'
import styles from './ColorSwatch.module.scss'

const ColorSwatch: FC = () => {
  const { colors, setColors, activeColor, setActiveColor, getPreviousColor } =
    useContext(ColorContext)

  return (
    <div className={styles.colorSwatch}>
      {colors.map((color: string, index: number) => {
        const isActiveColor = index === activeColor
        const hasClearButton = color && !!index && isActiveColor
        const itemStyle = { color: color && colord(color).toHex() }
        const itemClassName = clsx(styles.colorSwatch__item, {
          [styles['colorSwatch__item--active']]: isActiveColor,
        })

        const handleItemClick = () => {
          if (!color) {
            setColors((colors: Color[]) => {
              const hueStep = index * (360 / colors.length)
              colors[index] = colord(colors[0]!).rotate(hueStep).rgba
              return [...colors]
            })
          }

          setActiveColor(index)
        }

        const handleClearClick = (event: FormEvent<HTMLSpanElement>) => {
          setActiveColor(getPreviousColor())
          setColors((colors: Color[]) => {
            colors[index] = null
            return [...colors]
          })

          event.stopPropagation()
        }

        return (
          <div
            className={itemClassName}
            onClick={handleItemClick}
            style={itemStyle}
            key={index}
          >
            {color ? (
              <Transparency className={styles.colorSwatch__transparency} />
            ) : (
              <Plus className={styles.colorSwatch__plusIcon} />
            )}
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
