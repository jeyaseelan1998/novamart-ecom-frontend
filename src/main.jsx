import { StrictMode } from 'react'
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'
import { ToastContainer } from "react-toastify";

import { store } from './store';
import App from './App.jsx';
import ExceptionHandler from "./ExceptionHandler";

import 'swiper/css';
import './assets/css/global.css';
import './assets/css/font.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExceptionHandler>
      <Provider store={store}>
        <App />
      </Provider>
    </ExceptionHandler>
    <ToastContainer />
  </StrictMode>,
)
