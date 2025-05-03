import { BASE_URL, DOAR_URL } from "../utils";
import CasaDamiaoImage from "../images/CasaDaniaoLogo";

const Header = () => {
  return (
    <header>
      <div className="w-full h-3 bg-blue-900"></div>
      <div className="flex justify-between">
        <CasaDamiaoImage />
        <nav className="flex gap-10 mr-20">
          <a
            className="flex items-center justify-center "
            href={DOAR_URL}
            target="_blank"
          >
            <span className="animate-heartbeat font-semibold hover:opacity-50">
              {"\u2764\uFE0F"} DOAR
            </span>
          </a>
          <a
            className="flex items-center justify-center"
            href={`${BASE_URL}a-casa-damiao/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-semibold hover:opacity-50 ">BEM-VINDO</span>
          </a>
          <a
            className="flex items-center justify-center"
            href={`${BASE_URL}acasadamiao/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-semibold hover:opacity-50">SOBRE NÓS</span>
          </a>
          <a
            className="flex items-center justify-center"
            href={`${BASE_URL}acasadamiao/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-semibold hover:opacity-50">CONTATOS</span>
          </a>
        </nav>
      </div>
    </header>
  );
};
export default Header;
