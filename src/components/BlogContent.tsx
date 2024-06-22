'use client';

import { useEffect, useState, type FC } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { Database, IBlogContent } from '@/config/types/blog';
import MarkdownPreview from '@/components/Markdown/MarkdownPreview';
import Spinner from '@/components/Spinner';

interface BlogContentProps { blogId: string }

const BlogContent: FC<BlogContentProps> = ({ blogId }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<IBlogContent>(null);
  const [error, setError] = useState<string | null>(null);

  const supabase = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_KEY!,
  );

  const readBlogContent = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_content')
        .select('*')
        .eq('blog_id', blogId)
        .single();

      if (error) throw error;
      setBlog(data);
    } catch (err: string | any) {
      setError(err.message || 'Error fetching blog content');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    readBlogContent();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <div className='flex items-center justify-center'>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex items-center justify-center text-destructive'>
        <p>{error}</p>
      </div>
    );
  }

  return <MarkdownPreview content={blog?.content || ''} />
}

export default BlogContent;