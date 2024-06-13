import type { FC } from 'react';
import { redirect } from 'next/navigation';
import { getUser } from '@/config/store/user';
import { createClient } from '@/config/supabase/server';
import AdminLayout from '@/components/Layouts/Admin';
import AdminSectionContainer from '@/components/Layouts/AdminSectionContainer';
import AdminBreadcrumb from '@/components/Admin/AdminBreadcrumb';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BlogTable from '@/components/Admin/Blog/BlogTable';
import RenderSVG from '@/components/RenderSVG';

interface BlogProps { }

const Blog: FC<BlogProps> = async ({ }) => {
  const { user } = await getUser();
  if (!user) return redirect('/login');

  const signOut = async () => {
    'use server';

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect('/');
  };
  return (
    <AdminLayout user={user} signOutAction={signOut}>
      <AdminSectionContainer>
        <AdminBreadcrumb className='pl-0 flex sm:hidden' />
        <div className='flex items-center justify-between'>
          <h1 className='h1'>Blogs</h1>
          <Link href='/admin/blog/create'>
            <Button
              className='flex items-center gap-2 rounded-xl xl:py-6'
              variant='outline'
            >
              Create
              <RenderSVG
                icon='M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z'
                className='size-5'
              />
            </Button>
          </Link>
        </div>
        <BlogTable />
      </AdminSectionContainer>
    </AdminLayout>
  );
}

export default Blog;