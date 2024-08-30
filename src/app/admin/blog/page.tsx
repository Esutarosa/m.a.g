import type { FC } from 'react';

import { AdminLayout } from '@/components/layouts';

import { AdminBlogSettings } from '@/components/admin/blog';

import { BlogProvider } from '@/components/blog';

import { readAdminBlog } from '@/config/actions/blog';

import ErrorNote from '@/components/ErrorNote';

const AdminBlogPage: FC = async () => {
  const { data: blogs, error } = await readAdminBlog();

  if (error) {
    console.error('Error fetching blogs:', error);
    return (
      <AdminLayout>
        <ErrorNote>
          Unable to load admin blog page. Please try again later.
        </ErrorNote>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <BlogProvider blogs={blogs || []}>
        <AdminBlogSettings />
      </BlogProvider>
    </AdminLayout>
  );
}

export default AdminBlogPage;