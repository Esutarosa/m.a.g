import type { FC } from 'react';
import { redirect } from 'next/navigation';
import { getUser } from '@/config/store/user';
import { createClient } from '@/config/supabase/server';
import AdminLayout from '@/components/Layouts/Admin';
import AdminSectionContainer from '@/components/Layouts/AdminSectionContainer';
import AdminBreadcrumb from '@/components/Admin/AdminBreadcrumb';
import ContactTable from '@/components/Admin/Contact/ContactTable';

const Contact: FC = async () => {
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
        <AdminBreadcrumb className='pl-0 flex sm:hidden' />
        <h1 className='h1'>Add or create new contacts</h1>
        <ContactTable />
      </AdminSectionContainer>
    </AdminLayout>
  );
}

export default Contact;