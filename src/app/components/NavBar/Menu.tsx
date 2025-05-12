import MainMenu from "./Main";
import { BASE_URL, DOAR_URL } from "../../utils";

const Menu = () => {
  return (
    <div className="self-start w-full mt-4 mb-15 md:hidden lg:hidden">
      <nav className="custom-nav flex flex-col gap-4 justify-center text-sm">
        <a className="flex" href={DOAR_URL} target="_blank">
          <span className="animate-heartbeat">{"\u2764\uFE0F"} DOAR</span>
        </a>
        <a
          href={`${BASE_URL}a-casa-damiao/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>BEM-VINDO</span>
        </a>
        <a
          href={`${BASE_URL}a-casa-damiao/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>SOBRE NÓS</span>
        </a>
        <MainMenu onNavBar={true} />
        <a
          href={`${BASE_URL}acasadamiao/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>CONTATOS</span>
        </a>
      </nav>
    </div>
  );
};

export default Menu;
