import { useOrders } from '@/hooks/useOrders';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

/**
 * 订单列表页
 */
const OrdersPage = () => {
  const { orders, loading, error } = useOrders();

  const getStatusBadge = (status: string) => {
    const variants: Record<string, 'primary' | 'success' | 'warning' | 'danger'> = {
      pending: 'warning',
      paid: 'primary',
      shipped: 'primary',
      delivered: 'success',
      cancelled: 'danger',
    };

    const labels: Record<string, string> = {
      pending: '待支付',
      paid: '已支付',
      shipped: '已发货',
      delivered: '已完成',
      cancelled: '已取消',
    };

    return (
      <Badge variant={variants[status] || 'primary'}>
        {labels[status] || status}
      </Badge>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container-custom py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">我的订单</h1>
          <div className="text-center py-12">
            <p className="text-gray-600">加载中...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container-custom py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">我的订单</h1>
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container-custom py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">我的订单</h1>
          <Card className="text-center py-12">
            <p className="text-gray-600">暂无订单</p>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">我的订单</h1>

        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-gray-600">订单号: {order.id}</p>
                  <p className="text-sm text-gray-600">
                    下单时间: {new Date(order.createdAt).toLocaleString('zh-CN')}
                  </p>
                </div>
                {getStatusBadge(order.status)}
              </div>

              <div className="space-y-3 mb-4">
                {order.items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 pb-3 border-b last:border-b-0"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        数量: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary-600">
                        ¥{(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 border-t">
                <div>
                  <p className="text-sm text-gray-600">
                    配送地址: {order.shippingAddress.province}{' '}
                    {order.shippingAddress.city} {order.shippingAddress.district}{' '}
                    {order.shippingAddress.detail}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">订单总额</p>
                  <p className="text-2xl font-bold text-primary-600">
                    ¥{order.total.toFixed(2)}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
