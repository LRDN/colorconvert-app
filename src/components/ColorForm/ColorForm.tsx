import clsx from 'clsx'
import { colord } from 'colord'
import type { FC, FormEvent } from 'react'
import colorModels from '@helpers/colorModels'
import { useEffect, useRef, useState } from 'react'
import styles from './ColorForm.module.scss'

const ColorForm: FC = () => {
  const [color, setColor] = useState('#0055ff')
  const [inputValue, setInputValue] = useState('')
  const [focusedInput, setFocusedInput] = useState(null)
  const inputRefs = useRef<Record<string, any>>({})

  useEffect(() => {
    if (colord(inputValue).isValid()) setColor(inputValue)
  }, [inputValue])

  return (
    <div className={styles.colorForm}>
      {Object.entries(colorModels).map(([id, model]) => {
        const isFocusedInput = focusedInput === inputRefs.current[id]
        const fieldClassName = clsx(styles.colorForm__field, {
          [styles['colorForm__field--focus']]: isFocusedInput,
        })

        const handleChange = (event: FormEvent<HTMLInputElement>) => {
          const matchesModel = event.currentTarget.value.match(model.regex)
          setInputValue(matchesModel ? event.currentTarget.value : '')
        }

        const value = isFocusedInput
          ? inputRefs.current[id].value
          : model.converter(color)

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
