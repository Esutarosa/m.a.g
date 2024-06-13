'use client';

import { useState, type FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
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
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Panel innerClassName='rounded-none p-4' outerClassName='p-0'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full space-y-6'
        >
          <div className='flex items-center flex-wrap justify-between gap-5'>
            <div className='flex items-center gap-5 flex-wrap'>
              <Button
                type='button'
                variant='secondary'
                className='flex items-center gap-2'
                onClick={() => setPreview(!isPreview)}
              >
                {isPreview ? (
                  <>
                    <RenderSVG
                      icon='M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z'
                      className='size-4'
                    />
                    Edit
                  </>
                ) : (
                  <>
                    <RenderSVG
                      icon='M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z'
                      className='size-4'
                    />
                    Preview
                  </>
                )}
              </Button>
              <FormField
                control={form.control}
                name='is_published'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='flex items-center gap-2'>
                        <span>Publish:</span>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className='flex items-center gap-2'>
              <Button
                variant='default'
                className='flex items-center gap-2'
                disabled={!form.formState.isValid}
              >
                <RenderSVG
                  icon='M7 19V13H17V19H19V7.82843L16.1716 5H5V19H7ZM4 3H17L21 7V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM9 15V19H15V15H9Z'
                  className='size-4'
                />
                Save
              </Button>
              <Button
                variant='destructive'
                size='icon'
                className='flex items-center gap-2'
              >
                <RenderSVG
                  icon='M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z'
                  className='size-4'
                />
              </Button>
            </div>
          </div>

          <div>
            <h4 className='h4'>Blog editor</h4>
            <p className='p text-sm border-b pb-4'>This is your public blog display field.</p>
          </div>

          {/* title */}
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel className={cn(
                  'text-md text-muted-foreground',
                  isPreview ? 'hidden' : 'block',
                )}>
                  Title
                </FormLabel>
                <FormControl>
                  <div className={cn(
                    'w-full flex items-center break-words gap-2',
                    isPreview ? 'divide-x-0 pt-14 container' : 'divide-x',
                  )}>
                    <Input
                      placeholder='What will the name of your wonderful blog be?'
                      className={cn(
                        'rounded-xl py-6 placeholder:text-accent text-lg font-medium leading-relaxed',
                        isPreview ? 'hidden' : 'w-full xl:w-1/2',
                      )}
                      {...field}
                    />
                    <div className={cn(
                      'xl:px-10',
                      isPreview
                        ? 'mx-auto w-full xl:w-4/5'
                        : 'w-1/2 xl:block hidden'
                    )}>
                      <h1 className='h1 font-bold'>
                        {form.getValues().title}
                      </h1>
                    </div>
                  </div>
                </FormControl>
                {form.getFieldState('title').invalid && (
                  form.getValues().title && <FormMessage className='py-2' />
                )}
              </FormItem>
            )}
          />

          {/* img */}
          <FormField
            control={form.control}
            name='image_url'
            render={({ field }) => (
              <FormItem>
                <FormLabel className={cn(
                  'text-md text-muted-foreground',
                  isPreview ? 'hidden' : 'block',
                )}>
                  Image
                </FormLabel>
                <FormControl>
                  <div className={cn(
                    'w-full flex items-start break-words gap-2',
                    isPreview ? 'divide-x-0 container' : 'divide-x',
                  )}>
                    <Input
                      placeholder='Give me your image url'
                      className={cn(
                        'rounded-xl py-6 placeholder:text-accent text-lg font-medium leading-relaxed',
                        isPreview ? 'hidden' : 'w-full xl:w-1/2',
                      )}
                      {...field}
                    />
                    <div className={cn(
                      'xl:px-10',
                      isPreview
                        ? 'mx-auto w-full xl:w-4/5'
                        : 'w-1/2 xl:block hidden'
                    )}>
                      <div className='relative h-96 mt-2 rounded-xl'>
                        <Image
                          src={form.getValues().image_url}
                          alt='preview'
                          fill
                          className='object-cover object-center rounded-xl'
                        />
                      </div>
                    </div>
                  </div>
                </FormControl>
                {form.getFieldState('image_url').invalid && (
                  form.getValues().image_url && <FormMessage className='py-2' />
                )}
              </FormItem>
            )}
          />

          {/* content */}
          <FormField
            control={form.control}
            name='content'
            render={({ field }) => (
              <FormItem>
                <FormLabel className={cn(
                  'text-md text-muted-foreground',
                  isPreview ? 'hidden' : 'block',
                )}>
                  Content
                </FormLabel>
                <FormControl>
                  <div className={cn(
                    'w-full flex items-center break-words gap-2',
                    isPreview ? 'divide-x-0 pt-14 container' : 'divide-x h-48',
                  )}>
                    <Textarea
                      placeholder='Write something interesting and exciting here...'
                      className={cn(
                        'rounded-xl py-6 placeholder:text-accent text-lg font-medium leading-relaxed resize-none h-full',
                        isPreview ? 'hidden' : 'w-full xl:w-1/2',
                      )}
                      {...field}
                    />
                    <div className={cn(
                      'xl:px-10',
                      isPreview
                        ? 'mx-auto w-full xl:w-4/5'
                        : 'w-1/2 xl:block hidden'
                    )}>
                      <p className='text-sm p'>
                        {form.getValues().content}
                      </p>
                    </div>
                  </div>
                </FormControl>
                {form.getFieldState('content').invalid && (
                  form.getValues().content && <FormMessage className='py-2' />
                )}
              </FormItem>
            )}
          />
        </form>
      </Form>
    </Panel>
  );
}

export default AdminBlogForm;