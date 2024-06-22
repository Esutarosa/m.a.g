import type { FC } from 'react';
import DefaultLayout from '@/components/Layouts/Default';
import SectionContainer from '@/components/Layouts/SectionContainer';
import { getUser } from '@/config/store/user';
import { IBlog } from '@/config/types/blog';

interface BlogSingleProps { params: { id: string } }

const BlogSingle: FC<BlogSingleProps> = async ({ params }) => {
  const { user } = await getUser();
  const { data: blog } = (await fetch(
    process.env.SITE_URL + "/api/blog?id=" + params.id
  ).then((res) => res.json())) as { data: IBlog };

  return (
    <DefaultLayout isUserLoggedIn={user}>
      <SectionContainer>
        <div className='min-h-screen pt-10 space-y-10'>
          <h1>{blog?.title}</h1>
          <p>{new Date(blog?.created_at).toDateString()}</p>
        </div>
      </SectionContainer>
    </DefaultLayout>
  );
}

export default BlogSingle;