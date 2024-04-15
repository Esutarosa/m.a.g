'use client'

import type { FC } from 'react'
import NavBar from './Containers/NavBar/NavBar'

import { NAVBAR_CATEGORIES as setCategories } from '@/config/categories';

const WithNavBar: FC = () => {
  return (
    <header className='sticky top-0 z-50 min-w-[320px] w-full'>
      <NavBar
        onThemeTogglerClick={() => console.log('...')}
        navItems={setCategories.map(({ text, href, key }) => ({ text, href, key }))}
      />
    </header>
  )
};

export default WithNavBar;