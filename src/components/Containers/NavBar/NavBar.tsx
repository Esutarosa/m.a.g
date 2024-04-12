'use client'

import { useState } from 'react';
import type { FC, HTMLAttributeAnchorTarget } from "react";

type NavbarProps = {
  navItems: Array<{
    text: string;
    link: string;
    target?: HTMLAttributeAnchorTarget | undefined;
  }>;
  onThemeTogglerClick: () => void;
}

const NavBar: FC<NavbarProps> = ({
  navItems,
  onThemeTogglerClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div>

      </div>
    </nav>
  )
}

export default NavBar;