import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.jsx'; // Make sure App.jsx is imported correctly, usually just App
import App from './App'; // Import the App component
import '../css/index.css'; // <--- ADJUSTED PATH: Global CSS import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);