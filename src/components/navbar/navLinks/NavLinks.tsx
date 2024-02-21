"use client";

import { NAV_LINKS } from "@/lib/constants"
import NavLink from "./navLink/NavLink";
import { useState } from "react";
import { MenuButton } from "../menuButton/MenuButton";

const NavLinks = () => {
  const session = true
  const isAdmin = true
  const [isOpen, setOpen] = useState(false)
  
  const closeMenuOnClick = () => setOpen(false)

  const renderLoggedInLinks = () => {
    return (
      <div className="xs:flex xs:items-center">
        {isAdmin && (
          <div className="lg:mr-[3rem] mr-[1.5rem]">
            <NavLink 
              item={{ title: "Admin", path: "/admin", key: "admin" }} 
              onClick={closeMenuOnClick} 
            />
          </div>
        )}
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 mt-4 xs:mt-0">Logout</button>
      </div>
    )
  }

  const renderMenu = () => {
    return (
      <div className="lg:hidden fixed top-0 right-0 w-[45%] bg-primary-foreground h-full overflow-y-auto">
        <div className="flex flex-col items-start gap-4 my-[5rem] mx-[1.35rem]">
          {NAV_LINKS.map((link, index) => (
            <NavLink 
              item={link} 
              key={index} 
              onClick={closeMenuOnClick} 
            />
          ))}
          {session ? renderLoggedInLinks() : <NavLink item={{ title: "Login", path: "/login", key: "login" }} onClick={closeMenuOnClick} /> }
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-end items-center">
      <MenuButton 
        isOpen={isOpen}
        onClick={() => setOpen(!isOpen)}
        className="block cursor-pointer lg:hidden fixed top-0 right-0 m-4 p-2 bg-primary rounded z-10 w-[2rem] h-[2rem] select-none"
      /> 

      <ul className="hidden lg:flex h-full gap-12">
        {NAV_LINKS.map((link, index) => (
          <NavLink 
            item={link} 
            key={index} 
            onClick={closeMenuOnClick} 
          />
        ))}
        {session ? renderLoggedInLinks() : <NavLink item={{ title: "Login", path: "/login", key: "login" }} onClick={closeMenuOnClick} /> }
      </ul>

      {isOpen && renderMenu()}
    </div>
  )
}

export default NavLinks