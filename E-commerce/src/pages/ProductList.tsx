import React from 'react'
import ProductCard from '../components/ui/ProductCard'
import { products } from '../utils/mockData'
import { useCartStore } from '../stores/useCartStore'

export default function ProductList() {
    const add = useCartStore(s => s.add)

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <h2 className="text-xl font-semibold mb-4">商品列表</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map(p => (
                    <ProductCard key={p.id} product={p} onAdd={add} />
                ))}
            </div>
        </div>
    )
}
