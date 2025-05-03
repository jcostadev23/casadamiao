import { BASE_URL, DOAR_URL } from "../utils";
import CasaDamiaoImage from "../images/CasaDaniaoLogo";

const Header = () => {
  return (
    <header className="flex justify-between m-5">
      <CasaDamiaoImage />
      <nav className="flex gap-10">
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
    </header>
  );
};
export default Header;
