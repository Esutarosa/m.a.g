import ActiveLink from '@/components/Common/ActiveLink/ActiveLink';
import type { FC, HTMLAttributeAnchorTarget, PropsWithChildren } from 'react';

type NavItemType = 'nav' | 'footer';

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
    <ActiveLink>

    </ActiveLink>
  )
}