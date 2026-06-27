import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from "react-toastify";

import App from './App.jsx';
import ExceptionHandler from "./ExceptionHandler";

import 'swiper/css';
import './assets/css/global.css';
import './assets/css/font.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExceptionHandler>
      <App />
    </ExceptionHandler>
    <ToastContainer />
  </StrictMode>,
)
