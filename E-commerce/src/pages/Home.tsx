import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">欢迎来到电商平台</h1>
            <p className="mb-6 text-gray-600">浏览精选商品并加入购物车下单。</p>
            <Link to="/products" className="inline-block px-4 py-2 bg-blue-600 text-white rounded">开始购物</Link>
        </div>
    )
}
