import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ReactDOM.render((<App />).document.getElementById("root")); // ← Não funciona dessa forma!
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
