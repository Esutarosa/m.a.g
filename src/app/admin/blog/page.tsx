import type { FC } from 'react';
import { redirect } from 'next/navigation';
import { getUser } from '@/config/store/user';
import { createClient } from '@/config/supabase/server';
import AdminLayout from '@/components/Layouts/Admin';
import AdminSectionContainer from '@/components/Layouts/AdminSectionContainer';
import AdminBreadcrumb from '@/components/Admin/AdminBreadcrumb';

interface BlogProps { }

const Blog: FC<BlogProps> = async ({ }) => {
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
      </AdminSectionContainer>
    </AdminLayout>
  );
}

export default Blog;