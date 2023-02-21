import Header from '@components/Header'
import Footer from '@components/Footer'
import type { FC, ReactNode } from 'react'
import DisplayNotice from '@components/DisplayNotice'
import styles from './Layout.module.scss'

type ComponentProps = {
  children?: ReactNode
}

const Layout: FC<ComponentProps> = ({ children }) => {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.layout__container}>
          <Header className={styles.layout__header} />
          <main className={styles.layout__body}>{children}</main>
          <Footer className={styles.layout__footer} />
        </div>
      </div>
      <DisplayNotice />
    </>
  )
}

export default Layout
