'use client'

import type { FC } from 'react'
import NavBar from './Containers/NavBar/NavBar'

const WuthNavBar: FC = () => {

  return (
    <div>
      <NavBar
        onThemeTogglerClick={() => console.log('...')}
        navItems={[]}
      />
    </div>
  )
}