/**
 * 格式化价格
 * @param price 价格数值
 * @returns 格式化后的价格字符串
 */
export const formatPrice = (price: number): string => {
  return `¥${price.toFixed(2)}`;
};

/**
 * 计算折扣百分比
 * @param originalPrice 原价
 * @param currentPrice 现价
 * @returns 折扣百分比
 */
export const calculateDiscount = (
  originalPrice: number,
  currentPrice: number
): number => {
  if (originalPrice <= 0) return 0;
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
};

/**
 * 验证是否有库存
 * @param stock 库存数量
 * @param quantity 请求数量
 * @returns 是否有足够库存
 */
export const hasStock = (stock: number, quantity: number): boolean => {
  return stock >= quantity;
};
