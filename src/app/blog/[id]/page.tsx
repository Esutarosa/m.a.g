import type { FC } from 'react';
import DefaultLayout from '@/components/Layouts/Default';
import SectionContainer from '@/components/Layouts/SectionContainer';
import { getUser } from '@/config/store/user';
import { IBlog } from '@/config/types/blog';
import Image from 'next/image';

interface BlogSingleProps { params: { id: string } }

const BlogSingle: FC<BlogSingleProps> = async ({ params }) => {
  const { user } = await getUser();
  const { data: blog } = (await fetch(
    process.env.NEXT_PUBLIC_SITE_URL + '/api/blog?id=' + params.id
  ).then((res) => res.json())) as { data: IBlog };

  if (!blog?.id) {
    return null;
  }

  return (
    <DefaultLayout isUserLoggedIn={user}>
      <SectionContainer>
        <div className='min-h-screen pt-10 space-y-10'>
          <div className='space-y-4 md:space-y-8'>
            <h1 className='h1 font-bold'>{blog?.title}</h1>
            <p className='p text-sm'>{new Date(blog?.created_at || '').toDateString()}</p>
          </div>
          <div className='relative h-60 lg:h-96'>
            <Image
              src={blog?.image_url || '/'}
              alt={blog?.title}
              fill
              className='object-cover object-center rounded-xl'
            />
          </div>
        </div>
      </SectionContainer>
    </DefaultLayout>
  );
}

export default BlogSingle;