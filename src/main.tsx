import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import '@/shared/assets/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
