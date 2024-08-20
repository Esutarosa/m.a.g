'use client';

import {
  useState,
  type Key,
  type FC,
  type PropsWithChildren
} from 'react';

import type { Variant } from 'framer-motion';

import { AccordionContext } from '@/components/primitives/accordion';

interface AccordionProviderProps extends PropsWithChildren {
  variants?: {
    expanded: Variant;
    collapsed: Variant;
  };
}

const AccordionProvider: FC<AccordionProviderProps> = ({
  children,
  variants
}) => {
  const [expandedValue, setExpandedValue] = useState<Key | null>(null);

  const toggleItem = (value: Key) => {
    setExpandedValue(expandedValue === value ? null : value);
  };

  return (
    <AccordionContext.Provider value={{ expandedValue, toggleItem, variants }}>
      {children}
    </AccordionContext.Provider>
  );
}

export default AccordionProvider;