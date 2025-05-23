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
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrolled(window.scrollY > 50);
      }, 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`mb-6 text-sm bg-menu-background text-foreground ${
        scrolled
          ? "text-xs"
          : "text-sm"
      }`}
    >
      <div className="flex flex-col justify-between px-4 items-center gap-2 md:flex-row sm:flex-col">
        <CasaDamiaoImage scrolled={scrolled} />
        <div className="flex-1"></div>
        <Nav />
        <button
          className="flex items-center gap-0.5 text-blue-900 hover:text-blue-600 font-semibold md:hidden lg:hidden mb-2"
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
