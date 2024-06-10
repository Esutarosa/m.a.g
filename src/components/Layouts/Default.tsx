import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';
import { User } from '@supabase/supabase-js';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

interface DefaultLayoutProps {
  isHideHeader?: boolean
  isHideFooter?: boolean
  className?: string
  isUserLoggedIn?: User | null;
}

const DefaultLayout: FC<PropsWithChildren<DefaultLayoutProps>> = ({
  isHideHeader = false,
  isHideFooter = false,
  className,
  isUserLoggedIn,
  children
}) => {
  return (
    <>
      <Nav isUserLoggedIn={isUserLoggedIn} isHideHeader={isHideHeader} />
      <main className={cn('flex flex-col min-h-screen w-full mx-auto', className)}>{children}</main>
      <Footer isHideFooter={isHideFooter} />
    </>
  );
}

export default DefaultLayout;