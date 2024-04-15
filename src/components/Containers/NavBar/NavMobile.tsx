import type { FC, HTMLAttributeAnchorTarget } from 'react';
import { motion } from 'framer-motion';

import NavItem from './NavItem';
import { perspective } from '@/anims/animMobileMenu';

interface NavMobileProps {
  navMobileItems: Array<{
    name: string;
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
        {navMobileItems.map(({ name, href, key, target }) => (
          <div
            key={`${key}`}
            className='perspective-link'
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
                {name}
              </NavItem>
            </motion.div>
          </div>
        ))}
      </div>
    </nav>
  )
};

export default NavMobile;