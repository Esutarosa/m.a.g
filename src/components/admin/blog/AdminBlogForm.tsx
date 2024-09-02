'use client';

import {
  useState,
  type FC
} from 'react';

import type { AdminBlogFormValues, BlogDetailType } from '@/types';

import { useForm, Controller } from 'react-hook-form';

import { CHECK, EDIT, EYE, UNLOCK } from '@/config/icons';

import { Button } from '@/components/primitives/button';

import { Switch } from '@nextui-org/switch';

import SVG from '@/components/SVG';

const AdminBlogForm: FC<{ defaultBlog?: BlogDetailType }> = ({ defaultBlog }) => {
  const [isPreview, setPreview] = useState<boolean>(false);

  const { control } = useForm<AdminBlogFormValues>({
    defaultValues: {
      title: defaultBlog?.title || '',
      content: defaultBlog?.blog_content?.content || '',
      image_url: defaultBlog?.image_url || '',
      is_published: defaultBlog?.is_published || false,
    },
  });

  return (
    <form className='w-full space-y-6'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center flex-wrap justify-between gap-4'>
          <Button
            type='button'
            variant='secondary'
            onClick={() =>
              setPreview(!isPreview)}>
            <span className='flex items-center gap-2'>
              <SVG icon={isPreview ? EDIT : EYE} className='size-4' />
              {isPreview ? 'Edit' : 'Preview'}
            </span>
          </Button>
          <Controller
            name='is_published'
            control={control}
            render={({ field }) =>
              <Switch
                defaultSelected
                color='success'
                checked={field.value}
                onChange={field.onChange}
                endContent={<SVG
                  width={10}
                  height={10}
                  icon={UNLOCK}
                />}
              />
            }
          />
        </div>
        <Button type='submit' variant='secondary' className='flex items-center gap-2'>
          <SVG icon={CHECK} className='size-4' /> Save
        </Button>
      </div>
      <div>
        Fields
      </div>
    </form>
  );
}

export default AdminBlogForm;