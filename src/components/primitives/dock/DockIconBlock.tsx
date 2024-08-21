'use client';

import {
  useRef,
  useState,
  type FC,
  type ReactNode
} from 'react';

import {
  AnimatePresence,
  motion,
  MotionValue,
  useSpring,
  useTransform
} from 'framer-motion';

import Link from 'next/link';

import { cn } from '@/utils/cn';

interface DockIconBlockProps {
  mouseX: MotionValue;
  title: string;
  icon: ReactNode;
  href: string;
}

const DockIconBlock: FC<DockIconBlockProps> = ({
  mouseX,
  title,
  icon,
  href,
}) => {
  const [hovered, setHovered] = useState<boolean>(false);

  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(
    distance,
    [-150, 0, 150],
    [40, 80, 40]
  );
  let heightTransform = useTransform(
    distance,
    [-150, 0, 150],
    [40, 80, 40]
  );

  let widthTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          'relative aspect-square rounded-full',
          'flex items-center justify-center',
          'bg-accent',
        )}>
        <AnimatePresence>
          {hovered &&
            <motion.div
              initial={{ opacity: 0, y: 10, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: 2, x: '-50%' }}
              className={cn(
                'px-2 py-0.5 whitespace-pre rounded-md',
                'bg-accent border border-border',
                'absolute left-1/2 -translate-x-1/2 -top-8',
                'w-fit text-xs'
              )}>
              {title}
            </motion.div>}
        </AnimatePresence>
        {icon &&
          <motion.div
            className='flex items-center justify-center'
            style={{
              width: widthIcon,
              height: heightIcon
            }}>
            {icon}
          </motion.div>}
      </motion.div>
    </Link>
  );
}

export default DockIconBlock;