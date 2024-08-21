/**
 * Custom hook to access the Accordion context.
 *
 * Must be used within an `AccordionProvider`.
 *
 * @returns {AccordionContextType} The accordion context value.
 * @throws {Error} If used outside of an `AccordionProvider`.
 *
 * @example
 * const { isOpen, toggle } = useAccordion();
 */
import { useContext } from 'react';

import { AccordionContext } from '@/components/primitives/accordion';

export function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion must be used within an AccordionProvider');
  }
  return context;
}