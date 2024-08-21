/**
 * Custom hook to detect user preference for reduced motion.
 *
 * Uses the `prefers-reduced-motion` media query to determine if the user prefers
 * reduced motion, and updates the state when the preference changes.
 *
 * @returns {boolean} `true` if the user prefers reduced motion, `false` otherwise.
 *
 * @example
 * const prefersReducedMotion = usePrefersReducedMotion();
 * console.log(prefersReducedMotion); // true or false
 */
import { useEffect, useState } from 'react';

const MEDIA_QUERY_SELECTOR = '(prefers-reduced-motion: reduce)';
const MEDIA_QUERY_EVENT = 'change';

const safelyGetMediaQuery = () => typeof window !== 'undefined'
  ? window.matchMedia(MEDIA_QUERY_SELECTOR)
  : undefined;

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(
    safelyGetMediaQuery()?.matches ?? false
  );

  useEffect(() => {
    const mediaQuery = safelyGetMediaQuery();

    const listener = () => {
      setPrefersReducedMotion(mediaQuery?.matches ?? false);
    };

    mediaQuery?.addEventListener(MEDIA_QUERY_EVENT, listener);
    return () => mediaQuery?.removeEventListener(MEDIA_QUERY_EVENT, listener);
  }, []);

  return prefersReducedMotion;
};

export { usePrefersReducedMotion };