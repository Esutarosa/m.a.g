'use client';

import { createContext } from 'react';

interface SocialLink {
  platform: string;
  url: string;
  title?: string;
  subtitle?: string;
}

interface SocialContextProps {
  socialLinks: SocialLink[];
}

const SocialContext = createContext<SocialContextProps | undefined>(undefined);

export default SocialContext;