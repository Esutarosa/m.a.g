import type { FC, HTMLAttributeAnchorTarget } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import NavItem from './NavItem';
import { perspective, slideIn } from '@/anims/animMobileMenu';
import { MOBILE_SOCIAL as socials } from '@/config/Socials/mobile-menu-social';

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
              className='text-foreground text-lg'
            >
              <NavItem
                key={key}
                href={href}
                target={target}
                className='text-2xl'
              >
                {text}
              </NavItem>
            </motion.div>
          </div>
        ))}
      </div>

      <motion.div
        className='flex flex-wrap items-center justify-between px-6 pb-2 gap-6'
      >
        {socials.map(({ href, key, icon, label }) => (
          <motion.div
            key={key}
            variants={slideIn}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <Link
              className='text-foreground'
              target='_blank'
              href={href}
              aria-label={label}
            >
              {icon}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </nav>
  )
};

export default NavMobile;