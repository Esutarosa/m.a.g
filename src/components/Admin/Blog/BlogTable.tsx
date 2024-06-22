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
import BlogSwitchForm from '@/components/Admin/Blog/BlogSwitchForm';
import { BlogFormSchema } from './BlogFormSchema';
import { IBlog } from '@/config/types/blog';

const BlogTable: FC = async () => {
  const { data: blogs } = await readBlogAdmin();

  return (
    <Panel innerClassName='rounded-none p-4' outerClassName='p-0'>
      <Table className='lg:w-full w-[900px]'>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[60%]'>Title</TableHead>
            <TableHead className='translate-x-[-6px]'>Publish</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className='text-right'></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs?.map((blog, index) => {
            const updatePulishedPost = updateBlogById.bind(
              null,
              blog.id,
              { is_published: !blog.is_published, } as IBlog
            );
            return (
              <TableRow key={index}>
                <TableCell className='font-medium'>
                  {blog?.title}
                </TableCell>
                <TableCell>
                  <BlogSwitchForm
                    checked={blog.is_published}
                    onToggle={updatePulishedPost}
                  />
                </TableCell>
                <TableCell className='w-[200px]'>
                  {new Date(blog.created_at).toLocaleString()}
                </TableCell>
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