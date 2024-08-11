import type { FC } from 'react';

import type { HideNavFooter } from '@/interfaces/HideNavFooter';

import { motion, AnimatePresence } from "framer-motion";

import { useScrollVisibility } from '@/hooks/useScrollVisibility';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import { NavDesktop, NavMobile } from '@/components/nav';

import { siteConfig } from '@/config/site';

import Link from 'next/link';

import { cn } from '@/utils/cn';

interface NavProps extends HideNavFooter { }

const Nav: FC<NavProps> = ({ isHideNav }) => {
  const visible = useScrollVisibility();
  const { screenWidth } = useMediaQuery();

  return (
    <AnimatePresence mode='wait'>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 bg-background',
          'transition-colors duration-300 font-semibold',
          isHideNav && 'hidden'
        )}
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          delay: 0.05,
        }}
      >
        <div className={cn(
          'w-full flex 3xl:grid justify-between items-center container border-b border-border px-3 py-3',
          'grid-cols-1 3xl:grid-cols-3 transition-colors duration-300',
        )}>
          <div className='3xl:col-start-1'>
            <Link href='/' className='hover:text-primary transition-colors font-bold'>
              M.A.G
            </Link>
          </div>
          <div className='3xl:col-start-3'>
            {screenWidth >= 1800 ? (
              <NavDesktop data={siteConfig.navItems} />
            ) : (
              <NavMobile data={siteConfig.navItems} />
            )}
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}

export default Nav;