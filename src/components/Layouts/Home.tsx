import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';
import { User } from '@supabase/supabase-js';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

interface HomeLayoutProps {
  className?: string
  isHomePage?: boolean
  isUserLoggedIn?: User | null;
}

const HomeLayout: FC<PropsWithChildren<HomeLayoutProps>> = ({
  className,
  isHomePage = false,
  isUserLoggedIn,
  children
}) => {
  return (
    <>
      <Nav isUserLoggedIn={isUserLoggedIn} isHomePage={isHomePage} />
      <main className={cn('flex flex-col min-h-screen w-full mx-auto"', className)}>{children}</main>
      <Footer isHomePage={isHomePage} />
    </>
  );
}

export default HomeLayout;