import clsx from 'clsx'
import { colord } from 'colord'
import { Copy } from 'react-feather'
import type { FC, FormEvent } from 'react'
import matchColor from '@helpers/matchColor'
import convertColor from '@helpers/convertColor'
import type { Color } from '@context/ColorContext'
import { ColorContext } from '@context/ColorContext'
import { useContext, useRef, useState } from 'react'
import type { ColorModel } from '@helpers/matchColor'
import styles from './ColorForm.module.scss'

const ColorForm: FC = () => {
  const { colors, setColors, activeColor } = useContext(ColorContext)
  const convertedColor = convertColor(colors[activeColor])
  const [focusedInput, setFocusedInput] = useState(null)
  const inputRefs = useRef<Record<string, any>>({})

  return (
    <div className={styles.colorForm}>
      {Object.entries(convertedColor).map((colorEntry) => {
        const [model, color] = colorEntry as [ColorModel, string]
        const isFocusedInput = focusedInput === inputRefs.current[model]
        const fieldClassName = clsx(styles.colorForm__field, {
          [styles['colorForm__field--focus']]: isFocusedInput,
        })

        const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
          const { value } = event.currentTarget

          setColors((colors: Color[]) => {
            if (matchColor(value, model) && colord(value).isValid()) {
              colors[activeColor] = colord(value).rgba
            }

            return [...colors]
          })
        }

        const handleCopyClick = (event: FormEvent<HTMLSpanElement>) => {
          const copyColor = color.replace(/^~/, '')
          navigator.clipboard.writeText(copyColor)
          event.stopPropagation()
        }

        return (
          <div
            key={model}
            className={fieldClassName}
            onClick={() => inputRefs.current[model].focus()}
          >
            <span className={styles.colorForm__label}>
              {model.toUpperCase()}
            </span>
            <input
              className={styles.colorForm__input}
              ref={(ref) => (inputRefs.current[model] = ref)}
              value={isFocusedInput ? inputRefs.current[model].value : color}
              onFocus={() => setFocusedInput(inputRefs.current[model])}
              onBlur={() => setFocusedInput(null)}
              onChange={handleInputChange}
              spellCheck={false}
              type="text"
            />
            <span
              className={styles.colorForm__copyButton}
              onClick={handleCopyClick}
            >
              <Copy />
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default ColorForm
