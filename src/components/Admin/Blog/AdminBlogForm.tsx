'use client';

import { useState, type FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import Panel from '@/components/Panel';
import RenderSVG from '@/components/RenderSVG';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Textarea } from '@/components/ui/textarea';
import PreviewButton from '@/components/Admin/Blog/PreviewButton';
import FormActions from './FormActions';
import FormFields from './FormFields';

const FormSchema = z.object({
  title: z.string().min(3, {
    message: 'Title must be at least 3 characters.',
  }),
  image_url: z.string().url({
    message: 'Invalid image url.',
  }),
  content: z.string().min(3, {
    message: 'Content must be at least 3 characters.',
  }),
  is_published: z.boolean(),
})

interface AdminBlogFormProps { }

const AdminBlogForm: FC<AdminBlogFormProps> = ({ }) => {
  const [isPreview, setPreview] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    mode: 'all',
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      content: '',
      image_url: '',
      is_published: false,
    },
  })

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-xl bg-card p-4'>
          <code className='text-primary'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Panel innerClassName='rounded-none p-4 z-0' outerClassName='p-0'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full space-y-6'
        >
          <div className='flex items-center flex-wrap justify-between gap-5'>
            <PreviewButton
              isPreview={isPreview}
              setPreview={setPreview}
              control={form.control}
            />
            <FormActions
              isValid={form.formState.isValid}
            />
          </div>
          <div>
            <h4 className='h4'>Blog editor</h4>
            <p className='p text-sm border-b pb-4'>This is your public blog display field.</p>
          </div>
          <FormFields
            form={form}
            isPreview={isPreview}
          />
        </form>
      </Form>
    </Panel>
  );
}

export default AdminBlogForm;