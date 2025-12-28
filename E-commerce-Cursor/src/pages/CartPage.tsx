import { useNavigate } from 'react-router-dom';
import { useCartStore } from '@/stores/useCartStore';
import CartItem from '@/components/features/CartItem';
import Button from '@/components/ui/Button';

/**
 * 购物车页面
 */
const CartPage = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCartStore();

  const total = getTotalPrice();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container-custom py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">购物车</h1>
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">购物车是空的</p>
            <Button onClick={() => navigate('/')}>去购物</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">购物车</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-4">订单摘要</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>商品数量</span>
                  <span>{items.length}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>商品总计</span>
                  <span>¥{total.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-xl font-bold">
                  <span>总计</span>
                  <span className="text-primary-600">¥{total.toFixed(2)}</span>
                </div>
              </div>

              <Button onClick={handleCheckout} className="w-full mb-3" size="lg">
                去结算
              </Button>

              <Button
                onClick={clearCart}
                variant="outline"
                className="w-full"
              >
                清空购物车
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
