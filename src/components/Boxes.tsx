import type { FC } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

import RenderSVG from '@/components/RenderSVG';

interface BoxesProps { className?: string }

const AxisBoxe: FC<BoxesProps> = ({ className, ...props }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);

  return (
    <div
      style={{
        transform: 'translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)',
      }}
      className={cn(
        'absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0',
        className
      )}
      {...props}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className='w-16 h-8 relative'
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: 'hsl(240 10% 3.9%)',
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className='w-16 h-8 border-r border-t border-accent/75 relative'
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <RenderSVG
                  icon='M12 6v12m6-6H6'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='absolute h-6 w-10 -top-[14px] -left-[22px] text-accent/75 stroke-[1px] pointer-events-none'
                />
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

export {
  AxisBoxe
};