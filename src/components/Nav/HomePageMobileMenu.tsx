import type { FC, Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import { useKey } from 'react-use';

import { nav } from '@/data/Nav';
import { cn } from '@/lib/utils';
import MenuItem from '@/components/Nav/MenuItem';

import { PRESS_START_2P as PressStart2P } from "@/../../next.fonts";

interface HomePageMobileMenuProps {
  menuIsActive: boolean
  setMenuIsActive: Dispatch<SetStateAction<boolean>>
}

const anim = {
  initial: { opacity: 0 },
  open: { opacity: 1 },
  exit: { opacity: 0 }
}

const HomePageMobileMenu: FC<HomePageMobileMenuProps> = ({ menuIsActive, setMenuIsActive }) => {
  useKey('Escape', () => setMenuIsActive(false))

  return (
    <>
      <motion.div
        variants={anim}
        initial='initial'
        animate={menuIsActive ? 'open' : 'closed'}
        className={cn(
          'fixed flex flex-col items-center justify-center gap-8 bg-background min-w-[320px] h-screen w-full',
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
      </motion.div>
    </>
  );
}

export default HomePageMobileMenu;
