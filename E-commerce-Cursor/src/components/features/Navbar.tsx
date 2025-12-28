import { Link } from 'react-router-dom';
import { useCartStore } from '@/stores/useCartStore';

/**
 * 顶部导航栏组件
 */
const Navbar = () => {
  const getTotalItems = useCartStore((state) => state.getTotalItems);
  const cartItemsCount = getTotalItems();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary-600">
            E-Shop
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              首页
            </Link>
            <Link
              to="/orders"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              我的订单
            </Link>
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-primary-600 transition-colors"
            >
              购物车
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
