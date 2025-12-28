import React from 'react'

export default function Checkout(): JSX.Element {
    return (
        <main className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">结算</h1>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm">收货人</label>
                    <input className="w-full border px-3 py-2 rounded" />
                </div>
                <div>
                    <label className="block text-sm">地址</label>
                    <input className="w-full border px-3 py-2 rounded" />
                </div>
                <div>
                    <label className="block text-sm">联系电话</label>
                    <input className="w-full border px-3 py-2 rounded" />
                </div>
                <div>
                    <button type="button" className="bg-indigo-600 text-white px-4 py-2 rounded">提交订单</button>
                </div>
            </form>
        </main>
    )
}
