import type { FC } from 'react'
import { useEffect, useState } from 'react'

interface ModelProps {
  mouse: {
    x: number;
    y: number;
  }
}

const Model: FC<ModelProps> = ({ mouse }) => {
  const [isActive, setIsActive] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      if (isActive === 11) {
        setIsActive(1);
      } else {
        setIsActive(isActive + 1);
      }
    }, 2000)
  }, [isActive])

  return (
    <group>
      Model
    </group>
  )
}

export default Model