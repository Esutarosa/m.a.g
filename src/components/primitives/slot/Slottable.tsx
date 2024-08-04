import type { FC, PropsWithChildren } from 'react';

interface SlottableProps extends PropsWithChildren { }

/**
 * `Slottable` is a simple functional component used as a marker for slotted content.
 * It allows content to be identified and processed as a slot.
 *
 * @param {SlottableProps} props - Properties for the `Slottable` component, including children.
 * @returns {JSX.Element} - The children of the `Slottable` component.
 */
const Slottable: FC<SlottableProps> = ({ children }) => {
  return <>{children}</>;
}

export default Slottable;