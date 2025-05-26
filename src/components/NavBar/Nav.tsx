"use client";
import { usePathname } from "next/navigation";
import { DOAR_URL } from "../../utils";

const Nav = () => {
  const pathName = usePathname();
  return (
    <nav className="hidden gap-6 mr-6 md:gap-4 md:flex lg:flex ">
      <a className="flex" href={DOAR_URL} target="_blank">
        <span className="animate-heartbeat">{"\u2764\uFE0F"} DOAR</span>
      </a>
      <a href={"/a-casa-damiao/"} rel="noopener noreferrer">
        <span className={`${pathName === "/a-casa-damiao" && "opacity-50"}`}>
          BEM-VINDO
        </span>
      </a>
      <a href={"/casadamiao/"} rel="noopener noreferrer">
        <span className={`${pathName === "/casadamiao" && "opacity-50"}`}>
          SOBRE NÓS
        </span>
      </a>
      <a href={"/contatos/"} rel="noopener noreferrer">
        <span className={`${pathName === "/contatos" && "opacity-50"}`}>
          CONTATOS
        </span>
      </a>
    </nav>
  );
};

export default Nav;
