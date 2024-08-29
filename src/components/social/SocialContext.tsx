'use client';

import { createContext } from 'react';

import { SocialContextType } from '@/types';

const SocialContext = createContext<SocialContextType | undefined>(undefined);

export default SocialContext;