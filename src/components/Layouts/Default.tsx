import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

interface DefaultLayoutProps {
  isHideHeader?: boolean
  isHideFooter?: boolean
  className?: string
}

const DefaultLayout: FC<PropsWithChildren<DefaultLayoutProps>> = ({
  isHideHeader = false,
  isHideFooter = false,
  className,
  children
}) => {
  return (
    <>
      <Nav isHideHeader={isHideHeader} />
      <main className={cn('flex flex-col min-h-screen w-full mx-auto', className)}>{children}</main>
      <Footer isHideFooter={isHideFooter} />
    </>
  );
}

export default DefaultLayout;