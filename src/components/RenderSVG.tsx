import type { FC } from 'react';

interface RenderSVGProps {
  icon: string
  width?: number
  height?: number
  viewBox?: string
  stroke?: string
  strokeWidth?: number | string
  strokeLinecap?: 'butt' | 'square' | 'round'
  strokeLinejoin?: 'bevel' | 'miter' | 'round'
  className?: string
  pathFill?: string
}

const RenderSVG: FC<RenderSVGProps> = ({
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
        clipPath='evenodd'
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        d={icon}
        fill={pathFill}
      />
    </svg>
  );
}

export default RenderSVG;