import React from 'react'
import { products } from '../utils/mockData'
import ProductCard from '../components/ui/ProductCard'

export default function Home(): JSX.Element {
    return (
        <main className="max-w-5xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">欢迎来到示例商店</h1>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </section>
        </main>
    )
}
