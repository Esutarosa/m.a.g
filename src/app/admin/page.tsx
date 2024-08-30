import type { FC } from 'react';

import { AdminLayout } from '@/components/layouts';

import { AdminSiteSettings } from '@/components/admin';

const AdminPage: FC = () => {
  return (
    <AdminLayout>
      <AdminSiteSettings />
    </AdminLayout>
  );
}

export default AdminPage;