import type { Key } from 'react';

import type { Variant } from 'framer-motion';

export type AccordionContextType = {
  expandedValue: Key | null;
  toggleItem: (value: Key) => void;
  variants?: {
    expanded: Variant;
    collapsed: Variant;
  };
};