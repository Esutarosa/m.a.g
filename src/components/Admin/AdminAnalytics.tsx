'use client';

import {
  type FC,
  useState
} from 'react';
import Panel from '@/components/Panel';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface AdminAnalyticsProps { }

const AdminAnalytics: FC<AdminAnalyticsProps> = ({ }) => {
  const [selectedItem, setSelectedItem] = useState<string>('Admin');

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };
  return (
    <div className='flex flex-col w-full mt-8'>
      <h2 className='h2'>Web Analytics</h2>
      <div className='flex flex-1 flex-col gap-4 md:gap-8'>
        <div className='grid gap-4 lg:grid-cols-2 xl:grid-cols-3'>
          <Panel
            innerClassName='rounded-none p-2'
            outerClassName='xl:col-span-2'
          >
            <div className='flex flex-row items-center'>
              <div className='grid gap-2'>
                <h3 className='h3'>Last actions</h3>
                {/* ... */}
              </div>
            </div>
          </Panel>
          <Panel innerClassName='rounded-none p-2'>
            <div className='flex flex-row items-center'>
              <div className='grid gap-2'>
                <h3 className='h3'>Users</h3>
              </div>
            </div>
            <div className='grid gap-8'>
              <div className='flex items-center gap-4'>
                <Avatar className='hidden h-9 w-9 sm:flex'>
                  <AvatarImage src='/favicon.ico' alt='Avatar' />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className='grid gap-1'>
                  <p className='text-sm font-medium leading-none'>
                    ModernizedAndroidGyaru
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    mag@gmail.com
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger className='ml-auto' asChild>
                    <Button variant='outline'>{selectedItem}</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end' className='w-20'>
                    <DropdownMenuGroup>
                      <DropdownMenuItem onClick={() => handleItemClick('Developer')}>
                        Developer
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleItemClick('Admin')}>
                        Admin
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleItemClick('Moderator')}>
                        Moderator
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </Panel>
          <Panel
            innerClassName='rounded-none p-2'
            outerClassName='lg:col-span-2 xl:col-span-3'
          >
            <div className='flex flex-row items-center'>
              <div className='grid gap-2'>
                <h3 className='h3'>Logs</h3>
              </div>
            </div>

            <div className='grid gap-8'>
              <div className='flex items-center gap-4'>

              </div>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

export default AdminAnalytics;