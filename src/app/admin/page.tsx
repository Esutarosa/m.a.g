import type { FC } from 'react';

import { getUser } from '@/config/store/user';

import { redirect } from 'next/navigation';

import { AdminLayout } from '@/components/layouts';

const AdminPage: FC = async () => {
  const { user } = await getUser();
  if (!user) return redirect('/auth');

  return (
    <AdminLayout>
      <p>Hello {user.email}</p>
    </AdminLayout>
  );
}

export default AdminPage;