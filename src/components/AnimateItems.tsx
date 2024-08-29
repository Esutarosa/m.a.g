'use client';

import {
  useRef,
  type FC,
  type ReactNode,
} from 'react';

import type { AnimationType } from '@/types';

import { Variant, motion } from 'framer-motion';

import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

import { useAppState } from '@/config/state/AppState';

export interface AnimationConfig {
  type?: AnimationType;
  duration?: number;
  staggerDelay?: number;
  scaleOffset?: number;
  distanceOffset?: number;
}

interface AnimateItemsProps extends AnimationConfig {
  className?: string;
  classNameItem?: string;
  content: ReactNode | ReactNode[];
  itemKeys?: string[];
  canStart?: boolean;
  animateFromAppState?: boolean;
  animateOnFirstLoadOnly?: boolean;
  staggerOnFirstLoadOnly?: boolean;
  onAnimationComplete?: () => void;
}

const AnimateItems: FC<AnimateItemsProps> = ({
  className,
  classNameItem,
  content,
  itemKeys,
  canStart = true,
  type = 'scale',
  duration = 0.6,
  staggerDelay = 0.1,
  scaleOffset = 0.9,
  distanceOffset = 20,
  animateFromAppState,
  animateOnFirstLoadOnly,
  staggerOnFirstLoadOnly,
  onAnimationComplete,
}) => {
  const {
    hasLoaded,
    nextImageAnimation,
    clearNextAnimation
  } = useAppState();

  const prefersReducedMotion = usePrefersReducedMotion();

  const hasLoadedInitial = useRef(hasLoaded);
  const nextImageAnimationInitial = useRef(nextImageAnimation);

  const shouldAnimate = type !== 'none' &&
    !prefersReducedMotion &&
    !(animateOnFirstLoadOnly && hasLoadedInitial.current);

  const shouldStagger =
    !(staggerOnFirstLoadOnly && hasLoadedInitial.current);

  const typeResolved = animateFromAppState
    ? (nextImageAnimationInitial.current?.type ?? type)
    : type;

  const durationResolved = animateFromAppState
    ? (nextImageAnimationInitial.current?.duration ?? duration)
    : duration;

  const parseArrayItems = Array.isArray(content) ? content : [content];

  const getInitialVariant = (): Variant => {
    const baseVariant = { opacity: 0 };
    switch (typeResolved) {
      case 'left': return {
        ...baseVariant,
        x: distanceOffset
      };
      case 'right': return {
        ...baseVariant,
        x: -distanceOffset
      };
      case 'bottom': return {
        ...baseVariant,
        y: distanceOffset
      };
      default: return {
        ...baseVariant,
        y: distanceOffset,
        scale: scaleOffset
      };
    }
  };

  return (
    <motion.div
      className={className}
      initial={shouldAnimate ? 'hidden' : false}
      animate={canStart ? 'show' : 'hidden'}
      variants={shouldStagger ? {
        show: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      } : undefined}
      onAnimationComplete={() => {
        if (animateFromAppState) {
          clearNextAnimation?.();
        }
        onAnimationComplete?.();
      }}>
      {parseArrayItems.map((item, index) =>
        <motion.div
          key={itemKeys ? itemKeys[index] : index}
          className={classNameItem}
          variants={{
            hidden: getInitialVariant(),
            show: {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            },
          }}
          transition={{
            duration: durationResolved,
            easing: 'easeOut',
          }}>
          {item}
        </motion.div>
      )}
    </motion.div>
  );
};

export default AnimateItems;