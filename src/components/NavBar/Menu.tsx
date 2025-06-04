"use client";
import MainMenu from "./Main";
import { DOAR_URL } from "../../utils";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathName = usePathname();

  return (
    <div className="self-start w-full mt-4 mb-15 md:hidden lg:hidden">
      <nav className="custom-nav flex flex-col gap-4 justify-center text-sm">
        <a className="flex" href={DOAR_URL} target="_blank">
          <span className="animate-heartbeat">{"\u2764\uFE0F"} DOAR</span>
        </a>
        <a href={"/casadamiao"} rel="noopener noreferrer">
          <span className={`${pathName === "/a-casa-damiao" && "opacity-50"}`}>
            BEM-VINDO{" "}
          </span>
        </a>
        <a href={"/a-casa-damiao"} rel="noopener noreferrer">
          <span className={`${pathName === "/a-casa-damiao" && "opacity-50"}`}>
            SOBRE NÓS
          </span>
        </a>
        <MainMenu onNavBar={true} />
      </nav>
    </div>
  );
};

export default Menu;
