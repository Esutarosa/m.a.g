import type { FC, PropsWithChildren } from 'react';

import AdminSideBar from '@/components/Admin/AdminSideBar';
import AdminNavBar from '@/components/Admin/AdminNavBar';

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