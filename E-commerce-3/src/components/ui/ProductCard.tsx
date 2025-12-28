import React from 'react'
import { Link } from 'react-router-dom'
import type { IProduct } from '../../types'

type Props = { product: IProduct }

export default function ProductCard({ product }: Props) {
    return (
        <div className="border rounded-md p-4 flex flex-col">
            <img src={product.image} alt={product.name} className="h-40 object-contain mb-4" />
            <div className="flex-1">
                <h3 className="font-medium text-lg">{product.name}</h3>
                <p className="text-sm text-gray-500">¥{product.price}</p>
            </div>
            <div className="mt-4">
                <Link to={`/product/${product.id}`} className="text-indigo-600 hover:underline">
                    查看详情
                </Link>
            </div>
        </div>
    )
}
