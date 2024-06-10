import type { FC } from 'react';

import Logo from '@/components/Logo';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import MenuItem from '@/components/Nav/MenuItem';
import { User } from '@supabase/supabase-js';

import { nav } from '@/data/Nav';
import Link from 'next/link';

interface DefaultMobileMenuProps {
  isUserLoggedIn?: User | null
}

const DefaultMobileMenu: FC<DefaultMobileMenuProps> = ({ isUserLoggedIn }) => {
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
          <div className='grid gap-8 mt-4'>
            {nav.map((item) => (
              <MenuItem
                key={item.key}
                href={item.href}
                title={item.text}
                target={item.target}
                className='p-0 text-sm'
              />
            ))}
            {isUserLoggedIn && (
              <Link href='/admin' className='block lg:hidden text-sm text-muted-foreground/85 hover:text-foreground transition'>
                Dashboard
              </Link>
            )}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default DefaultMobileMenu;