import type { FC } from 'react';

import { AdminContainer } from '@/components/layouts';

import { AdminBlogTable } from '@/components/admin/blog';

const AdminBlogSettings: FC = () => {
  return (
    <AdminContainer>
      <AdminBlogTable />
    </AdminContainer>
  );
}

export default AdminBlogSettings;