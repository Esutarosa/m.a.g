'use client';

import { useState, useTransition, type FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import Panel from '@/components/Panel';
import BlogPreviewButton from '@/components/Admin/Blog/BlogPreviewButton';
import BlogFormActions from '@/components/Admin/Blog/BlogFormActions';
import BlogFormFields from '@/components/Admin/Blog//BlogFormFields';
import { BlogFormSchema } from '@/components/Admin/Blog/BlogFormSchema';
import { IBlogDetail } from '@/config/types/blog';

interface BlogFormProps {
  onHandleSubmit: (data: z.infer<typeof BlogFormSchema>) => void
  defaultBlog: IBlogDetail
}

const BlogForm: FC<BlogFormProps> = ({
  defaultBlog,
  onHandleSubmit
}) => {
  const [isPreview, setPreview] = useState(false);
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof BlogFormSchema>>({
    mode: 'all',
    resolver: zodResolver(BlogFormSchema),
    defaultValues: {
      title: defaultBlog?.title || '',
      content: defaultBlog?.blog_content?.content || '',
      image_url: defaultBlog?.image_url || '',
      is_published: defaultBlog?.is_published || false,
    },
  });

  const onSubmit = async (data: z.infer<typeof BlogFormSchema>) => {
    startTransition(() => {
      onHandleSubmit(data);
    })
  };

  return (
    <Panel innerClassName='rounded-none p-4 z-0' outerClassName='p-0'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full space-y-6'
        >
          <div className='flex items-center flex-wrap justify-between gap-5'>
            <BlogPreviewButton
              isPreview={isPreview}
              setPreview={setPreview}
              control={form.control}
              form={form}
            />
            <BlogFormActions
              isValid={form.formState.isValid}
              isPending={isPending}
            />
          </div>
          <div>
            <h4 className='h4'>Blog editor</h4>
            <p className='p text-sm border-b pb-4'>This is your public blog display field.</p>
          </div>
          <BlogFormFields
            form={form}
            isPreview={isPreview}
          />
        </form>
      </Form>
    </Panel>
  );
}

export default BlogForm;