import { useContext } from 'react';

import { AccordionContext } from '@/components/primitives/accordion';

export function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion must be used within an AccordionProvider');
  }
  return context;
}