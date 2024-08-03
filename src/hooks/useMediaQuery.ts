import { useState, useEffect } from 'react';

/**
 * Custom hook to get the current viewport width and update it on resize.
 *
 * @returns {Object} - An object containing the current screen width.
 * @returns {number} screenWidth - The current width of the viewport.
 *
 * @example
 * const { screenWidth } = useMediaQuery();
 * console.log(screenWidth); // Outputs the current viewport width.
 */
const useMediaQuery = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return { screenWidth };
}

export { useMediaQuery };