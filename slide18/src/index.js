import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Calculator from './components/Calculator'
import Clock from './components/Clock'
import EmojiChange from './components/EmojiChange';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <EmojiChange />
    <Calculator />
    <Clock />
  </React.StrictMode>
);

