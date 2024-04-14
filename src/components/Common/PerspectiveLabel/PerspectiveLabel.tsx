import { FC } from 'react';
import { cn } from '@/util/cn';

import style from './index.module.scss';

interface PerspectiveLabelProps { label: string; }

const PerspectiveLabel: FC<PerspectiveLabelProps> = ({ label }) => {
  return (
    <div className={cn(
      'flex flex-col justify-center items-center w-full h-full',
      style.label
    )}>
      <p>{label}</p >
      <p>{label}</p>
    </div>
  )
}

export default PerspectiveLabel