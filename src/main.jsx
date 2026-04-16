import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Porfolio.jsx'
import { SITE_TITLE } from './siteMeta.js'

document.title = SITE_TITLE

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
