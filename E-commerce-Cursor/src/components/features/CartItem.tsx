import { useCartStore } from '@/stores/useCartStore';
import Button from '@/components/ui/Button';
import type { ICartItem } from '@/types';

interface ICartItemProps {
  item: ICartItem;
}

/**
 * 购物车商品项组件
 */
const CartItem = ({ item }: ICartItemProps) => {
  const { updateQuantity, removeItem } = useCartStore();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    if (newQuantity > item.product.stock) return;
    updateQuantity(item.product.id, newQuantity);
  };

  const handleRemove = () => {
    removeItem(item.product.id);
  };

  return (
    <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm">
      <img
        src={item.product.image}
        alt={item.product.name}
        className="w-24 h-24 object-cover rounded"
      />

      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {item.product.name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-2">
          {item.product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleQuantityChange(item.quantity - 1)}
              disabled={item.quantity <= 1}
              className="w-8 h-8 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              -
            </button>
            <span className="text-lg font-medium w-8 text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(item.quantity + 1)}
              disabled={item.quantity >= item.product.stock}
              className="w-8 h-8 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              +
            </button>
          </div>

          <div className="text-right">
            <div className="text-xl font-bold text-primary-600">
              ¥{(item.product.price * item.quantity).toFixed(2)}
            </div>
            <Button
              onClick={handleRemove}
              variant="danger"
              size="sm"
              className="mt-2"
            >
              删除
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
