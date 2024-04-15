import type { FC, HTMLAttributeAnchorTarget } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import NavItem from './NavItem';
import { perspective, slideIn } from '@/anims/animMobileMenu';

import BandCamp from '@/components/Icons/Social/BandCamp';
import Twitter from '@/components/Icons/Social/Twitter';

interface NavMobileProps {
  navMobileItems: Array<{
    text: string;
    href: string;
    key: string;
    target?: HTMLAttributeAnchorTarget | undefined;
  }>;
};

const NavMobile: FC<NavMobileProps> = ({
  navMobileItems
}) => {
  return (
    <nav className='flex flex-col justify-between h-full px-6 pt-20 pb-6'>
      <div className='flex flex-col gap-2'>
        {navMobileItems.map(({ text, href, key, target }) => (
          <div
            key={key}
            className='perspective'
          >
            <motion.div
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
              className='text-accent text-lg'
            >
              <NavItem
                key={key}
                href={href}
                target={target}
                className='text-3xl'
              >
                {text}
              </NavItem>
            </motion.div>
          </div>
        ))}
      </div>

      <motion.div
        className='flex flex-wrap items-center justify-between px-6 pb-6 gap-6'
      >
        <motion.div
          key='twitter'
          variants={slideIn}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Link
            className='text-accent'
            href='https://twitter.com/AndroidGyaru'
            aria-label='Twitter'
          >
            <Twitter
              className='w-8 h-8'
            />
          </Link>
        </motion.div>

        <motion.div
          key='bandcamp'
          variants={slideIn}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Link
            className='text-accent'
            href='https://modernizedandroidgyaru.bandcamp.com/'
            aria-label='BandCamp'
          >
            <BandCamp
              className='w-10 h-10'
            />
          </Link>
        </motion.div>
      </motion.div>
    </nav>
  )
};

export default NavMobile;