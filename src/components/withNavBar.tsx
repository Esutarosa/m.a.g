'use client'

import type { FC } from 'react'
import NavBar from './Containers/NavBar/NavBar'

import { NAVBAR_CATEGORIES as setCategories } from '@/config/categories';

const WithNavBar: FC = () => {
  return (
    <div>
      <NavBar
        onThemeTogglerClick={() => console.log('...')}
        navItems={setCategories.map(({ name, href, key }) => ({ text: name, href, key }))}
      />
    </div>
  )
};

export default WithNavBar;