'use client';

import type { FC } from 'react';
import BlogForm from '@/components/Admin/Blog/BlogForm';
import { IBlogDetail } from '@/config/types/blog';
import { useRouter } from 'next/navigation';
import { createBlog } from '@/config/actions/blog';
import { toast } from '@/components/ui/use-toast';
import { BlogFormSchema } from '@/components/Admin/Blog/BlogFormSchema';

const BlogFormCreate: FC = () => {
  const router = useRouter();

  const onHandleSubmit = async (data: BlogFormSchema) => {
    const result = await createBlog(data);
    const { error } = JSON.parse(result);

    if (error?.message) {
      toast({
        title: 'Fail to create post',
        description: (
          <pre className='w-full rounded-xl bg-muted p-4'>
            <code className='text-primary'>
              {error.message}
            </code>
          </pre>
        ),
      })
    } else {
      toast({
        title: 'Post created successfully',
        description: 'Post ' + data.title + ' has been created successfully.',
      })
      router.push('/admin/blog');
    }
  };

  return (
    <BlogForm onHandleSubmit={onHandleSubmit} />
  );
}

export default BlogFormCreate;