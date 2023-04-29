import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/App'
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/cards">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
