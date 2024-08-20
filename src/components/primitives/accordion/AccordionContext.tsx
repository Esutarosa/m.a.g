import { createContext } from 'react';

import type { AccordionContextType } from '@/types/TAccordionContext';

export const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

export default AccordionContext;