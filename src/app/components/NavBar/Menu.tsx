import { BASE_URL, DOAR_URL } from "../utils";

const Menu = () => {
  return (
    <div className="self-start w-full mt-4 mb-15 md:hidden lg:hidden">
      <nav className="flex flex-col gap-4 justify-center text-sm">
        <a className="flex border-b py-2 " href={DOAR_URL} target="_blank">
          <span className="animate-heartbeat font-semibold hover:opacity-50">
            {"\u2764\uFE0F"} DOAR
          </span>
        </a>
        <a
          className="py-2 border-b"
          href={`${BASE_URL}a-casa-damiao/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-semibold hover:opacity-50 ">BEM-VINDO</span>
        </a>
        <a
          className="py-2 border-b"
          href={`${BASE_URL}acasadamiao/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-semibold hover:opacity-50">SOBRE NÓS</span>
        </a>
        <a className="py-2 px-4 border-b" href={`${BASE_URL}casadamiao/`}>
          <span className="font-semibold hover:opacity-50">CASA DAMIÃO</span>
        </a>
        <a className="py-2 px-4 border-b" href={`${BASE_URL}quem-somos/`}>
          <span className="font-semibold hover:opacity-50">QUEM SOMOS</span>
        </a>
        <a
          className="py-2 px-4 border-b"
          href={`${BASE_URL}visao-missao-e-valores/`}
        >
          <span className="font-semibold hover:opacity-50">
            VISÃO, MISSÃO E VALORES
          </span>
        </a>
        <a className="py-2 px-4 border-b" href={`${BASE_URL}parceiros/`}>
          <span className="font-semibold hover:opacity-50">PARCEIROS</span>
        </a>
        <a className="py-2 px-4 border-b" href={`${BASE_URL}ajudar/`}>
          <span className="font-semibold hover:opacity-50">COMO AJUDAR</span>
        </a>
        <a
          className="py-2 px-4 border-b"
          href={`${BASE_URL}encomendas-de-bolos/`}
        >
          <span className="font-semibold hover:opacity-50">PACK DAMIÃO</span>
        </a>
        <a
          className="py-2 px-4 border-b"
          href={`${BASE_URL}documentos-constitutivos/`}
        >
          <span className="font-semibold hover:opacity-50">
            DOCUMENTOS CONSTITUTIVOS
          </span>
        </a>
        <a className="py-2 px-4 border-b" href={`${BASE_URL}historia-2/`}>
          <span className="font-semibold hover:opacity-50">HISTÓRIA</span>
        </a>
        <a className="py-2 px-4 border-b" href={`${BASE_URL}quem-foi-damiao/`}>
          <span className="font-semibold hover:opacity-50">
            QUEM FOI DAMIÃO
          </span>
        </a>
        <a
          className="py-2"
          href={`${BASE_URL}acasadamiao/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-semibold hover:opacity-50 ">CONTATOS</span>
        </a>
      </nav>
    </div>
  );
};

export default Menu;
