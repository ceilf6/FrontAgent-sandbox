import type { ReactNode } from 'react';

interface IBadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'danger';
  className?: string;
}

/**
 * 徽章组件
 */
const Badge = ({ children, variant = 'primary', className = '' }: IBadgeProps) => {
  const baseStyles = 'inline-block px-2 py-1 text-xs font-semibold rounded-full';

  const variantStyles = {
    primary: 'bg-primary-100 text-primary-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
