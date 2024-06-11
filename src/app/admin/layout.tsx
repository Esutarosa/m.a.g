import type { FC, PropsWithChildren } from 'react';

import AdminSideBar from '@/app/admin/components/AdminSideBar';

const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AdminSideBar />
      {children}
    </>
  )
}

export default AdminLayout;