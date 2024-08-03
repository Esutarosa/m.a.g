import {
  clsx,
  type ClassValue
} from 'clsx';

import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using `clsx` and merges them with `twMerge`.
 *
 * @param {...ClassValue[]} inputs - Class names to combine and merge.
 * @returns {string} - Combined and merged class names.
 *
 * @example
 * const className = cn('bg-red-500', 'text-white', 'p-4', { 'hidden': !isVisible });
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}