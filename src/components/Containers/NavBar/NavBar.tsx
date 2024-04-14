'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { FC, HTMLAttributeAnchorTarget } from "react";
import NavItem from './NavItem/NavItem';
import BandCamp from '@/components/Icons/Social/BandCamp';
import Twitter from '@/components/Icons/Social/Twitter';

type NavbarProps = {
  navItems: Array<{
    text: string;
    href: string;
    key: string;
    target?: HTMLAttributeAnchorTarget | undefined;
  }>;
  onThemeTogglerClick: () => void;
}

const NavBar: FC<NavbarProps> = ({
  navItems,
  onThemeTogglerClick,
}) => {
  return (
    <nav className=''>
      <div className=''>
        <Link
          href='/'
          className=''
          aria-label='Home'
        >
          <Image
            src='/logo.svg'
            alt='Logo'
            width={50}
            height={50}
          />
        </Link>

        <button className=''>
          fds
        </button>
      </div>

      <div className=''>
        <div className=''>
          {navItems.map(({ text, href, key, target }) => (
            <NavItem key={key} href={href} target={target}>
              {text}
            </NavItem>
          ))}
        </div>

        <div>
          {/* <SearchButton /> */}

          {/* <ThemeToggle onClick={onThemeTogglerClick} /> */}

          <Link
            className=''
            href='https://twitter.com/AndroidGyaru'
            aria-label='Twitter'
          >
            <Twitter />
          </Link>

          <Link
            className=''
            href='https://modernizedandroidgyaru.bandcamp.com/'
            aria-label='BandCamp'
          >
            <BandCamp />
          </Link>
        </div>
      </div>
    </nav>
  )
};

export default NavBar;