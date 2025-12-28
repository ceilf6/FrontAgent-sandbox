import { Link } from 'react-router-dom';
import { useCartStore } from '@/stores/useCartStore';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import type { IProduct } from '@/types';

interface IProductCardProps {
  product: IProduct;
}

/**
 * 商品卡片组件
 */
const ProductCard = ({ product }: IProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product, 1);
  };

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card hover className="flex flex-col h-full">
      <Link to={`/products/${product.id}`}>
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          {discountPercentage > 0 && (
            <div className="absolute top-2 right-2">
              <Badge variant="danger">{discountPercentage}% OFF</Badge>
            </div>
          )}
          {product.stock < 10 && product.stock > 0 && (
            <div className="absolute top-2 left-2">
              <Badge variant="warning">库存紧张</Badge>
            </div>
          )}
          {product.stock === 0 && (
            <div className="absolute top-2 left-2">
              <Badge variant="danger">已售罄</Badge>
            </div>
          )}
        </div>
      </Link>

      <div className="p-4 flex-1 flex flex-col">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-primary-600 transition-colors line-clamp-2 mb-2">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
          {product.description}
        </p>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-yellow-500">★</span>
          <span className="text-sm text-gray-700">{product.rating.toFixed(1)}</span>
          <span className="text-sm text-gray-500">({product.reviewCount})</span>
        </div>

        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-2xl font-bold text-primary-600">
              ¥{product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ¥{product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <Button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="w-full"
          >
            {product.stock === 0 ? '已售罄' : '加入购物车'}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
