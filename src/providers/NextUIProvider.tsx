'use client';

import type { FC, PropsWithChildren } from 'react';

import { NextUIProvider as UIProvider } from '@nextui-org/system';
import { useRouter } from 'next/navigation';

import { ThemeProviderProps } from 'next-themes/dist/types';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface NextUIProviderProps extends PropsWithChildren {
  themeProps?: ThemeProviderProps;
}

const NextUIProvider: FC<NextUIProviderProps> = ({ children, themeProps }) => {
  const router = useRouter();

  return (
    <UIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        {children}
      </NextThemesProvider>
    </UIProvider>
  );
}

export default NextUIProvider;