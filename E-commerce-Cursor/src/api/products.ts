import { apiRequest } from './client';
import type { IProduct } from '@/types';

/**
 * 获取商品列表
 */
export const getProducts = async (params?: {
  category?: string;
  page?: number;
  limit?: number;
}): Promise<IProduct[]> => {
  const searchParams = new URLSearchParams();
  if (params?.category) searchParams.set('category', params.category);
  if (params?.page) searchParams.set('page', params.page.toString());
  if (params?.limit) searchParams.set('limit', params.limit.toString());

  return apiRequest<IProduct[]>(
    `products?${searchParams.toString()}`
  );
};

/**
 * 获取商品详情
 */
export const getProductById = async (id: string): Promise<IProduct> => {
  return apiRequest<IProduct>(`products/${id}`);
};

/**
 * 搜索商品
 */
export const searchProducts = async (keyword: string): Promise<IProduct[]> => {
  return apiRequest<IProduct[]>(`products/search?q=${encodeURIComponent(keyword)}`);
};
