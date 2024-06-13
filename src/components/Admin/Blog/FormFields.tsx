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

interface FormFieldsProps {
  form: any;
  isPreview: boolean;
}

const FormFields: FC<FormFieldsProps> = ({ form, isPreview }) => {
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
                'w-full flex items-start break-words gap-2',
                isPreview && 'pt-2 xl:pt-10 container'
              )}>
                <Input
                  placeholder='What will the name of your wonderful blog be?'
                  className={cn('rounded-xl py-6 placeholder:text-accent text-lg font-medium leading-relaxed', isPreview ? 'hidden' : 'w-full xl:w-1/2')}
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
                'w-full flex items-start break-words gap-2',
                isPreview && 'container'
              )}>
                <Input
                  placeholder='Give me your image url'
                  className={cn(
                    'rounded-xl py-6 placeholder:text-accent text-lg font-medium leading-relaxed',
                    isPreview
                      ? 'hidden'
                      : 'w-full xl:w-1/2'
                  )}
                  {...field}
                />
                <div className={cn(
                  'xl:px-10',
                  isPreview
                    ? 'mx-auto w-full xl:w-4/5'
                    : 'w-1/2 xl:block hidden'
                )}>
                  <div className='relative h-96 rounded-xl'>
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
                'w-full flex items-start break-words gap-2',
                isPreview
                  ? 'pt-8 container'
                  : 'h-48'
              )}>
                <Textarea
                  placeholder='Write something interesting and exciting here...'
                  className={cn(
                    'rounded-xl py-6 placeholder:text-accent text-lg font-medium leading-relaxed resize-none h-full',
                    isPreview
                      ? 'hidden'
                      : 'w-full xl:w-1/2'
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
    </>
  );
}

export default FormFields;