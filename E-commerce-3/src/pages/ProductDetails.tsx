import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../utils/mockData'
import useCartStore from '../stores/useCartStore'

export default function ProductDetails(): JSX.Element {
    const { id } = useParams()
    const product = products.find((p) => p.id === id)
    const add = useCartStore((s) => s.add)

    if (!product) {
        return <div className="p-8">未找到商品</div>
    }

    return (
        <main className="max-w-4xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img src={product.image} alt={product.name} className="w-full object-contain" />
                <div>
                    <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                    <p className="text-xl text-indigo-600 mb-4">¥{product.price}</p>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <button
                        onClick={() => add(product)}
                        className="bg-indigo-600 text-white px-4 py-2 rounded"
                    >
                        加入购物车
                    </button>
                </div>
            </div>
        </main>
    )
}
