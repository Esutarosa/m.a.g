'use client';

import type { FC, PropsWithChildren } from 'react';

import { Nav } from '@/components/nav';

import { Footer } from '@/components/footer';

import { cn } from '@/utils/cn';

interface LayoutProps extends PropsWithChildren {
  isHideHeader?: boolean;
  isHideFooter?: boolean;
  className?: string;
}

const Layout: FC<LayoutProps> = ({
  isHideHeader,
  isHideFooter,
  className,
  children
}) => {
  return (
    <>
      <Nav isHideNav={isHideHeader} />
      <main className={cn(
        'min-h-screen min-w-[220px]',
        className
      )}>
        {children}
      </main>
      <Footer isHideFooter={isHideFooter} />
    </>
  );
}

export default Layout;