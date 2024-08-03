import { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

/**
 * Custom hook that determines the visibility of an element based on the scroll direction.
 * It sets the element to be visible when scrolling up and hides it when scrolling down.
 *
 * @returns {boolean} - True if the element should be visible, otherwise false.
 *
 * @example
 * const isVisible = useScrollVisibility();
 */
const useScrollVisibility = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      let direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.01) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return visible;
};

export { useScrollVisibility };