import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/util/cn';
import Nav from '../Nav';

interface HomeLayoutProps {
  className?: string
  isHomePage?: boolean
}

const HomeLayout: FC<PropsWithChildren<HomeLayoutProps>> = ({
  className,
  isHomePage = false,
  children
}) => {
  return (
    <>
      <Nav isHomePage={isHomePage} />
      <main className={cn('flex flex-col min-h-screen w-full mx-auto"', className)}>{children}</main>
    </>
  );
}

export default HomeLayout;