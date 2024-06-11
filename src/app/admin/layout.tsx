import type { FC, PropsWithChildren } from 'react';

import AdminSideBar from '@/app/admin/components/AdminSideBar';
import AdminNavBar from '@/app/admin/components/AdminNavBar';

const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AdminSideBar />
      <AdminNavBar />
      {children}
    </>
  )
}

export default AdminLayout;