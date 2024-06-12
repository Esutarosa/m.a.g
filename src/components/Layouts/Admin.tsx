import type { FC, PropsWithChildren } from 'react';
import AdminSideBar from '@/components/Admin/AdminSideBar';
import AdminNavBar from '@/components/Admin/AdminNavBar';
import { cn } from '@/lib/utils';
import { User } from '@supabase/supabase-js';

interface AdminLayoutProps extends PropsWithChildren {
  className?: string
  user: User | null
  signOutAction: (() => void) | undefined
}

const AdminLayout: FC<AdminLayoutProps> = ({
  className,
  user,
  signOutAction,
  children
}) => {
  return (
    <>
      <AdminNavBar user={user} signOutAction={signOutAction} />
      <AdminSideBar />
      <main className={cn('flex flex-col min-h-screen w-full mx-auto', className)}>{children}</main>
    </>
  );
}

export default AdminLayout;