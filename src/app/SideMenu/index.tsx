import { BASE_URL } from "../components/utils";

const SideMenu = () => {
  return (
    <div className="self-start py-6 px-4 min-w-[330px] bg-blue-50">
      <h2 className="text-xl mb-6 font-semibold">Sobre Nós</h2>
      <div className="flex flex-col gap-4">
        <a
          href={`${BASE_URL}2020/04/04/bem-vindo/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-semibold text-blue-900 ">Casa Damião</span>
        </a>
        <a
          href={`${BASE_URL}2020/04/04/bem-vindo/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-semibold text-blue-900 ">Quem Somos</span>
        </a>
        <a
          href={`${BASE_URL}2020/04/04/bem-vindo/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-semibold text-blue-900 ">
            Visão, Missão e Valores
          </span>
        </a>
        <a
          href={`${BASE_URL}2020/04/04/bem-vindo/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-semibold text-blue-900 ">Parceiros</span>
        </a>
        <a
          href={`${BASE_URL}2020/04/04/bem-vindo/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-semibold text-blue-900 ">Como Ajudar</span>
        </a>
        <a
          href={`${BASE_URL}2020/04/04/bem-vindo/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-semibold text-blue-900 ">Pack Damião</span>
        </a>
        <a
          href={`${BASE_URL}2020/04/04/bem-vindo/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-semibold text-blue-900 ">
            Documentos Constitutivos
          </span>
        </a>
        <a
          href={`${BASE_URL}2020/04/04/bem-vindo/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-semibold text-blue-900 ">Contactos</span>
        </a>
      </div>
      <div className="mt-10">
        <h2 className="text-xl mb-6 font-semibold">A Casa</h2>
        <div className="flex flex-col gap-4">
          <a
            href={`${BASE_URL}2020/04/04/bem-vindo/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-semibold text-blue-900 ">História</span>
          </a>
          <a
            href={`${BASE_URL}2020/04/04/bem-vindo/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-semibold text-blue-900 ">
              Quem foi Damião
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
