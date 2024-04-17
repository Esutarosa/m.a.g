'use client'

import type { FC } from 'react'
import { useEffect } from 'react'

import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { useMotionValue, useSpring } from "framer-motion"

interface WithFloatShapeProps { }

const WithFloatShape: FC<WithFloatShapeProps> = ({ }) => {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  }

  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 75, damping: 100, mass: 3 }),
    y: useSpring(mouse.y, { stiffness: 75, damping: 100, mass: 3 }),
  }

  const manageMouse = (event: MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = event;

    const x = clientX / innerWidth;
    const y = clientY / innerHeight;

    mouse.x.set(x);
    mouse.y.set(y);
  }

  useEffect(() => {
    window.addEventListener('mousemove', manageMouse);
    return () => window.removeEventListener('mousemove', manageMouse);
  }, [])

  return (
    <Canvas>
      <Environment preset='studio' />
    </Canvas>
  )
}

export default WithFloatShape