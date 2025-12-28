import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}
