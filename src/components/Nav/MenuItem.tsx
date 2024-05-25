import type { FC, PropsWithChildren, HTMLAttributeAnchorTarget } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface MenuItemProps {
  href: string;
  className?: string;
  title?: string;
  target?: HTMLAttributeAnchorTarget | undefined;
}

const MenuItem: FC<PropsWithChildren<MenuItemProps>> = ({
  href,
  className,
  title,
  target,
  children,
  ...props
}) => {
  return (
    <Link
      href={href}
      target={target}
      className={cn(
        'flex items-center text-muted-foreground/85 text-sm hover:text-foreground select-none transition gap-3 rounded-md p-2 leading-none no-underline outline-none',
        className
      )}
      {...props}
    >
      {children ?? (
        <div className='flex flex-col justify-center'>
          <div className='flex items-center'>
            <span>{title}</span>
          </div>
        </div>
      )}
    </Link>
  );
}

export default MenuItem;