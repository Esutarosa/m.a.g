import { ReactElement } from 'react';

/**
 * Retrieves the `ref` from a React element. This function handles different
 * possible locations for the `ref` property, accounting for potential React
 * warnings about accessing `ref` in certain ways.
 *
 * @param {ReactElement} element - The React element from which to retrieve the `ref`.
 * @returns {any} - The `ref` associated with the provided React element.
 */
export const getElementRef = (element: ReactElement) => {
  // Attempt to get the getter function for the 'ref' prop from the element's props
  let getter = Object.getOwnPropertyDescriptor(element.props, 'ref')?.get;

  // Check if the getter is a React warning function
  let mayWarn = getter && 'isReactWarning' in getter && getter.isReactWarning;
  if (mayWarn) {
    return (element as any).ref;
  }

  // Attempt to get the getter function for the 'ref' prop directly from the element
  getter = Object.getOwnPropertyDescriptor(element, 'ref')?.get;
  mayWarn = getter && 'isReactWarning' in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }

  // Return the 'ref' from props or from the element directly, if available
  return element.props.ref || (element as any).ref;
}