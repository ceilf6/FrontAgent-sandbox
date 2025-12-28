import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../utils/mockData'
import { useCartStore } from '../stores/useCartStore'

export default function ProductDetails() {
    const { id } = useParams()
    const product = products.find(p => p.id === id)
    const add = useCartStore(s => s.add)

    if (!product) {
        return <div className="max-w-5xl mx-auto px-4 py-8">未找到商品</div>
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 h-80 bg-gray-100 flex items-center justify-center">图片</div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-semibold">{product.title}</h2>
                    <p className="mt-2 text-gray-600">{product.description}</p>
                    <div className="mt-4 text-xl font-bold">¥{product.price}</div>
                    <div className="mt-6">
                        <button onClick={() => add(product)} className="px-4 py-2 bg-blue-600 text-white rounded">加入购物车</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
