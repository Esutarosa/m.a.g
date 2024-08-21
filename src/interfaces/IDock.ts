import type { ReactNode } from 'react';

export interface IDock {
  items: {
    title: string;
    icon: ReactNode;
    href: string;
  }[];
}