import type { FC, Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import { useKey } from 'react-use';

import { nav } from '@/data/Nav';
import { cn } from '@/lib/utils';
import MenuItem from '@/components/Nav/MenuItem';

import { PRESS_START_2P as PressStart2P } from '@/../../next.fonts';

interface HomePageMobileMenuProps {
  menuIsActive: boolean
  setMenuIsActive: Dispatch<SetStateAction<boolean>>
}

const anims = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0 } },
}

const HomePageMobileMenu: FC<HomePageMobileMenuProps> = ({ menuIsActive, setMenuIsActive }) => {
  useKey('Escape', () => setMenuIsActive(false));

  return (
    <>
      {menuIsActive && <motion.div
        initial='hidden'
        variants={anims}
        animate={menuIsActive ? 'visible' : 'hidden'}
        className={cn('absolute flex flex-col items-center gap-8 justify-center bg-background min-w-[320px] h-screen w-full -z-10',
          PressStart2P.className
        )}
      >
        {nav.map((item) => (
          <MenuItem
            key={item.key}
            href={item.href}
            title={item.text}
            target={item.target}
          />
        ))}
      </motion.div>}
    </>
  );
}

export default HomePageMobileMenu;
