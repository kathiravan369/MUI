import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import { my } from './Components/Color';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <ThemeProvider theme={my}>
       <App />
       </ThemeProvider>
);

