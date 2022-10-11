import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartContextProvider>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>  
        </BrowserRouter>
    </CartContextProvider>
);
