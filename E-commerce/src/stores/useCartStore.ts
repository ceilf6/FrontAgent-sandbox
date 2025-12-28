import create from 'zustand'
import type { ICartItem, IProduct } from '../types'

interface CartState {
    items: ICartItem[]
    add: (p: IProduct, qty?: number) => void
    remove: (productId: string) => void
    clear: () => void
    total: () => number
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    add: (p, qty = 1) => {
        const items = get().items.slice()
        const idx = items.findIndex(i => i.product.id === p.id)
        if (idx >= 0) {
            items[idx] = { ...items[idx], quantity: items[idx].quantity + qty }
        } else {
            items.push({ product: p, quantity: qty })
        }
        set({ items })
    },
    remove: (productId) => {
        set({ items: get().items.filter(i => i.product.id !== productId) })
    },
    clear: () => set({ items: [] }),
    total: () => get().items.reduce((s, i) => s + i.product.price * i.quantity, 0)
}))
