import type { FC } from 'react';
import { redirect } from 'next/navigation';
import { getUser } from '@/config/store/user';
import AdminLayout from '@/components/Layouts/Admin';

const Admin: FC = async ({ }) => {
  const { user } = await getUser();
  if (!user) return redirect('/login');

  return (
    <AdminLayout>
      Admin Page
      <p>
        {user?.email}
      </p>
    </AdminLayout>
  );
}

export default Admin;