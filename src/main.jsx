import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ExceptionHandler from "./ExceptionHandler";

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExceptionHandler>
      <App />
    </ExceptionHandler>
  </StrictMode>,
)
