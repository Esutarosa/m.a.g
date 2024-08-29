import type { FC } from 'react';

import { getUser } from '@/config/store/user';

import { AdminLayout } from '@/components/layouts';
import { AdminSiteSettings } from '@/components/admin';

const AdminPage: FC = async () => {
  const { user } = await getUser();

  return (
    <AdminLayout>
      <AdminSiteSettings>
        {user ?
          <p>Hello {user.email}</p>
          : null}
      </AdminSiteSettings>
    </AdminLayout>
  );
}

export default AdminPage;