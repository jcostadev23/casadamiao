"use client";

import { useEffect, useState } from "react";
import CasaDamiaoImage from "../images/CasaDaniaoLogo";
import MenuIcon from "./Icon";
import Menu from "./Menu";
import Nav from "./Nav";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`mb-10 text-sm px-4 bg-menu-background text-foreground ${
        scrolled
          ? "text-xs shadow-sm sticky top-0 z-10 transition-all duration-300"
          : "text-sm"
      }`}
    >
      <div className="flex flex-col justify-between px-8 items-center gap-4 mb-10 md:flex-row sm:flex-col">
        <CasaDamiaoImage scrolled={scrolled} />
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
