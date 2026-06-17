import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx';
import ExceptionHandler from "./ExceptionHandler";

import './assets/css/global.css';
import './assets/css/font.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExceptionHandler>
      <App />
    </ExceptionHandler>
  </StrictMode>,
)
