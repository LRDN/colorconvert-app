import type { FC } from 'react'
import { colord } from 'colord'
import { useContext } from 'react'
import Transparency from '@components/Transparency'
import { ColorContext } from '@context/ColorContext'
import ColorAnalysis from '@components/ColorAnalysis'
import styles from './ColorPicker.module.scss'

const ColorPicker: FC = () => {
  const { colors, activeColor } = useContext(ColorContext)
  const hsvColor = colord(colors[activeColor]).alpha(1).toHsv()
  const valueSliderColor = colord({ ...hsvColor, v: 100 }).toHex()
  const alphaSliderColor = colord(hsvColor).toHex()

  return (
    <div className={styles.colorPicker}>
      <div className={styles.colorPicker__wheel}></div>
      <div
        className={styles.colorPicker__slider}
        style={{ color: valueSliderColor }}
      ></div>
      <div
        className={styles.colorPicker__slider}
        style={{ color: alphaSliderColor }}
      >
        <Transparency />
      </div>
      <ColorAnalysis className={styles.colorPicker__analysis} />
    </div>
  )
}

export default ColorPicker
