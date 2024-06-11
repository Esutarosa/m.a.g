import type { FC, PropsWithChildren } from 'react';
import AdminSideBar from '@/components/Admin/AdminSideBar';
import AdminNavBar from '@/components/Admin/AdminNavBar';
import { cn } from '@/lib/utils';

interface AdminLayoutProps extends PropsWithChildren { className?: string }

const AdminLayout: FC<AdminLayoutProps> = ({ children, className }) => {
  return (
    <>
      <AdminNavBar />
      <AdminSideBar />
      <main className={cn('flex flex-col min-h-screen w-full mx-auto', className)}>{children}</main>
    </>
  );
}

export default AdminLayout;