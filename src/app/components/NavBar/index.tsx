"use client";

import { useState } from "react";
import CasaDamiaoImage from "../images/CasaDaniaoLogo";
import MenuIcon from "./Icon";
import Nav from "./Nav";
import Menu from "./Menu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="mb-20 text-sm">
      <div className="flex flex-col justify-between items-center gap-4 mb-10 md:flex-row sm:flex-col">
        <CasaDamiaoImage />
        <div className="flex-1"></div>
        <Nav />
        <button
          className="flex items-center gap-0.5 text-blue-900 hover:text-blue-600 font-semibold md:hidden lg:hidden mb-10"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <MenuIcon />
          MENU
        </button>
        {isOpen && <Menu />}
      </div>
    </header>
  );
};
export default NavBar;
