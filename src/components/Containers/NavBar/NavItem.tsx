import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import type { FC, HTMLAttributeAnchorTarget, PropsWithChildren } from 'react';

import ActiveLink from '@/components/Common/ActiveLink/ActiveLink';
import { cn } from '@/util/cn';

type NavItemType = 'nav' | 'defult';

type NavItemProps = {
  href: string;
  type?: NavItemType;
  className?: string;
  target?: HTMLAttributeAnchorTarget | undefined;
};

const NavItem: FC<PropsWithChildren<NavItemProps>> = ({
  children,
  href = '',
  type = 'nav',
  className,
  target,
}) => {
  return (
    <ActiveLink
      href={href}
      allowSubPath={href.startsWith('/')}
      activeClassName='text-accent/40'
      className={cn(className, 'inline-flex items-center gap-2 px-3 py-2')}
      target={target}
    >
      <span className='font-medium'>
        {children}
      </span>

      {((type === 'nav' && href.startsWith('http')) || target === '_blank') && (
        <ArrowUpRightIcon className='size-3 text-foreground' />
      )}
    </ActiveLink>
  )
};

export default NavItem;