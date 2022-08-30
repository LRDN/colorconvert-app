import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-700.css'
import 'normalize.css/normalize.css'
import '@styles/styles.scss'

import type { FC } from 'react'
import Layout from '@components/Layout'
import ColorForm from '@components/ColorForm'
import ColorPicker from '@components/ColorPicker'
import ColorSwatch from '@components/ColorSwatch'
import { ThemeProvider } from '@context/ThemeContext'

const App: FC = () => {
  return (
    <ThemeProvider>
      <Layout>
        <ColorPicker />
        <ColorForm />
        <ColorSwatch />
      </Layout>
    </ThemeProvider>
  )
}

export default App
