require('./bootstrap');
import { createRoot } from 'react-dom/client'
import { ReactBootcamp } from './ReactBootcamp';
import React from 'react';

export const App = () => {
  return (
    <React.StrictMode>
      <ReactBootcamp />
    </React.StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<App />)