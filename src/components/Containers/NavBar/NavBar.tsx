'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { FC, HTMLAttributeAnchorTarget } from "react";

import NavItem from './NavItem';
import NavMobile from './NavMobile';
import MobileMenuButton from '../../Common/MobileMenuButton/MobileMenuButton';
import { variants as menu } from '@/anims/animMobileMenu';
import { NAVBAR_SOCIAL as socials } from '@/config/Socials/navbar-menu-social';

import { AnimatePresence, motion } from 'framer-motion';
import { NAVBAR_CATEGORIES as setCategories } from '@/config/categories';
import Logo from '@/components/Icons/Logo';

type NavbarProps = {
  navItems: Array<{
    text: string;
    href: string;
    key: string;
    target?: HTMLAttributeAnchorTarget | undefined;
  }>;
};

const NavBar: FC<NavbarProps> = ({
  navItems,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className='w-full h-16 px-2 flex items-center'>
      <div className='md:hidden flex items-center'>
        <Link
          href='/'
          aria-label='Home'
        >
          <Logo className='w-12 h-12 rounded-full' />
        </Link>

        <motion.div
          className='absolute w-[75%] h-[480px] rounded-[1.5rem] border border-border/90 bg-background overflow-hidden'
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
          isToggleMenuClick={() => {
            setIsActive(!isActive)
          }}
        />
      </div>

      <div className='hidden md:flex container items-center justify-between w-full'>
        <div className='flex items-center'>
          <Link
            href='/'
            aria-label='Home'
          >
            <Logo className='w-12 h-12 rounded-full' />
          </Link>

          <div className='flex items-center mx-8 gap-4'>
            {navItems.map(({ text, href, key, target }) => (
              <NavItem key={key} href={href} target={target}>
                {text}
              </NavItem>
            ))}
          </div>
        </div>

        <div className='flex items-center gap-2'>
          {socials.map(({ href, key, icon, label }) => (
            <Link
              key={key}
              className='rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent p-2'
              target='_blank'
              href={href}
              aria-label={label}
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
};

export default NavBar;