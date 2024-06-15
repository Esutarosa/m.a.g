'use client';

import { useState, type FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import Panel from '@/components/Panel';
import BlogPreviewButton from '@/components/Admin/Blog/BlogPreviewButton';
import BlogFormActions from '@/components/Admin/Blog/BlogFormActions';
import BlogFormFields from '@/components/Admin/Blog//BlogFormFields';
import { BlogFormSchema } from '@/components/Admin/Blog/BlogFormSchema';
import { createBlog } from '@/config/actions/blog';

interface BlogCreatePostProps { }

const BlogCreatePost: FC<BlogCreatePostProps> = ({ }) => {
  const [isPreview, setPreview] = useState(false);

  const form = useForm<z.infer<typeof BlogFormSchema>>({
    mode: 'all',
    resolver: zodResolver(BlogFormSchema),
    defaultValues: {
      title: '',
      content: '',
      image_url: '',
      is_published: false,
    },
  })

  // This should be done in page.tsx, 
  // but there are actually reasons 
  // why it should be done here
  const onSubmit = async (data: z.infer<typeof BlogFormSchema>) => {
    const result = await createBlog(data);
    const { error } = JSON.parse(result);

    if (error!.message) {
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
        // description: (
        //   <pre className='mt- w-full rounded-xl bg-card p-4'>
        //     <code className='text-primary'>{data.title}</code>
        //   </pre>
        // ),
        description: data.content.slice(0, 100),
      })
    }
  }

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

export default BlogCreatePost;