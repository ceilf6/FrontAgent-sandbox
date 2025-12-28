import { apiRequest } from './client';
import type { IOrder } from '@/types';

interface ICreateOrderParams {
  items: Array<{
    productId: string;
    quantity: number;
  }>;
  addressId: string;
}

/**
 * 创建订单
 */
export const createOrder = async (params: ICreateOrderParams): Promise<IOrder> => {
  return apiRequest<IOrder>('orders', {
    method: 'POST',
    body: JSON.stringify(params),
  });
};

/**
 * 获取用户订单列表
 */
export const getOrders = async (): Promise<IOrder[]> => {
  return apiRequest<IOrder[]>('orders');
};

/**
 * 获取订单详情
 */
export const getOrderById = async (id: string): Promise<IOrder> => {
  return apiRequest<IOrder>(`orders/${id}`);
};
