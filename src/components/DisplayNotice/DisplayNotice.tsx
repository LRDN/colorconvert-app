import clsx from 'clsx'
import Logo from '@components/Logo'
import { Monitor } from 'react-feather'
import type { FC, HTMLProps } from 'react'
import styles from './DisplayNotice.module.scss'

type ComponentProps = HTMLProps<HTMLDivElement>

const DisplayNotice: FC<ComponentProps> = ({ className, ...props }) => {
  const displayNoticeClassName = clsx(className, styles.displayNotice)

  return (
    <div className={displayNoticeClassName} {...props}>
      <Monitor className={styles.displayNotice__icon} />
      <Logo className={styles.displayNotice__logo} />
      Please open the app on a larger display.
    </div>
  )
}

export default DisplayNotice
