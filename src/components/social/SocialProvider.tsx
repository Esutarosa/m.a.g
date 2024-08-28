'use client';

import type { FC, PropsWithChildren } from 'react';

import { SocialContext } from '@/components/social';

interface SocialLink {
  platform: string;
  url: string;
  title?: string;
  subtitle?: string;
}

interface SocialProviderProps extends PropsWithChildren {
  socialLinks: SocialLink[];
}

const SocialProvider: FC<SocialProviderProps> = ({ children, socialLinks }) => (
  <SocialContext.Provider value={{ socialLinks }}>
    {children}
  </SocialContext.Provider>
);

export default SocialProvider;