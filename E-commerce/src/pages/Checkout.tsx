import React from 'react'
import { useCartStore } from '../stores/useCartStore'

export default function Checkout() {
    const items = useCartStore(s => s.items)
    const clear = useCartStore(s => s.clear)

    const handlePlaceOrder = () => {
        clear()
        alert('下单成功（演示）')
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <h2 className="text-xl font-semibold mb-4">结算</h2>
            <div className="bg-white p-4 border rounded mb-4">
                {items.map(i => (
                    <div key={i.product.id} className="flex items-center justify-between py-2">
                        <div>{i.product.title} x{i.quantity}</div>
                        <div>¥{i.product.price * i.quantity}</div>
                    </div>
                ))}
            </div>
            <button onClick={handlePlaceOrder} className="px-4 py-2 bg-blue-600 text-white rounded">确认下单</button>
        </div>
    )
}
