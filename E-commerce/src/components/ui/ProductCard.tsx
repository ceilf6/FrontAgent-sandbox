import React from 'react'
import type { IProduct } from '../../types'

interface Props {
    product: IProduct
    onAdd?: (p: IProduct) => void
}

export default function ProductCard({ product, onAdd }: Props) {
    return (
        <div className="border rounded-md p-4 bg-white shadow-sm">
            <div className="h-40 bg-gray-100 flex items-center justify-center mb-4">
                <span className="text-gray-400">图片占位</span>
            </div>
            <h3 className="font-medium">{product.title}</h3>
            <p className="text-sm text-gray-500">{product.description}</p>
            <div className="mt-3 flex items-center justify-between">
                <div className="text-lg font-semibold">¥{product.price}</div>
                <button
                    onClick={() => onAdd?.(product)}
                    className="px-3 py-1 bg-blue-600 text-white rounded"
                >
                    加入购物车
                </button>
            </div>
        </div>
    )
}
