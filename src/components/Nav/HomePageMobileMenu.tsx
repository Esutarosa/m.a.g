'use client';

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

const menuItemAnims = {
  initial: { opacity: 0 },
  open: { opacity: 1 },
  exit: { opacity: 0 }
}

const bgAnims = {
  initial: { opacity: 0 },

  open: (index: number) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.015 * index }
  }),

  closed: (index: number) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.015 * index }
  })
}

const HomePageMobileMenu: FC<HomePageMobileMenuProps> = ({ menuIsActive, setMenuIsActive }) => {
  useKey('Escape', () => setMenuIsActive(false))

  const shuffle = (array: number[]) => {
    let randomIndex: number, temporaryValue: number, currentIndex: number;
    for (currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
      randomIndex = Math.floor(Math.random() * (currentIndex + 1));
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  const getBlocks = () => {
    if (typeof window === 'undefined') return null;
    const { innerWidth, innerHeight } = window;
    const blockSize = innerWidth * 0.05;
    const nbOfBlocks = Math.ceil(innerHeight / blockSize);
    const shuffledIndexes = shuffle([...Array(nbOfBlocks)].map((_, i) => i))
    return shuffledIndexes.map((randomIndex: number, index: number) => (
      <motion.div
        key={index}
        initial="initial"
        custom={randomIndex}
        variants={bgAnims}
        animate={menuIsActive ? "open" : "closed"}
        className='w-full h-[5vw] bg-background'
      />
    ))
  }

  return (
    <>
      <motion.div
        initial='initial'
        variants={menuItemAnims}
        animate={menuIsActive ? 'open' : 'closed'}
        className={cn(
          'absolute flex flex-col items-center gap-8 justify-center min-w-[320px] h-screen w-full z-[3]',
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

      <div className='absolute inset-0 flex w-full h-screen pointer-events-none overflow-hidden'>
        {[...Array(20)].map((_, index) => (
          <div key={index} className='flex flex-col w-[5vw] h-full'>
            {getBlocks()}
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePageMobileMenu;
