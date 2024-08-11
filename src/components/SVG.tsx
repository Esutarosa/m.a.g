import type { FC, ReactNode } from 'react';

import { Slot } from '@/components/primitives/slot';

interface SVGProps {
  icon: string | ReactNode;
  width?: number;
  height?: number;
  viewBox?: string;
  stroke?: string;
  strokeWidth?: number | string;
  strokeLinecap?: 'butt' | 'square' | 'round';
  strokeLinejoin?: 'bevel' | 'miter' | 'round';
  className?: string;
  pathFill?: string;
}

const SVG: FC<SVGProps> = ({
  icon,
  width = 24,
  height = 24,
  viewBox = '0 0 24 24',
  stroke,
  strokeWidth,
  strokeLinecap,
  strokeLinejoin,
  className,
  pathFill = 'currentColor',
  ...props
}) => {
  if (typeof icon === 'string') {
    return (
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        stroke={stroke}
        strokeWidth={strokeWidth}
        className={className}
        {...props}
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
          d={icon}
          fill={pathFill}
        />
      </svg>
    );
  }

  return (
    <Slot className={className} {...props}>
      {icon}
    </Slot>
  );
};

export default SVG;
