import type { FC } from 'react';
import DefaultLayout from '@/components/Layouts/Default';
import SectionContainer from '@/components/Layouts/SectionContainer';
import { getUser } from '@/config/store/user';
import { readBlog } from '@/config/actions/blog';
import Panel from '@/components/Panel';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Blog: FC = async () => {
  const { user } = await getUser();
  const { data: blogs } = await readBlog();

  return (
    <DefaultLayout isUserLoggedIn={user}>
      <SectionContainer>
        <h1 className='h1'>Blog</h1>
        <p className='p max-w-[720px]'>
          Every cool website needs a cool blog, and this is no exception. You can also visit my {' '}
          <Button
            variant='link'
            className='!p-0 text-muted-foreground/70'
          >
            <Link
              href='https://x.com/AndroidGyaru'
              target='_blank'
            >
              Twitter
            </Link>
          </Button>
          {' '}
          where I do a simpler daily blog from my life.
        </p>
        <div className='my-4 md:my-8'>
          {blogs ? (
            blogs.length > 0 ? (
              <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-5 py-4 md:py-8'>
                {blogs.map((blog) => (
                  <Link
                    href={'/blog/' + blog.id}
                    key={blog.id}
                    className='w-full first:lg:col-span-2 first:md:col-span-3'
                  >
                    <Panel hasActiveOnHover>
                      <div className='flex flex-col justify-between'>
                        <div className='relative w-full aspect-[2/1] h-60 flex items-center justify-center gap-4 overflow-hidden'>
                          <Image
                            src={blog.image_url}
                            alt={blog.title}
                            fill
                            loading='lazy'
                            className='object-cover rounded-xl'
                          />
                        </div>
                        <div className='px-2 py-4 flex flex-col'>
                          <h4 className='h4 line-clamp-1'>
                            {blog.title}
                          </h4>
                          <p className='p !mb-0 text-xs'>
                            {new Date(blog.created_at).toDateString()}
                          </p>
                        </div>
                      </div>
                    </Panel>
                  </Link>
                ))}
              </div>
            ) : (
              <div className='flex flex-col items-center justify-center'>
                <p className='text-muted-foreground/50 mt-8'>Nothing here yet.</p>
              </div>
            )
          ) : null}
        </div>
      </SectionContainer>
    </DefaultLayout>
  );
}

export default Blog;