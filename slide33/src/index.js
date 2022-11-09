import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import EmojiChange from './components/EmojiChange';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <EmojiChange />
  </React.StrictMode>
);

