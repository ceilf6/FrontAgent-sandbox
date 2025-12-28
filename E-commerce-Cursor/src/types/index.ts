/**
 * 商品类型定义
 */
export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  stock: number;
  rating: number;
  reviewCount: number;
}

/**
 * 购物车商品项类型
 */
export interface ICartItem {
  product: IProduct;
  quantity: number;
}

/**
 * 用户类型定义
 */
export interface IUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

/**
 * 订单状态
 */
export type TOrderStatus = 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';

/**
 * 订单类型定义
 */
export interface IOrder {
  id: string;
  userId: string;
  items: ICartItem[];
  total: number;
  status: TOrderStatus;
  createdAt: string;
  shippingAddress: IAddress;
}

/**
 * 地址类型定义
 */
export interface IAddress {
  id: string;
  name: string;
  phone: string;
  province: string;
  city: string;
  district: string;
  detail: string;
  isDefault: boolean;
}

/**
 * API 响应类型
 */
export interface IApiResponse<T> {
  code: number;
  message: string;
  data: T;
}
