import type { ReactNode } from 'react';

interface ICardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

/**
 * 通用卡片组件
 */
const Card = ({ children, className = '', hover = false }: ICardProps) => {
  const baseStyles = 'bg-white rounded-lg shadow-md overflow-hidden';
  const hoverStyles = hover ? 'transition-transform duration-200 hover:scale-105 hover:shadow-lg' : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
