import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import EmojiChange from './components/EmojiChange';
import { EmojiContext, EmojiProvider } from "./context/EmojiContext";
import Clock from './components/Clock'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EmojiProvider> {/* usually we set the context provider at a high level so that all children can use it */}
      <App />
      <EmojiChange />
      <Clock />
    </EmojiProvider>
  </React.StrictMode>
);

