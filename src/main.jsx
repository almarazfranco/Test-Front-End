import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import MainApp from './components/MainApp';
import './css/index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  // </React.StrictMode>
);
