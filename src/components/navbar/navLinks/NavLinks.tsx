"use client";

import { NAV_LINKS } from "@/lib/constants"
import NavLink from "./navLink/navLink";
import { useState, useEffect  } from "react";
import { MenuButton } from "../menuButton/MenuButton";

const NavLinks = () => {
  const session = true;
  const isAdmin = true;
  const [isOpen, setOpen] = useState(false);

  const renderLoggedInLinks = () => {
    return (
      <div>
        {isAdmin && <NavLink item={{ title: "Admin", path: "/admin", key: "admin" }} />}
        <button className="md:ml-[3rem]">Logout</button>
      </div>
    );
  };

  const renderMenu = () => {
    return (
      <div className="md:hidden fixed top-0 right-0 w-1/2 bg-gray-800 text-white h-full">
        <div className="flex flex-col items-end gap-4 my-[5rem] mx-[1.35rem]">
          {NAV_LINKS.map((link, index) => (
            <NavLink item={link} key={index} />
          ))}
          {session ? renderLoggedInLinks() : <NavLink item={{ title: "Login", path: "/login", key: "login" }} /> }
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-end items-center">
      <MenuButton 
        isOpen={isOpen}
        onClick={() => setOpen(!isOpen)}
        className="block md:hidden fixed top-0 right-0 m-4 p-2 bg-primary rounded z-10 w-[2rem] h-[2rem] select-none"
      /> 

      <ul className="hidden md:flex h-full gap-12">
        {NAV_LINKS.map((link, index) => (
          <NavLink item={link} key={index} />
        ))}
        {session ? renderLoggedInLinks() : <NavLink item={{ title: "Login", path: "/login", key: "login" }} /> }
      </ul>

      {isOpen && renderMenu()}
    </div>
  );
};

export default NavLinks