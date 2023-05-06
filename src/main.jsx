import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import './sass/main.scss';
import "leaflet/dist/leaflet.css";
import ScrollToTop from "./components/ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <ScrollToTop/>
          <App />
      </BrowserRouter>
  </React.StrictMode>,
)
