import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';  // Ensure this path is correct based on your structure
// import './assets/styles/global.css';  // Ensure this path is correct based on your structure

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
