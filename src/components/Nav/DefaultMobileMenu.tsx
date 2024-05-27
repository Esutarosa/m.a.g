import type { FC, Dispatch, SetStateAction } from 'react';

import Logo from '@/components/Logo';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import MenuItem from '@/components/Nav/MenuItem';

import { nav } from '@/data/Nav';

const DefaultMobileMenu: FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='shrink-0 lg:hidden'
        >
          <Bars3Icon className='h-6 w-6' />
        </Button>
      </SheetTrigger>
      <SheetContent side='right'>
        <nav className='grid gap-4'>
          <Logo />
          <div className='grid gap-3 mt-4'>
            {nav.map((item) => (
              <MenuItem
                key={item.key}
                href={item.href}
                title={item.text}
                target={item.target}
                className='p-0 py-3 text-sm'
              />
            ))}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default DefaultMobileMenu;