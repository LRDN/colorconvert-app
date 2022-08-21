import clsx from 'clsx'
import Logo from '@components/Logo'
import type { FC, HTMLProps } from 'react'
import styles from './Header.module.scss'

type ComponentProps = HTMLProps<HTMLElement>

const Header: FC<ComponentProps> = ({ className, ...props }) => {
  const headerClassName = clsx(className, styles.header)

  return (
    <header className={headerClassName} {...props}>
      <Logo />
      <div className={styles.header__link}>
        by <a href="https://github.com/lrdn">LRDN</a>
      </div>
    </header>
  )
}

export default Header
