export interface IProduct {
    id: string
    title: string
    price: number
    description?: string
    image?: string
}

export interface ICartItem {
    product: IProduct
    quantity: number
}
