import type { FC } from 'react';
import { redirect } from 'next/navigation';
import { getUser } from '@/config/store/user';
import AdminLayout from '@/components/Layouts/Admin';
import AdminSectionContainer from '@/components/Layouts/AdminSectionContainer';
import AdminCards from '@/components/Admin/AdminCards';
import { createClient } from '@/config/supabase/server';

const Admin: FC = async ({ }) => {
  const { user } = await getUser();
  if (!user) return redirect('/login');

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/");
  };

  return (
    <AdminLayout user={user} signOutAction={signOut}>
      <AdminSectionContainer>
        <AdminCards />
      </AdminSectionContainer>
    </AdminLayout>
  );
}

export default Admin;