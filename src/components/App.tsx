import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-700.css'
import 'normalize.css/normalize.css'
import '@styles/styles.scss'

import type { FC } from 'react'
import Layout from '@components/Layout'
import { ThemeProvider } from '@context/ThemeContext'

const App: FC = () => {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  )
}

export default App
