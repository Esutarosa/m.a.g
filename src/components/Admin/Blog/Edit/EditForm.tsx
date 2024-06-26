'use client';

import type { FC } from 'react';
import BlogForm from '@/components/Admin/Blog/BlogForm';
import { IBlogDetail } from '@/config/types/blog';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
import { BlogFormSchema } from '../BlogFormSchema';
import { updateBlogDetailById } from '@/config/actions/blog';

interface EditFormProps {
  blog: IBlogDetail;
}

const EditForm: FC<EditFormProps> = ({ blog }) => {
  const router = useRouter();

  const onHandleSubmit = async (data: BlogFormSchema) => {
    const result = await updateBlogDetailById(blog?.id!, data);
    const { error } = JSON.parse(result);

    if (error?.message) {
      toast({
        title: 'Fail to update post',
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
        title: 'Post updated successfully',
        description: 'Post ' + data.title + ' has been updated successfully.',
      })
      router.push('/admin/blog');
    }
  };

  return (
    <BlogForm onHandleSubmit={onHandleSubmit} defaultBlog={blog} />
  );
}

export default EditForm;