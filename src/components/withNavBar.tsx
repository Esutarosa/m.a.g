'use client'

import NavBar from './Containers/NavBar/NavBar'
import type { FC } from 'react'

import { NAVBAR_CATEGORIES as setCategories } from '@/config/categories';

const WithNavBar: FC = () => {
  return (
    <header className='sticky top-0 z-50 min-w-[320px] w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90'>
      <NavBar
        navItems={setCategories.map(({ text, href, key }) => ({
          text,
          href,
          key
        }))}
      />
    </header>
  )
};

export default WithNavBar;