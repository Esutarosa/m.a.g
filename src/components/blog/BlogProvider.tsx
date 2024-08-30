'use client';

import type { FC, PropsWithChildren } from 'react';

import type { BlogContextType } from '@/types';

import { BlogContext } from '@/components/blog'

const BlogProvider: FC<PropsWithChildren<BlogContextType>> = ({ children, blogs, blogDetails, blogContents }) => (
  <BlogContext.Provider value={{ blogs, blogDetails, blogContents }}>
    {children}
  </BlogContext.Provider>
);

export default BlogProvider;