import Link from 'next/link';
import clsx from 'clsx';
import { ReactNode } from 'react';

const variantStyles = {
  primary:
    'bg-black dark:bg-white text-white dark:text-black hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white',
  secondary:
    'bg-white dark:bg-black text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black'
};

const sizeStyles = {
  xs: 'rounded px-2.5 py-1.5 text-xs',
  sm: 'rounded-md px-3 py-2 text-sm leading-4',
  md: 'rounded-md px-4 py-2 text-sm',
  lg: 'rounded-md px-4 py-2 text-base',
  xl: 'rounded-md px-6 py-3 text-base'
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  href,
  ...props
}: {
  type: 'button' | 'submit' | 'reset';
  href?: string;
  variant?: 'primary' | 'secondary';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children: ReactNode;
}) {
  className = clsx(
    'inline-flex items-center border border-1 border-black dark:border-white font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  );
}
