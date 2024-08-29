'use client';

import type { FC, PropsWithChildren } from 'react';

import { AdminSidebar } from '@/components/admin';

import { cn } from '@/utils/cn';

interface AdminLayoutProps extends PropsWithChildren {
  className?: string;
}

const AdminLayout: FC<AdminLayoutProps> = ({
  className,
  children
}) => {
  return (
    <>
      <AdminSidebar />
      <main className={cn(
        'min-h-screen min-w-[220px]',
        className
      )}>
        {children}
      </main>
    </>
  );
}

export default AdminLayout;