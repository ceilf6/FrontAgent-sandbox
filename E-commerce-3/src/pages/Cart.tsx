import React from 'react'
import useCartStore from '../stores/useCartStore'

export default function Cart(): JSX.Element {
    const { items, remove, update, clear } = useCartStore((s) => ({
        items: s.items,
        remove: s.remove,
        update: s.update,
        clear: s.clear
    }))

    const total = items.reduce((acc, cur) => acc + cur.product.price * cur.quantity, 0)

    return (
        <main className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">购物车</h1>
            {items.length === 0 ? (
                <div className="text-gray-600">购物车为空</div>
            ) : (
                <div>
                    <ul className="space-y-4">
                        {items.map((it) => (
                            <li key={it.product.id} className="flex items-center justify-between border p-4 rounded">
                                <div className="flex items-center">
                                    <img src={it.product.image} alt={it.product.name} className="w-20 h-20 object-contain mr-4" />
                                    <div>
                                        <div className="font-medium">{it.product.name}</div>
                                        <div className="text-sm text-gray-500">¥{it.product.price}</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <input
                                        type="number"
                                        min={1}
                                        value={it.quantity}
                                        onChange={(e) => update(it.product.id, Math.max(1, Number(e.target.value)))}
                                        className="w-16 border rounded px-2 py-1"
                                    />
                                    <button onClick={() => remove(it.product.id)} className="text-red-600">移除</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 flex items-center justify-between">
                        <div className="font-bold">合计：¥{total}</div>
                        <div className="space-x-2">
                            <button onClick={() => clear()} className="px-4 py-2 border rounded">清空</button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}
