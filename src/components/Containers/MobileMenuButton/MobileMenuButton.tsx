import { FC } from 'react';
import { cn } from '@/util/cn';
import { motion } from 'framer-motion';

import PerspectiveLabel from '@/components/Common/PerspectiveLabel/PerspectiveLabel';

import style from './index.module.scss';

interface MobileMenuButtonProps {
  isActiveMenu: boolean;
  isToggleMenuClick: () => void;
}

const MobileMenuButton: FC<MobileMenuButtonProps> = ({
  isActiveMenu,
  isToggleMenuClick
}) => {
  return (
    <div className={cn(
      'absolute top-0 right-0 w-[100px] h-[45px] cursor-pointer rounded-[45px] overflow-hidden select-none',
      style.button
    )}>
      <motion.div
        className={cn('relative w-full h-full', style.slider)}
        animate={{ top: isActiveMenu ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className={cn('w-full h-full m-0', style.element)}
          onClick={() => isToggleMenuClick()}
        >
          <PerspectiveLabel label="Menu" />
        </div>

        <div
          className={cn('w-full h-full m-0', style.element)}
          onClick={() => isToggleMenuClick()}
        >
          <PerspectiveLabel label="Close" />
        </div>
      </motion.div>
    </div>
  )
}

export default MobileMenuButton