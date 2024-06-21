import type { FC } from 'react';
import { redirect } from 'next/navigation';
import { getUser } from '@/config/store/user';
import { createClient } from '@/config/supabase/server';
import AdminLayout from '@/components/Layouts/Admin';
import AdminSectionContainer from '@/components/Layouts/AdminSectionContainer';
import AdminBreadcrumb from '@/components/Admin/AdminBreadcrumb';
import BlogFormCreate from '@/components/Admin/Blog/BlogFormCreate';
import { IBlogDetail } from '@/config/types/blog';

interface CreateProps { blog: IBlogDetail }

const Create: FC<CreateProps> = async ({ blog }) => {
  const { user } = await getUser();
  if (!user) return redirect('/login');

  const signOut = async () => {
    "use server";
    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/");
  }

  return (
    <AdminLayout user={user} signOutAction={signOut}>
      <AdminSectionContainer>
        <AdminBreadcrumb className='pl-0 flex sm:hidden' />
        <h1 className='h1'>Create Blog Post</h1>
        <BlogFormCreate blog={blog} />
      </AdminSectionContainer>
    </AdminLayout>
  );
}

export default Create;