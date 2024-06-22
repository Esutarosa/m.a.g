import type { FC } from 'react';
import Panel from '@/components/Panel';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { readBlogAdmin, updateBlogById } from '@/config/actions/blog';
import Link from 'next/link';
import BlogTableActions from '@/components/Admin/Blog/BlogTableActions';
import BlogSwitchForm from './BlogSwitchForm';
import { BlogFormSchema } from './BlogFormSchema';

const BlogTable: FC = async () => {

  const { data: blogs } = await readBlogAdmin();

  const formatDateTime = (timestamp: string) => {
    return new Date(timestamp)
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');
  };

  return (
    <Panel innerClassName='rounded-none p-4' outerClassName='p-0'>
      <Table className='lg:w-full w-[900px]'>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[40%]'>Title</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Publish</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className='text-right'></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs?.map((blog, index) => {
            const updatePublishPost = updateBlogById.bind(null, blog.id, {
              is_published: !blog.is_published
            } as BlogFormSchema);
            return (
              <TableRow key={index}>
                <TableCell className='font-medium'>{blog?.title}</TableCell>
                <TableCell>
                  <Link href={blog?.image_url}>
                    {blog?.image_url}
                  </Link>
                </TableCell>
                <TableCell>
                  <BlogSwitchForm
                    checked={blog.is_published}
                    onToggle={updatePublishPost}
                  />
                </TableCell>
                <TableCell className='w-[200px]'>{formatDateTime(blog.created_at)}</TableCell>
                <TableCell className='text-right flex justify-end gap-1'>
                  <BlogTableActions id={blog.id} />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Panel>
  );
}

export default BlogTable;