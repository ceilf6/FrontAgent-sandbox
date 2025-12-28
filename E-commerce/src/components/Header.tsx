import React from 'react'
import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import { useCartStore } from '../stores/useCartStore'

export default function Header() {
    const items = useCartStore(s => s.items)
    const count = useMemo(() => items.reduce((s, i) => s + i.quantity, 0), [items])

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link to="/" className="text-xl font-bold">电商平台</Link>
                <nav className="space-x-4">
                    <Link to="/products" className="text-gray-700">商品</Link>
                    <Link to="/cart" className="text-gray-700">购物车 ({count})</Link>
                </nav>
            </div>
        </header>
    )
}
