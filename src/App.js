import React from 'react';
// imprt react-router-dom     `
import { Route, Routes } from 'react-router-dom';

// import pages
import Home from './Pages/Home'
import ProductsDetails from './Pages/ProductsDetails'
// imprt components
import CartItems from './Component/CartItems'
import Footer from './Component/Footer'
import Header from './Component/Header'
import Hero from './Component/Hero'
import Products from './Component/Products'
import Sidebar from './Component/Sidebar'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductsDetails />} />
      </Routes>
      <Sidebar />
      <Footer />
    </div>
  );
};

export default App;