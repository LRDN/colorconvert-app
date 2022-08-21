import clsx from 'clsx'
import type { FC, HTMLProps, ReactNode } from 'react'
import styles from './Switch.module.scss'

type ComponentProps = HTMLProps<HTMLInputElement> & {
  labelBefore?: ReactNode
  labelAfter?: ReactNode
}

const Switch: FC<ComponentProps> = ({
  labelBefore,
  labelAfter,
  className,
  ...props
}) => {
  const switchClassName = clsx(className, styles.switch)
  const containerClassName = clsx(styles.switch__container, {
    [styles['switch__container--hasLabelBefore']]: labelBefore,
    [styles['switch__container--hasLabelAfter']]: labelAfter,
  })

  return (
    <label className={switchClassName}>
      {labelBefore}
      <span className={containerClassName}>
        <input className={styles.switch__input} type="checkbox" {...props} />
        <span className={styles.switch__handle}></span>
      </span>
      {labelAfter}
    </label>
  )
}

export default Switch
