import type { FC } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps { className?: string }

const Logo: FC<LogoProps> = ({ className, ...props }) => {
  return (
    <Link
      href='/'
      className={cn(
        'flex items-center gap-2 text-lg text-foreground font-bold leading-none',
        className
      )}
      {...props}
    >
      M.A.G
    </Link>
  );
}

export default Logo;