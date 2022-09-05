import clsx from 'clsx'
import { useContext } from 'react'
import type { FC, HTMLProps } from 'react'
import analyzeColor from '@helpers/analyzeColor'
import { ColorContext } from '@context/ColorContext'
import styles from './ColorAnalysis.module.scss'

type ComponentProps = HTMLProps<HTMLDivElement>

const ColorAnalysis: FC<ComponentProps> = ({ className, ...props }) => {
  const colorAnalysisClassName = clsx(className, styles.colorAnalysis)
  const { colors, activeColor } = useContext(ColorContext)
  const analyzedColor = analyzeColor(colors[activeColor])

  return (
    <div className={colorAnalysisClassName} {...props}>
      {Object.entries(analyzedColor).map(([name, value]) => (
        <div className={styles.colorAnalysis__item} key={name}>
          <div className={styles.colorAnalysis__label}>
            {name[0].toUpperCase() + name.slice(1)}
          </div>
          <div className={styles.colorAnalysis__value}>{value}</div>
        </div>
      ))}
    </div>
  )
}

export default ColorAnalysis
