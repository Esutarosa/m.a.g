import { useContext } from 'react';

import { BlogContext } from '@/components/blog';

/**
 * Custom hook to access the Blog context.
 *
 * Must be used within a `BlogProvider`.
 *
 * @returns {BlogContextType} The blog context value.
 * @throws {Error} If used outside of a `BlogProvider`.
 *
 * @example
 * const blogs = useBlog();
 */
export const useBlog = () => {
  const context = useContext(BlogContext);

  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }

  return context;
};