import Link from 'next/link';
import clsx from 'clsx';
import { ReactNode } from 'react';

const variantStyles = {
  primary:
    'bg-slate-900 hover:bg-slate-700 dark:bg-sky-500 dark:hover:bg-sky-400 text-white',
  secondary:
    'text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20 bg-white dark:bg-slate-800 dark:text-white dark:hover:bg-slate-800'
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
  onClick?: () => void;
}) {
  className = clsx(
    'transition-all inline-flex duration-300 items-center border-black font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white',
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
