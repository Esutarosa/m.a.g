'use client';

import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

type ActiveLinkProps = ComponentProps<typeof Link> & {
  allowSubPath?: boolean;
}

const ActiveLink: FC<ActiveLinkProps> = ({
  children,
  allowSubPath = false,
  ...props
}) => {
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  )
}

export default ActiveLink;