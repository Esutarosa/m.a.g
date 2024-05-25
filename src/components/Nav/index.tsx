import type { FC } from 'react';
import Link from 'next/link';
import { nav } from '@/data/Nav';
import { cn } from '@/lib/utils';

import MenuItem from '@/components/Nav/MenuItem';
import GitHub8bit from '@/components/Icons/GitHub/8bit';

import { PRESS_START_2P as PressStart2P } from "@/../../next.fonts";

interface NavProps {
  isHideHeader?: boolean
  isHomePage?: boolean
}

const Nav: FC<NavProps> = ({ isHideHeader, isHomePage }) => {
  const session = !true;
  if (isHideHeader) return null;
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95'>
      <nav className='flex flex-col gap-6 lg:gap-5'>
        <div className='relative flex items-center justify-between h-16 mx-auto lg:container lg:px-16 xl:px-20'>
          {!isHomePage ? (
            <div className='flex items-center px-6 lg:px-0 flex-1 sm:items-stretch justify-between'>
              DefaultNavbar
            </div>
          ) : (
            <div className={cn(PressStart2P.className, 'flex items-center px-6 lg:px-0 flex-1 sm:items-stretch justify-between')}>
              <div className='flex items-center'>
                <Link
                  href='/'
                  className='flex items-center gap-2 text-lg text-foreground font-bold leading-none'
                >
                  M.A.G
                </Link>
                <div className='hidden pl-8 sm:space-x-4 lg:flex'>
                  <div className='flex gap-4'>
                    {nav.map((item) => (
                      <div key={item.text} className='text-sm text-foreground/65 hover:text-foreground transition'>
                        <MenuItem
                          href={item.href}
                          title={item.text}
                          target={item.target} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <Link
                  href='https://github.com/Esutarosa/dustcell-funclub'
                  target='_blank'
                  className='hidden lg:flex text-muted-foreground/85 hover:text-foreground transition'
                >
                  <GitHub8bit className='w-6 h-6' />
                </Link>
                {session ? (
                  <Link href='/profile' className='hidden lg:block text-sm text-muted-foreground/85 hover:text-foreground transition'>
                    Profile
                  </Link>
                ) : (
                  <Link href='/sign-in' className='hidden lg:block text-sm text-muted-foreground/85 hover:text-foreground transition'>
                    Sign in
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Nav;