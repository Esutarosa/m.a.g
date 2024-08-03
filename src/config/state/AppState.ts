import { createContext, useContext } from 'react';

import type { AnimationConfig } from '@/types/AnimationConfig';

export interface AppStateContext {
  hasLoaded?: boolean;
  nextImageAnimation?: AnimationConfig;
  clearNextAnimation?: () => void;
  shouldDebugImageFallbacks?: boolean;
}

export const AppStateContext = createContext<AppStateContext>({});

export const useAppState = () => useContext(AppStateContext);