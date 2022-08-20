import App from 'App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const app = document.getElementById('app')
createRoot(app as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
