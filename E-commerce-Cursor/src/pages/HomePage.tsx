import { useState } from 'react';
import { useProducts } from '@/hooks/useProducts';
import ProductCard from '@/components/features/ProductCard';
import Input from '@/components/ui/Input';

/**
 * 首页 - 商品列表页
 */
const HomePage = () => {
  const [category, setCategory] = useState<string | undefined>();
  const { products, loading, error } = useProducts({ category });

  const categories = ['全部', '电子产品', '服装', '食品', '图书', '家居'];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">商品列表</h1>

          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat === '全部' ? undefined : cat)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  (cat === '全部' && !category) || category === cat
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <Input
            type="search"
            placeholder="搜索商品..."
            className="max-w-md"
          />
        </div>

        {loading && (
          <div className="text-center py-12">
            <p className="text-gray-600">加载中...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">暂无商品</p>
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
