import { useState, useEffect } from 'react';
import { getProducts, searchProducts } from '@/api/products';
import type { IProduct } from '@/types';

/**
 * 商品数据获取 Hook
 */
export const useProducts = (params?: {
  category?: string;
  page?: number;
  limit?: number;
}) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getProducts(params);
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [params?.category, params?.page, params?.limit]);

  return { products, loading, error };
};

/**
 * 商品搜索 Hook
 */
export const useProductSearch = () => {
  const [results, setResults] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = async (keyword: string) => {
    if (!keyword.trim()) {
      setResults([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await searchProducts(keyword);
      setResults(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed');
    } finally {
      setLoading(false);
    }
  };

  return { results, loading, error, search };
};
