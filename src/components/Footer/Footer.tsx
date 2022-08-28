import clsx from 'clsx'
import { useContext } from 'react'
import Switch from '@components/Switch'
import { Sun, Moon } from 'react-feather'
import { ThemeContext } from '@context/ThemeContext'
import type { FC, FormEvent, HTMLProps } from 'react'
import styles from './Footer.module.scss'

type ComponentProps = HTMLProps<HTMLElement>

const Footer: FC<ComponentProps> = ({ className, ...props }) => {
  const footerClassName = clsx(className, styles.footer)
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (event: FormEvent<HTMLInputElement>) => {
    setTheme(event.currentTarget.checked ? 'dark' : 'light')
  }

  return (
    <footer className={footerClassName} {...props}>
      <div className={styles.footer__attribution}>
        Built using <a href="https://github.com/vitejs/vite">Vite</a> and{' '}
        <a href="https://github.com/feathericons/feather">Feather Icons</a>
      </div>
      <Switch
        labelBefore={<Sun className={styles.footer__icon} />}
        labelAfter={<Moon className={styles.footer__icon} />}
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
    </footer>
  )
}

export default Footer
