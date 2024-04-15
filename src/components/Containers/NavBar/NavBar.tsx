'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC, HTMLAttributeAnchorTarget } from "react";

import BandCamp from '@/components/Icons/Social/BandCamp';
import Twitter from '@/components/Icons/Social/Twitter';
import NavItem from './NavItem';
import NavMobile from './NavMobile';
import MobileMenuButton from '../../Common/MobileMenuButton/MobileMenuButton';
import { variants as menu } from '@/anims/animMobileMenu';

import { AnimatePresence, motion } from 'framer-motion';
import { NAVBAR_CATEGORIES as setCategories } from '@/config/categories';

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
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className='w-full h-16 px-2 flex items-center justify-between'>
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

        <motion.div
          className='absolute w-[75%] h-[480px] rounded-[1.5rem] bg-accent-foreground overflow-hidden'
          variants={menu}
          animate={isActive ? 'open' : 'closed'}
          initial='closed'
        >
          <AnimatePresence>
            {isActive && (<NavMobile navMobileItems={setCategories} />)}
          </AnimatePresence>
        </motion.div>

        <MobileMenuButton
          isActiveMenu={isActive}
          isToggleMenuClick={() => { setIsActive(!isActive) }}
        />
      </div>

      <div className='hidden'>
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
    </nav >
  )
};

export default NavBar;