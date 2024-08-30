'use client';

import { createContext } from 'react';

import type { BlogContextType } from '@/types';

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export default BlogContext;