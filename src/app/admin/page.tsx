import type { FC } from 'react';
import { redirect } from 'next/navigation';
import { getUser } from '@/config/store/user';
import AdminLayout from '@/components/Layouts/Admin';
import AdminSectionContainer from '@/components/Layouts/AdminSectionContainer';

const Admin: FC = async ({ }) => {
  const { user } = await getUser();
  if (!user) return redirect('/login');

  return (
    <AdminLayout>
      <AdminSectionContainer>
        Admin Page
        <p>
          {user?.email}
        </p>
      </AdminSectionContainer>
    </AdminLayout>
  );
}

export default Admin;