import './index.css';
import App from './App.jsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root') || document.body).render(
  <StrictMode>
    <App />
  </StrictMode>
);
