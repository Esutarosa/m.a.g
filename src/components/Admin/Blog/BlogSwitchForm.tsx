'use client';

import { Switch } from '@/components/ui/switch';
import { toast } from '@/components/ui/use-toast';
import type { ChangeEvent, FC } from 'react';

interface BlogSwitchFormProps {
  checked: boolean;
  onToggle: () => Promise<string>;
};

const BlogSwitchForm: FC<BlogSwitchFormProps> = ({ checked, onToggle }) => {
  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = JSON.parse(await onToggle());
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
      })
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <Switch checked={checked} type='submit' />
    </form>
  );
}

export default BlogSwitchForm;