import { isValidElement, ReactElement, ReactNode } from 'react';

import { Slottable } from '@/components/primitives/slot';

/**
 * Checks if a React node is a valid React element and if its type matches the `Slottable` component.
 * This is used to determine if a given React node can be treated as a "slot" element in a custom
 * component structure.
 *
 * @param {ReactNode} child - The React node to check.
 * @returns {boolean} - Returns `true` if the node is a valid React element and its type is `Slottable`,
 *                      otherwise `false`.
 */
function isSlottable(child: ReactNode): child is ReactElement {
  return isValidElement(child) && child.type === Slottable;
}

export { isSlottable };