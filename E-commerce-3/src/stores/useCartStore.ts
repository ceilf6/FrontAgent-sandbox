import create from 'zustand'
import type { IProduct } from '../types'

type CartItem = {
    product: IProduct
    quantity: number
}

type CartState = {
    items: CartItem[]
    add: (product: IProduct, qty?: number) => void
    remove: (productId: string) => void
    update: (productId: string, qty: number) => void
    clear: () => void
}

const useCartStore = create<CartState>((set) => ({
    items: [],
    add: (product, qty = 1) =>
        set((state) => {
            const idx = state.items.findIndex((i) => i.product.id === product.id)
            if (idx >= 0) {
                const items = state.items.slice()
                items[idx] = { product, quantity: items[idx].quantity + qty }
                return { items }
            }
            return { items: [...state.items, { product, quantity: qty }] }
        }),
    remove: (productId) => set((s) => ({ items: s.items.filter((i) => i.product.id !== productId) })),
    update: (productId, qty) =>
        set((s) => ({ items: s.items.map((i) => (i.product.id === productId ? { ...i, quantity: qty } : i)) })),
    clear: () => set(() => ({ items: [] }))
}))

export default useCartStore
