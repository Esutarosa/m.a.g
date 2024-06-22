import type { FC } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import Image from 'next/image';
import RenderSVG from '@/components/RenderSVG';
import MarkdownPreview from '@/components/Markdown/MarkdownPreview';

interface BlogFormFieldsProps {
  form: any;
  isPreview: boolean;
}

const BlogFormFields: FC<BlogFormFieldsProps> = ({ form, isPreview }) => {
  return (
    <>
      <FormField
        control={form.control}
        name='title'
        render={({ field }) => (
          <FormItem>
            <FormLabel className={cn(
              'text-md text-muted-foreground',
              isPreview ? 'hidden' : 'block'
            )}>
              Title
            </FormLabel>
            <FormControl>
              <div className={cn(
                'w-full flex items-center break-words gap-2',
                isPreview && 'pt-2 xl:pt-10 container'
              )}>
                <Input
                  placeholder='This should be a great title for a new blog...'
                  className={cn(
                    'rounded-xl py-6 placeholder:text-accent text-lg font-medium leading-relaxed',
                    isPreview
                      ? 'hidden'
                      : 'w-full xl:w-1/2'
                  )}
                  required
                  {...field}
                />
                <div className={cn(
                  isPreview
                    ? 'mx-auto w-full xl:w-4/5'
                    : 'w-1/2 xl:block hidden xl:px-10'
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
      <FormField
        control={form.control}
        name='image_url'
        render={({ field }) => (
          <FormItem>
            <FormLabel className={cn(
              'text-md text-muted-foreground',
              isPreview ? 'hidden' : 'block'
            )}>
              Image
            </FormLabel>
            <FormControl>
              <div className={cn(
                'w-full flex items-center break-words gap-2',
                isPreview && 'container'
              )}>
                <Input
                  placeholder='Give me your image url...'
                  className={cn(
                    'rounded-xl py-6 placeholder:text-accent text-lg font-medium leading-relaxed',
                    isPreview
                      ? 'hidden'
                      : 'w-full xl:w-1/2'
                  )}
                  required
                  autoComplete='off'
                  {...field}
                />
                <div className={cn(
                  isPreview
                    ? 'mx-auto w-full xl:w-4/5'
                    : 'w-1/2 xl:block hidden xl:px-10'
                )}>
                  {form.getValues().image_url && (
                    <div className={cn(
                      'w-full',
                      isPreview
                        ? 'mx-auto'
                        : 'w-full xl:block hidden'
                    )}>
                      {!isPreview ? (
                        <div className='flex items-center text-muted-foreground gap-2'>
                          <RenderSVG
                            icon='M2.9918 21C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918ZM20 15V5H4V19L14 9L20 15ZM20 17.8284L14 11.8284L6.82843 19H20V17.8284ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z'
                            className='size-4'
                          />
                          <span>Click on Preview to see image</span>
                        </div>
                      ) : (
                        <div className='relative h-60 lg:h-96'>
                          <Image
                            src={form.getValues().image_url}
                            alt='preview'
                            fill
                            className='object-cover object-center rounded-xl'
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </FormControl>
            {form.getFieldState('image_url').invalid && (
              form.getValues().image_url && <FormMessage className='py-2' />
            )}
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='content'
        render={({ field }) => (
          <FormItem>
            <FormLabel className={cn(
              'text-md text-muted-foreground',
              isPreview
                ? 'hidden'
                : 'block'
            )}>
              Content
            </FormLabel>
            <FormControl>
              <div className={cn(
                'w-full flex break-words gap-2',
                isPreview
                  ? 'container pt-4'
                  : 'h-[85vh]'
              )}>
                <Textarea
                  placeholder='Write something interesting and exciting here...'
                  className={cn(
                    'rounded-xl overflow-y-scroll placeholder:text-accent text-lg font-medium leading-relaxed h-[85vh] resize-none',
                    isPreview
                      ? 'hidden'
                      : 'w-full xl:w-1/2'
                  )}
                  required
                  {...field}
                />
                <div className={cn(
                  'overflow-y-scroll',
                  isPreview
                    ? 'mx-auto w-full xl:w-4/5 overflow-y-hidden'
                    : 'w-1/2 xl:block hidden xl:px-10'
                )}>
                  <MarkdownPreview content={form.getValues().content} />
                </div>
              </div>
            </FormControl>
            {form.getFieldState('content').invalid && (
              form.getValues().content && <FormMessage className='py-2' />
            )}
          </FormItem>
        )}
      />
    </>
  );
}

export default BlogFormFields;