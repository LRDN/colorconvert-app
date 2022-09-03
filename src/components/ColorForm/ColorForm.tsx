import clsx from 'clsx'
import { colord } from 'colord'
import type { FC, FormEvent } from 'react'
import colorModels from '@helpers/colorModels'
import { ColorContext } from '@context/ColorContext'
import { useContext, useRef, useState } from 'react'
import styles from './ColorForm.module.scss'

const ColorForm: FC = () => {
  const { colors, setColors, activeColor } = useContext(ColorContext)
  const [focusedInput, setFocusedInput] = useState(null)
  const inputRefs = useRef<Record<string, any>>({})

  return (
    <div className={styles.colorForm}>
      {Object.entries(colorModels).map(([id, model]) => {
        const isFocusedInput = focusedInput === inputRefs.current[id]
        const fieldClassName = clsx(styles.colorForm__field, {
          [styles['colorForm__field--focus']]: isFocusedInput,
        })

        const handleChange = (event: FormEvent<HTMLInputElement>) => {
          const { value } = event.currentTarget

          if (value.match(model.regex)) {
            setColors((colors: string[]) => {
              if (colord(value).isValid()) {
                colors[activeColor] = colord(value).toHex()
              }

              return [...colors]
            })
          }
        }

        const value = isFocusedInput
          ? inputRefs.current[id].value
          : model.converter(colors[activeColor])

        return (
          <div
            key={id}
            className={fieldClassName}
            onClick={() => inputRefs.current[id].focus()}
          >
            <span className={styles.colorForm__label}>{id.toUpperCase()}</span>
            <input
              className={styles.colorForm__input}
              ref={(ref) => (inputRefs.current[id] = ref)}
              onFocus={() => setFocusedInput(inputRefs.current[id])}
              onBlur={() => setFocusedInput(null)}
              onChange={handleChange}
              value={value}
              type="text"
            />
          </div>
        )
      })}
    </div>
  )
}

export default ColorForm
