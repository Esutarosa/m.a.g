import type { FC } from 'react';

import { AdminContainer } from '@/components/layouts';

import { AdminBlogForm, AdminBlogTable } from '@/components/admin/blog';

const AdminBlogSettings: FC = () => {
  return (
    <AdminContainer>
      <AdminBlogForm />
      <AdminBlogTable />
    </AdminContainer>
  );
}

export default AdminBlogSettings;