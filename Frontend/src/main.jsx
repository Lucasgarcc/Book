import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { GlobalStorage } from './components/Context/ContextGlobal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStorage>
      <BrowserRouter>
        <App /> 
      </BrowserRouter>
    </GlobalStorage>
  </React.StrictMode>
);
