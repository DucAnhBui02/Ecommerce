import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Register from './components/Register';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<Product />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    );
}

export default App;
