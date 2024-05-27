'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import { nav } from '@/data/Nav';
import Link from 'next/link';

import Logo from '@/components/Logo';
import MenuItem from '@/components/Nav/MenuItem';
import MobileButton from '@/components/Nav/MobileButton';
import HomePageMobileMenu from '@/components/Nav/HomePageMobileMenu';
import DefaultMobileMenu from '@/components/Nav/DefaultMobileMenu';

import { PRESS_START_2P as PressStart2P } from '@/../../next.fonts';

interface NavProps {
  isHideHeader?: boolean
  isHomePage?: boolean
}

const Nav: FC<NavProps> = ({ isHideHeader, isHomePage }) => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const session = !true;
  const { width } = useWindowSize()

  useEffect(() => {
    document.body.style.overflow = menuIsActive ? 'hidden' : 'auto';
  }, [menuIsActive]);

  useEffect(() => {
    if (width >= 1024) setMenuIsActive(false)
  }, [width]);

  if (isHideHeader) return null;

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95'>
      <nav className='flex flex-col gap-6 lg:gap-5'>
        <div className='flex items-center justify-between h-16 mx-auto container lg:px-16 xl:px-20'>
          <div className={`${isHomePage ? PressStart2P.className : ''} flex items-center px-6 lg:px-0 flex-1 sm:items-stretch justify-between`}>
            <div className='flex items-center'>
              <Logo />
              <div className='hidden pl-10 gap-4 lg:flex'>
                {nav.map((item) => (
                  <MenuItem
                    key={item.key}
                    href={item.href}
                    title={item.text}
                    target={item.target}
                  />
                ))}
              </div>
            </div>
            <div className='flex items-center'>
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
            {isHomePage ? (
              <MobileButton setMenuIsActive={setMenuIsActive} menuIsActive={menuIsActive} />
            ) : (
              <DefaultMobileMenu />
            )}
          </div>
        </div>
        {isHomePage && <HomePageMobileMenu menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />}
      </nav>
    </header >
  );
}

export default Nav;