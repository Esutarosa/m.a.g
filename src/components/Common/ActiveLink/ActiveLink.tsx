'use client';

import Link from 'next/link';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import type { ComponentProps, FC } from 'react';

type ActiveLinkProps = ComponentProps<typeof Link> & {
  activeClassName?: string;
  allowSubPath?: boolean;
}

const ActiveLink: FC<ActiveLinkProps> = ({
  children,
  activeClassName = 'active',
  allowSubPath = false,
  className,
  href = '',
  ...props
}) => {
  const pathname = usePathname();

  const finalClassName = classNames(className, {
    [activeClassName]: allowSubPath
      ? pathname.startsWith(`/${href.toString().split('/')[1]}`)
      : href.toString() === pathname
  });

  return (
    <Link className={finalClassName} href={href} {...props}>
      {children}
    </Link>
  )
}

export default ActiveLink;