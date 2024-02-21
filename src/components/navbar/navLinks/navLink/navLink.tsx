"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLinkProps { 
  item: { 
    title: string
    path: string
    key: string 
  } 
}

const NavLink = ({ item }: NavLinkProps) => {
  const pathName = usePathname()

  return (
    <Link 
      href={item.path}
      className={`
        block md:inline-block text-gray-200
        ${pathName === item.path ? "active" : ""}
      `}
    >
      {item.title}
    </Link>
  )
}

export default NavLink