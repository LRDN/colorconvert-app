import type { FC } from 'react'
import { colord } from 'colord'
import { useContext } from 'react'
import Transparency from '@components/Transparency'
import { ColorContext } from '@context/ColorContext'
import ColorAnalysis from '@components/ColorAnalysis'
import styles from './ColorPicker.module.scss'

const ColorPicker: FC = () => {
  const { colors, activeColor } = useContext(ColorContext)
  const { h, s, v, a } = colord(colors[activeColor]).toHsv()

  const hue = {
    handleStyle: {
      color: colord({ h, s, v: 100, a: 1 }).toHex(),
      top: 50 + (s / 2) * Math.sin((h - 90) * (Math.PI / 180)) + '%',
      left: 50 + (s / 2) * Math.cos((h - 90) * (Math.PI / 180)) + '%',
    },
  }

  const value = {
    sliderStyle: { color: colord({ h, s, v: 100, a: 1 }).toHex() },
    handleStyle: {
      color: colord({ h, s, v, a: 1 }).toHex(),
      top: 100 - v + '%',
    },
  }

  const alpha = {
    sliderStyle: { color: colord({ h, s, v, a: 1 }).toHex() },
    handleStyle: {
      color: colord({ h, s, v, a }).toHex(),
      top: 100 - a * 100 + '%',
    },
  }

  return (
    <div className={styles.colorPicker}>
      <div className={styles.colorPicker__wheel}>
        <div className={styles.colorPicker__handle} style={hue.handleStyle} />
      </div>
      <div className={styles.colorPicker__slider} style={value.sliderStyle}>
        <div className={styles.colorPicker__handle} style={value.handleStyle} />
      </div>
      <div className={styles.colorPicker__slider} style={alpha.sliderStyle}>
        <div className={styles.colorPicker__handle} style={alpha.handleStyle}>
          <Transparency />
        </div>
        <Transparency />
      </div>
      <ColorAnalysis className={styles.colorPicker__analysis} />
    </div>
  )
}

export default ColorPicker
