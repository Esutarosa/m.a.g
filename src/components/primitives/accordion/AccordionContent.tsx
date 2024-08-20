import type { FC, PropsWithChildren } from 'react';

import { motion, AnimatePresence, type Variants } from 'framer-motion';

import { useAccordion } from '@/hooks/useAccordion';

interface AccordionContentProps extends PropsWithChildren {
  expanded?: boolean;
  className?: string;
}

const AccordionContent: FC<AccordionContentProps> = ({
  children,
  expanded,
  className,
}) => {
  const { variants } = useAccordion();
  const BASE_VARIANTS: Variants = {
    expanded: {
      height: 'auto'
    },
    collapsed: {
      height: 0
    },
  };

  const combinedVariants = {
    expanded: {
      ...BASE_VARIANTS.expanded,
      ...variants?.expanded
    },
    collapsed: {
      ...BASE_VARIANTS.collapsed,
      ...variants?.collapsed
    },
  };
  return (
    <AnimatePresence>
      {expanded && (
        <motion.div
          initial='collapsed'
          animate='expanded'
          exit='collapsed'
          variants={combinedVariants}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AccordionContent;