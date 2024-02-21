"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLinkProps { 
  item: { 
    title: string
    path: string
    key: string 
  }
  onClick ?: () => void
}

const NavLink = ({ item, onClick }: NavLinkProps) => {
  const pathName = usePathname()

  return (
    <Link 
      href={item.path}
      onClick={onClick}
      className={`block lg:inline-block text-muted-foreground py-2 ${pathName === item.path ? "active" : ""}`}
    >
      {item.title}
    </Link>
  )
}

export default NavLink