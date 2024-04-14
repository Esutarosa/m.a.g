'use client'

import type { FC } from 'react'
import NavBar from './Containers/NavBar/NavBar'

import { NAVBAR_CATEGORIES as setCategories } from '@/config/categories';

const WithNavBar: FC = () => {
  return (
    <header className='fixed top-0 right-0 w-full'>
      <NavBar
        onThemeTogglerClick={() => console.log('...')}
        navItems={setCategories.map(({ name, href, key }) => ({ text: name, href, key }))}
      />
    </header>
  )
};

export default WithNavBar;