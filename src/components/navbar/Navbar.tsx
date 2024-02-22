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
    <header className={`w-full z-50 ${header ? 'sticky top-0 left-0 lg:border-b lg:border-border/40 lg:bg-background/95 lg:backdrop-blur lg:supports-[backdrop-filter]:bg-background/60 transition-all duration-100' : ''}`}>
      <nav className="flex justify-center items-center py-4">
        <Links />
      </nav>
    </header>
  )
}

export default Navbar