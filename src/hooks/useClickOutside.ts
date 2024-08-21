/**
 * Custom hook that triggers a handler when a click or touch event occurs outside of a referenced element.
 *
 * @param {RefObject<T>} ref - React ref object pointing to the element to detect outside clicks for.
 * @param {(event: MouseEvent | TouchEvent) => void} handler - Function to be called when an outside click or touch is detected.
 *
 * @template T - The type of the HTML element referenced by `ref`.
 *
 * @example
 * const ref = useRef(null);
 * useClickOutside(ref, () => {
 *   console.log('Clicked outside');
 * });
 */
import { RefObject, useEffect } from 'react';

function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void
): void {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!ref || !ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref, handler]);
}

export { useClickOutside };