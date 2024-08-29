'use client';

import type { FC, PropsWithChildren } from 'react';

import type { SocialContextType } from '@/types';

import { SocialContext } from '@/components/social';

interface SocialProviderProps extends PropsWithChildren<SocialContextType> { }

const SocialProvider: FC<SocialProviderProps> = ({ children, socialLinks }) => (
  <SocialContext.Provider value={{ socialLinks }}>
    {children}
  </SocialContext.Provider>
);

export default SocialProvider;