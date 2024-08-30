'use client';

import type { FC } from 'react';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue

} from '@nextui-org/table';

import { useBlog } from '@/hooks/useBlog';

const AdminBlogTable: FC = () => {
  const { blogs } = useBlog();

  const columns = [
    { key: 'title', label: 'TITLE' },
    { key: 'created_at', label: 'CREATED AT' },
  ];

  return (
    <Table aria-label='Admin blog table'>
      <TableHeader columns={columns}>
        {(column) =>
          <TableColumn key={column.key}>
            {column.label}
          </TableColumn>}
      </TableHeader>
      <TableBody emptyContent={'No blogs to display.'} items={blogs}>
        {(item) =>
          <TableRow key={item.id}>
            {(columnKey) =>
              <TableCell>
                {getKeyValue(
                  item,
                  columnKey,
                )}
              </TableCell>}
          </TableRow>}
      </TableBody>
    </Table>
  );
}

export default AdminBlogTable;