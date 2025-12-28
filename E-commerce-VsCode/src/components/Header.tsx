import React from 'react'
import { Link } from 'react-router-dom'
import useCartStore from '../stores/useCartStore'

export default function Header(): JSX.Element {
    const count = useCartStore((s) => s.items.length)

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold text-indigo-600">示例商店</Link>
                <nav className="space-x-4">
                    <Link to="/products" className="text-gray-700">商品</Link>
                    <Link to="/cart" className="text-gray-700">购物车 ({count})</Link>
                </nav>
            </div>
        </header>
    )
}
