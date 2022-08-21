import clsx from 'clsx'
import type { FC, HTMLProps } from 'react'
import styles from './Footer.module.scss'

type ComponentProps = HTMLProps<HTMLElement>

const Footer: FC<ComponentProps> = ({ className, ...props }) => {
  const footerClassName = clsx(className, styles.footer)

  return (
    <footer className={footerClassName} {...props}>
      <div className={styles.footer__attribution}>
        Built using <a href="https://github.com/vitejs/vite">Vite</a>
      </div>
    </footer>
  )
}

export default Footer
