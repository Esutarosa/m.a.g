import type { FC, LinkHTMLAttributes } from 'react';

import Link from 'next/link';

import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

import { cn } from '@/utils/cn';

interface LinkWithArrowProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  href: string;
  target?: string;
}

const LinkWithArrow: FC<LinkWithArrowProps> = ({
  href,
  content,
  target,
  className,
  ...props
}) => {
  const isExternal = target === '_blank';

  return (
    <Link href={href} target={target} className={cn(
      'group/link flex overflow-hidden'
    )} {...props}>
      <span className={cn(
        'group group-hover/link:bg-primary/10 group-hover/link:text-primary group-hover/link:decoration-primary',
        'underline decoration-dotted dotted-underline decoration-foreground/30 underline-offset-4',
        'transition-colors',
        className
      )}>
        {content}
      </span>
      {isExternal && (
        <span className='relative w-2 h-2 ml-[.025rem] overflow-hidden flex items-center justify-center text-primary'>
          <ArrowUpRightIcon className='absolute w-2 h-2 inset-0 sm:transition-transform sm:translate-x-0 sm:translate-y-0 sm:group-hover/link:translate-x-6 group-hover/link:-translate-y-6' />
          <ArrowUpRightIcon className='absolute w-2 h-2 inset-0 sm:transition-transform sm:-translate-x-6 sm:translate-y-6 sm:group-hover/link:translate-x-0 group-hover/link:-translate-y-0' />
        </span>
      )}
    </Link>
  );
}

export default LinkWithArrow;