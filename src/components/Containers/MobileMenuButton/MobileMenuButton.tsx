import { FC } from 'react'
import { motion } from 'framer-motion'

interface MobileMenuButtonProps {
  isActiveMenu: boolean;
  isToggleMenuClick: () => void;
}

const MobileMenuButton: FC<MobileMenuButtonProps> = ({ isActiveMenu, isToggleMenuClick }) => {
  return (
    <div className='w-[4rem] h-[1.5rem]'>
      <motion.div
        className=''
        animate={{ top: isActiveMenu ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className=''
          onClick={() => isToggleMenuClick()}
        >
          <PerspectiveLabel label="Menu" />
        </div>

        <div
          className=''
          onClick={() => isToggleMenuClick()}
        >
          <PerspectiveLabel label="Close" />
        </div>
      </motion.div>
    </div>
  )
}

export default MobileMenuButton