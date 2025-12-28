import { IProduct } from '../types'
import product1 from '../assets/computer-1.avif'
import product2 from '../assets/gpu-1.avif'
import product3 from '../assets/chair-1.avif'

export const products: IProduct[] = [
    {
        id: 'p1',
        name: '示例笔记本电脑',
        price: 5999,
        description: '轻薄高性能，适合办公与娱乐。',
        image: product1
    },
    {
        id: 'p2',
        name: '示例显卡',
        price: 2999,
        description: '性价比出色的显卡。',
        image: product2
    },
    {
        id: 'p3',
        name: '示例椅子',
        price: 399,
        description: '人体工学设计，舒适耐用。',
        image: product3
    }
]
