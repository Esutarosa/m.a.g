'use client';

import type { FC } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { admin_panel } from '@/data/AdminPanel';
import { usePathname } from 'next/navigation';
import RenderSVG from '@/components/RenderSVG';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip'

interface AdminSideBarProps { }

const AdminSideBar: FC<AdminSideBarProps> = ({ }) => {
  const pathname = usePathname()
  return (
    <aside className='fixed inset-y-0 left-0 z-10 hidden flex-col border-r bg-background sm:flex'>
      <nav className='flex flex-col items-center w-20 gap-4 px-6 sm:py-4'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='/'
                className='group flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground'
              >
                <RenderSVG
                  icon='M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19Z'
                  className='group-hover:scale-110 transition-transform size-6'
                />
                <span className='sr-only'>Home</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>Home</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {admin_panel.map((item) => (
          <TooltipProvider key={item.key}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    'flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl text-muted-foreground hover:text-foreground transition-colors hover:bg-accent active:bg-accent',
                    pathname === item.href && 'bg-accent text-foreground'
                  )}
                >
                  <RenderSVG icon={item.icon} className='size-6' />
                  <span className='sr-only'>{item.name}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>{item.name}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </nav>
    </aside>
  );
}

export default AdminSideBar;