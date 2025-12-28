import React from 'react'
import { useCartStore } from '../stores/useCartStore'

export default function Cart() {
    const items = useCartStore(s => s.items)
    const remove = useCartStore(s => s.remove)
    const total = useCartStore(s => s.total)

    if (items.length === 0) {
        return <div className="max-w-5xl mx-auto px-4 py-8">购物车为空</div>
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <h2 className="text-xl font-semibold mb-4">购物车</h2>
            <div className="space-y-4">
                {items.map(i => (
                    <div key={i.product.id} className="p-4 bg-white border rounded flex items-center justify-between">
                        <div>
                            <div className="font-medium">{i.product.title}</div>
                            <div className="text-sm text-gray-500">数量: {i.quantity}</div>
                        </div>
                        <div className="text-right">
                            <div>¥{i.product.price * i.quantity}</div>
                            <button onClick={() => remove(i.product.id)} className="text-sm text-red-500 mt-2">移除</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 flex items-center justify-between">
                <div className="text-lg font-semibold">总计: ¥{total()}</div>
                <a href="/checkout" className="px-4 py-2 bg-green-600 text-white rounded">去结算</a>
            </div>
        </div>
    )
}
