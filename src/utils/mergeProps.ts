import type { AnyProps } from '@/types';

/**
 * Merges properties from two sets of props, giving precedence to the `childProps`
 * when properties overlap. Special handling is provided for event handler functions,
 * `style`, and `className` properties.
 *
 * @param {AnyProps} slotProps - The initial set of props, which may be overridden by `childProps`.
 * @param {AnyProps} childProps - The props to merge into `slotProps`. These have higher precedence.
 * @returns {AnyProps} - A new object containing the merged props, with `childProps` taking precedence.
 */
const mergeProps = (slotProps: AnyProps, childProps: AnyProps) => {
  const overrideProps = { ...childProps };

  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];

    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args: unknown[]) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === 'style') {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === 'className') {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(' ');
    }
  }

  return { ...slotProps, ...overrideProps };
}

export { mergeProps };