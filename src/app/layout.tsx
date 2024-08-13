import type { FC, PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { NextUIProvider } from '@/providers';

import { openSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';

import { cn } from '@/utils/cn';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn(
        'bg-background text-foreground',
        openSans.className
      )}>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}

export default RootLayout;