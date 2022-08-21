import clsx from 'clsx'
import Switch from '@components/Switch'
import { Sun, Moon } from 'react-feather'
import type { FC, HTMLProps } from 'react'
import styles from './Footer.module.scss'

type ComponentProps = HTMLProps<HTMLElement>

const Footer: FC<ComponentProps> = ({ className, ...props }) => {
  const footerClassName = clsx(className, styles.footer)

  return (
    <footer className={footerClassName} {...props}>
      <div className={styles.footer__attribution}>
        Built using <a href="https://github.com/vitejs/vite">Vite</a> and{' '}
        <a href="https://github.com/feathericons/feather">Feather Icons</a>
      </div>
      <Switch
        labelBefore={<Sun className={styles.footer__icon} />}
        labelAfter={<Moon className={styles.footer__icon} />}
      />
    </footer>
  )
}

export default Footer
