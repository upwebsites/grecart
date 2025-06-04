import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => (
  <div style={{ padding: '20px', fontFamily: 'Arial' }}>
    <h1>Grecart Studio</h1>
    <p>Il sito è online!</p>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)

