import { BASE_URL, DOAR_URL } from "../utils";

const Nav = () => {
  return (
    <nav className="hidden gap-6 mr-6 md:gap-4 md:flex lg:flex ">
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
        href={`${BASE_URL}acasadamiao/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>SOBRE NÓS</span>
      </a>
      <a
        href={`${BASE_URL}acasadamiao/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>CONTATOS</span>
      </a>
    </nav>
  );
};

export default Nav;
