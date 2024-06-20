'use client';

import type { FC } from 'react';
import { BlogFormSchema } from '@/components/Admin/Blog/BlogFormSchema';
import BlogCreatePost from '../BlogCreatePost';

interface EditFormProps {
  blog: BlogFormSchema;
}

const EditForm: FC<EditFormProps> = ({ blog }) => {
  return (
    <BlogCreatePost />
  );
}

export default EditForm;