'use client';

import {
  Key,
  useCallback,
  type FC
} from 'react';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/table';

import {
  Chip,
  type ChipProps
} from '@nextui-org/chip';

import { useBlog } from '@/hooks/useBlog';

import { BlogType } from '@/types';

import { Tooltip } from '@nextui-org/tooltip';

import { DELETE, EDIT, EYE } from '@/config/icons';

import SVG from '@/components/SVG';

import { cn } from '@/utils/cn';

const AdminBlogTable: FC = () => {
  const { blogs } = useBlog();

  const Status = {
    PUBLISHED: 'published',
    NOT_PUBLISHED: 'not_published',
  };

  const statusColorMap: Record<string, ChipProps['color']> = {
    [Status.PUBLISHED]: 'success',
    [Status.NOT_PUBLISHED]: 'danger',
  };

  const columns = [
    { uid: 'title', label: 'TITLE' },
    { uid: 'created_at', label: 'CREATED AT' },
    { uid: 'is_published', label: 'IS PUBLISHED' },
    { uid: 'actions', label: 'ACTIONS' },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
    };
  };

  const renderCell = useCallback((blog: BlogType, columnKey: Key) => {
    const cellValue = blog[columnKey as keyof BlogType];

    switch (columnKey) {
      case 'title':
        return <span>{cellValue}</span>;
      case 'created_at':
        const { date, time } =
          typeof cellValue === 'string'
            ? formatDate(cellValue)
            : { date: '', time: '' };
        return (
          <Tooltip placement='top' content={time}>
            {date}
          </Tooltip>
        );
      case 'is_published':
        return (
          <Chip color={statusColorMap[
            cellValue
              ? Status.PUBLISHED
              : Status.NOT_PUBLISHED
          ]}>
            {cellValue ? 'Public' : 'Private'}
          </Chip>
        );
      case 'actions':
        return (
          <div className='relative flex items-center justify-end gap-2'>
            <Tooltip content='View Blog'>
              <span className='text-muted-foreground cursor-pointer active:opacity-50'>
                <SVG className='size-5' icon={EYE} />
              </span>
            </Tooltip>
            <Tooltip content='Edit Blog'>
              <span className='text-muted-foreground cursor-pointer active:opacity-50'>
                <SVG className='size-5' icon={EDIT} />
              </span>
            </Tooltip>
            <Tooltip content='Delete Blog'>
              <span className='text-destructive text-danger cursor-pointer active:opacity-50'>
                <SVG className='size-5' icon={DELETE} />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table className='w-full overflow-auto' aria-label='Admin blog table'>
      <TableHeader columns={columns}>
        {({ uid, label }) =>
          <TableColumn
            className={cn(
              uid ===
              'title' &&
              'min-w-[340px] md:min-w-full'
            )}
            key={uid}
            align={uid ===
              'title'
              ? 'start'
              : uid ===
                'actions'
                ? 'end'
                : 'center'
            }>
            {label}
          </TableColumn>}
      </TableHeader>
      <TableBody emptyContent={'No blogs to display.'} items={blogs}>
        {(item) =>
          <TableRow key={item.id}>
            {(columnKey) =>
              <TableCell>
                {renderCell(item, columnKey)}
              </TableCell>}
          </TableRow>}
      </TableBody>
    </Table>
  );
}

export default AdminBlogTable;