import { format, formatDistanceToNow, parseISO } from 'date-fns';
import { zhCN } from 'date-fns/locale';

/**
 * 格式化日期
 * @param date 日期字符串或 Date 对象
 * @param formatStr 格式化字符串
 * @returns 格式化后的日期字符串
 */
export const formatDate = (
  date: string | Date,
  formatStr = 'yyyy-MM-dd HH:mm:ss'
): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, formatStr, { locale: zhCN });
};

/**
 * 获取相对时间
 * @param date 日期字符串或 Date 对象
 * @returns 相对时间描述
 */
export const getRelativeTime = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return formatDistanceToNow(dateObj, { addSuffix: true, locale: zhCN });
};
