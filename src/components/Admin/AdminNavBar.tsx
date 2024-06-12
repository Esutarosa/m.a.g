'use client';

import type { FC } from 'react';
import RenderSVG from '@/components/RenderSVG';
import { admin_panel } from '@/data/AdminPanel';
import Link from 'next/link';
import Logo from '@/components/Logo';
import AdminBreadcrumb from '@/components/Admin/AdminBreadcrumb';
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet'
import {
  Button
} from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { User } from '@supabase/supabase-js';

interface AdminNavBarProps {
  user: User | null
  signOutAction: (() => void) | undefined
}

const AdminNavBar: FC<AdminNavBarProps> = ({ user, signOutAction }) => {
  return (
    <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
      <header className='sticky top-0 z-30 flex h-14 sm:h-10 md:h-12 items-center justify-between gap-4 border-b bg-background px-4 sm:static sm:border-0 sm:bg-transparent sm:px-6'>
        <Sheet>
          <SheetTrigger asChild>
            <Button size='icon' variant='outline' className='sm:hidden'>
              <RenderSVG
                icon='M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z'
                className='size-6'
              />
              <span className='sr-only'>Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='max-w-xs'>
            <nav className='grid gap-6 text-lg font-medium'>
              <div className='flex flex-col gap-2 px-2.5 pb-2'>
                <Logo />
                <span className='text-muted-foreground/50 text-sm'>
                  Admin Panel
                </span>
              </div>
              {admin_panel.map((item) => (
                <Link
                  href={item.href}
                  key={item.key}
                  className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                >
                  <RenderSVG icon={item.icon} className='size-6' />
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <AdminBreadcrumb />
        <DropdownMenu>
          <DropdownMenuTrigger className='border-transparent' asChild>
            <Button
              variant='outline'
              size='icon'
              className='h-10 w-10 md:h-14 md:w-14 overflow-hidden rounded-full'
            >
              <RenderSVG
                icon='M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z'
                className='size-5'
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align='end'
            className='w-[220px] rounded-xl p-2'
          >
            <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className='flex justify-between text-muted-foreground cursor-pointer'
              // not a good solution, but i didn't think of anything better
              onClick={() => signOutAction && signOutAction()} // @eslint-disable-line
            >
              Log Out
              <RenderSVG
                icon='M4 15H6V20H18V4H6V9H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V15ZM10 11V8L15 12L10 16V13H2V11H10Z'
                className='size-5'
              />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
    </div>
  );
}

export default AdminNavBar;