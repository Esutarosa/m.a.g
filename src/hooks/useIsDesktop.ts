import { useState, useEffect } from 'react';

/**
 * Custom hook that checks if the viewport width is greater than or equal to a specified breakpoint.
 *
 * @param {number} [breakpoint=1140] - The width in pixels to determine if the screen is considered "desktop".
 * @returns {boolean} - True if the viewport width is greater than or equal to the breakpoint, otherwise false.
 *
 * @example
 * const isDesktop = useIsDesktop();
 */
const useIsDesktop = (breakpoint = 1140) => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isDesktop;
};

export { useIsDesktop };