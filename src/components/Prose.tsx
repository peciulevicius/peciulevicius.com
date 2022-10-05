import clsx from 'clsx';

// todo: fix 'any' type
export function Prose({ children, className }: any) {
  return (
    <div className={clsx(className, 'prose dark:prose-invert')}>{children}</div>
  );
}
