"use client";

import { NAV_LINKS } from "@/lib/constants"
import NavLink from "./navLink/NavLink";
import { useState } from "react";
import { MenuButton } from "@/ui/MenuButton";

const NavLinks = () => {
  const session = true
  const isAdmin = true
  const [isOpen, setOpen] = useState(false)

  const closeMenuOnClick = () => setOpen(false)

  const renderLoggedInLinks = () => {
    return (
      <div className={`xs:flex xs:items-center ${isAdmin ? 'xs:border xs:border-secondary xs:rounded-[.5rem] xs:pr-[.1rem] xs:pl-4 ' : ''}`}>
        {isAdmin && (
          <div className="lg:mr-[1rem] mr-[.75rem]">
            <NavLink
              item={{ title: "Admin", path: "/admin", key: "admin" }}
              onClick={closeMenuOnClick}
            />
          </div>
        )}
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 mt-4 xs:mt-0">Sign Out</button>
      </div>
    )
  }

  const renderMenu = () => {
    return (
      <div className="z-20 lg:hidden fixed top-0 right-0 w-[100%] xs:w-[55%] border-l border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85 transition-all duration-100 h-full overflow-y-auto">
        <div className="flex flex-col items-start gap-4 my-[5rem] mx-[1.35rem]">
          {NAV_LINKS.map((link, index) => (
            <NavLink
              item={link}
              key={index}
              onClick={closeMenuOnClick}
            />
          ))}
          {session ? renderLoggedInLinks() : <NavLink item={{ title: "Login", path: "/login", key: "login" }} onClick={closeMenuOnClick} />}
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-end items-center">
      <MenuButton
        isOpen={isOpen}
        onClick={() => setOpen(!isOpen)}
        className="block cursor-pointer lg:hidden fixed top-0 right-0 m-4 p-2 bg-primary rounded z-50 w-[2rem] h-[2rem] select-none"
      />

      <ul className="hidden lg:flex h-full gap-12">
        {NAV_LINKS.map((link, index) => (
          <NavLink
            item={link}
            key={index}
            onClick={closeMenuOnClick}
          />
        ))}
        {session ? renderLoggedInLinks() : <NavLink item={{ title: "Login", path: "/login", key: "login" }} onClick={closeMenuOnClick} />}
      </ul>

      {isOpen && renderMenu()}
    </div>
  )
}

export default NavLinks