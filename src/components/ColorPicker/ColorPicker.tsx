import type { FC } from 'react'
import { colord } from 'colord'
import { useContext } from 'react'
import type { HsvaColor } from 'colord'
import Interaction from '@components/Interaction'
import type { Color } from '@context/ColorContext'
import { ColorContext } from '@context/ColorContext'
import ColorAnalysis from '@components/ColorAnalysis'
import type { Position } from '@components/Interaction'
import styles from './ColorPicker.module.scss'

const ColorPicker: FC = () => {
  const { colors, setColors, activeColor } = useContext(ColorContext)
  const { h, s, v, a } = colord(colors[activeColor]).toHsv()

  const setHsvaColor = (color: HsvaColor) => {
    setColors((colors: Color[]) => {
      colors[activeColor] = { ...color, v: color.v || 1e-25 }
      return [...colors]
    })
  }

  const hue = {
    handleWheelMove: ({ top, left }: Position) => {
      const h = 0 - Math.atan2(left - 50, top - 50) / (Math.PI / 180) + 180
      const s = Math.sqrt(Math.pow(top - 50, 2) + Math.pow(left - 50, 2)) * 2
      setHsvaColor({ h, s, v, a })
    },
    handleStyle: {
      color: colord({ h, s, v: 100, a: 1 }).toHex(),
      top: 50 + (s / 2) * Math.sin((h - 90) * (Math.PI / 180)) + '%',
      left: 50 + (s / 2) * Math.cos((h - 90) * (Math.PI / 180)) + '%',
    },
  }

  const value = {
    handleSliderMove: ({ top }: Position) => {
      setHsvaColor({ h, s, v: 100 - top, a })
    },
    sliderStyle: { color: colord({ h, s, v: 100, a: 1 }).toHex() },
    handleStyle: {
      color: colord({ h, s, v, a: 1 }).toHex(),
      top: 100 - v + '%',
    },
  }

  const alpha = {
    handleSliderMove: ({ top }: Position) => {
      setHsvaColor({ h, s, v, a: (100 - top) / 100 })
    },
    sliderStyle: { color: colord({ h, s, v, a: 1 }).toHex() },
    handleStyle: {
      color: colord({ h, s, v, a }).toHex(),
      top: 100 - a * 100 + '%',
    },
  }

  return (
    <div className={styles.colorPicker}>
      <Interaction
        className={styles.colorPicker__wheel}
        onMove={hue.handleWheelMove}
        clampPosition={false}
      >
        <div className={styles.colorPicker__handle} style={hue.handleStyle} />
      </Interaction>
      <Interaction
        className={styles.colorPicker__slider}
        onMove={value.handleSliderMove}
        style={value.sliderStyle}
      >
        <div className={styles.colorPicker__handle} style={value.handleStyle} />
      </Interaction>
      <Interaction
        className={styles.colorPicker__slider}
        onMove={alpha.handleSliderMove}
        style={alpha.sliderStyle}
      >
        <div className={styles.colorPicker__handle} style={alpha.handleStyle} />
      </Interaction>
      <ColorAnalysis className={styles.colorPicker__analysis} />
    </div>
  )
}

export default ColorPicker
