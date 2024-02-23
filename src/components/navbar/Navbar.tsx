"use client"

import { useState, useEffect } from 'react'
import Links from "./navLinks/NavLinks"

const Navbar = () => {
  const [header, setHeader] = useState(false)

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 380 ? setHeader(true) : setHeader(false)
    }
    window.addEventListener('scroll', scrollHandler)
  
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <header className={`w-full z-50 ${header ? 
      'lg:sticky lg:top-0 lg:left-0 lg:bg-background/95 lg:backdrop-blur lg:supports-[backdrop-filter]:bg-background/90 transition-all duration-100' 
      : 
      ''} sticky lg:static top-0 left-0 border-b border-border/40 bg-background lg:bg-transparent h-[4rem] shadow-md`}
    >
      <nav className="flex justify-center py-2.5">
        <Links />
      </nav>
    </header>
  )
}

export default Navbar