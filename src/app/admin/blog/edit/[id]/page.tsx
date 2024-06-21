import type { FC } from 'react';
import { redirect } from 'next/navigation';
import { getUser } from '@/config/store/user';
import { createClient } from '@/config/supabase/server';
import AdminLayout from '@/components/Layouts/Admin';
import AdminSectionContainer from '@/components/Layouts/AdminSectionContainer';
import { readBlogContentById } from '@/config/actions/blog';
import EditForm from '@/components/Admin/Blog/Edit/EditForm';

interface EditProps { params: { id: string } }

const Edit: FC<EditProps> = async ({ params }) => {
  const { user } = await getUser();
  const { data: blog } = await readBlogContentById(params.id);
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
        <h1 className='h1'>Edit Blog Post</h1>
        <EditForm blog={blog} />
      </AdminSectionContainer>
    </AdminLayout>
  );
}

export default Edit;