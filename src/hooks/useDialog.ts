/**
 * Custom hook to access the Dialog context.
 *
 * Must be used within a `DialogProvider`.
 *
 * @returns {DialogContextType} The dialog context value.
 * @throws {Error} If used outside of a `DialogProvider`.
 *
 * @example
 * const { openDialog, closeDialog } = useDialog();
 */
import { useContext } from 'react';

import { DialogContext } from '@/components/primitives/dialog';

export function useDialog() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
}