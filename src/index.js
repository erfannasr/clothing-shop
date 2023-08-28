import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import ProducProvider from './Contexts/ProductsContext';

import SidebarProvider from './Contexts/SidebarContext';

import CartProvider from './Contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SidebarProvider>
        <CartProvider>
            <ProducProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ProducProvider>
            </CartProvider>
    </SidebarProvider>
);
