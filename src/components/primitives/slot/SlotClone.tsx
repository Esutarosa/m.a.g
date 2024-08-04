import {
  Children,
  forwardRef,
  cloneElement,
  isValidElement,
  type PropsWithChildren,
} from 'react';

import { mergeProps } from '@/utils/mergeProps';

import { composeRefs } from '@/utils/composeRefs';

import { getElementRef } from '@/utils/getElementRef';

/**
 * `SlotClone` is a component that clones its children, merging props and combining refs.
 * It applies `slotProps` to its children and handles ref composition.
 *
 * @param {SlotCloneProps} props - Properties for the `SlotClone` component, including children.
 * @param {React.Ref<any>} forwardedRef - Ref to be forwarded to the cloned child element.
 * @returns {JSX.Element | null} - Cloned child element with merged props and refs or null.
 */
const SlotClone = forwardRef<any, PropsWithChildren>((props, forwardedRef) => {
  const { children, ...slotProps } = props;

  if (isValidElement(children)) {
    const childrenRef = getElementRef(children);
    return cloneElement(children, {
      ...mergeProps(slotProps, children.props),
      // @ts-ignore
      ref: forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef,
    });
  }

  return Children.count(children) > 1 ? Children.only(null) : null;
});

SlotClone.displayName = 'SlotClone';

export default SlotClone;