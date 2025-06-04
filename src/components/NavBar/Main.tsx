"use client";
import { usePathname } from "next/navigation";

type Props = {
  onNavBar: boolean;
};

const MainMenu: React.FC<Props> = ({ onNavBar }) => {
  const pathName = usePathname();

  const className = !onNavBar
    ? "font-semibold text-blue-900 hover:opacity-50 "
    : "px-4";
  return (
    <nav
      className={
        onNavBar ? "custom-nav flex flex-col gap-4" : "flex flex-col gap-4"
      }
    >
      <a href={"/casadamiao"}>
        <span
          className={`${className} ${
            pathName === "/casadamiao" && "opacity-50"
          }`}
        >
          Casa Damião
        </span>
      </a>
      <a href={"/quem-somos"}>
        <span
          className={`${className} ${
            pathName === "/quem-somos" && "opacity-50"
          }`}
        >
          Quem Somos
        </span>
      </a>
      <a href={"/visao-missao-e-valores"}>
        <span
          className={`${className} ${
            pathName === "/visao-missao-e-valores" && "opacity-50"
          }`}
        >
          Visão, Missão e Valores
        </span>
      </a>
      <a href={"/parceiros"}>
        <span
          className={`${className} ${
            pathName === "/parceiros" && "opacity-50"
          }`}
        >
          Parceiros
        </span>
      </a>
      <a href={"/ajudar"}>
        <span
          className={`${className} ${pathName === "/ajudar" && "opacity-50"}`}
        >
          Como Ajudar
        </span>
      </a>
      <a href={"/pack-damiao"}>
        <span
          className={`${className} ${
            pathName === "/pack-damiao" && "opacity-50"
          }`}
        >
          Pack Damião
        </span>
      </a>
      <a href={"/documentos-constitutivos"}>
        <span
          className={`${className} ${
            pathName === "/documentos-constitutivos" && "opacity-50"
          }`}
        >
          Documentos Constitutivos
        </span>
      </a>
      <a href={"/contatos"}>
        <span
          className={`${className} ${pathName === "/contatos" && "opacity-50"}`}
        >
          Contactos
        </span>
      </a>
      {onNavBar ? (
        <>
          <a href={"/historia-2"}>
            <span
              className={`${className} ${
                pathName === "/historia-2" && "opacity-50"
              }`}
            >
              História
            </span>
          </a>
          <a href={"/quem-foi-damiao"}>
            <span
              className={`${className} ${
                pathName === "/quem-foi-damiao" && "opacity-50"
              }`}
            >
              Quem foi Damião
            </span>
          </a>
        </>
      ) : (
        <div className="mt-10">
          <h2 className="text-xl mb-6 font-semibold">A Casa</h2>
          <div className="flex flex-col gap-4">
            <a href={"/historia-2"}>
              <span
                className={`font-semibold text-blue-900 hover:opacity-50 ${
                  pathName === "/historia-2" && "opacity-50"
                }`}
              >
                História
              </span>
            </a>
            <a href={"/quem-foi-damiao"}>
              <span
                className={`font-semibold text-blue-900 hover:opacity-50 ${
                  pathName === "/quem-foi-damiao" && "opacity-50"
                }`}
              >
                Quem foi Damião
              </span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainMenu;
