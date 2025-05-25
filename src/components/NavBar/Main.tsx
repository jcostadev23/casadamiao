type Props = {
  onNavBar: boolean;
};

const MainMenu: React.FC<Props> = ({ onNavBar }) => {
  const className = !onNavBar
    ? "font-semibold text-blue-900 hover:opacity-50 "
    : "px-4";
  return (
    <nav
      className={
        onNavBar ? "custom-nav flex flex-col gap-4" : "flex flex-col gap-4"
      }
    >
      <a href={"/casadamiao/"}>
        <span className={className}>Casa Damião</span>
      </a>
      <a href={"/quem-somos/"}>
        <span className={className}>Quem Somos</span>
      </a>
      <a href={"/visao-missao-e-valores/"}>
        <span className={className}>Visão, Missão e Valores</span>
      </a>
      <a href={"/parceiros/"}>
        <span className={className}>Parceiros</span>
      </a>
      <a href={"/ajudar/"}>
        <span className={className}>Como Ajudar</span>
      </a>
      <a href={"/pack-damiao/"}>
        <span className={className}>Pack Damião</span>
      </a>
      <a href={"/documentos-constitutivos/"}>
        <span className={className}>Documentos Constitutivos</span>
      </a>
      <a href={"/contatos/"}>
        <span className={className}>Contactos</span>
      </a>
      {onNavBar ? (
        <>
          <a href={"/historia-2/"}>
            <span className={className}>História</span>
          </a>
          <a href={"/quem-foi-damiao/"}>
            <span className={className}>Quem foi Damião</span>
          </a>
        </>
      ) : (
        <div className="mt-10">
          <h2 className="text-xl mb-6 font-semibold">A Casa</h2>
          <div className="flex flex-col gap-4">
            <a href={"/historia-2/"}>
              <span className="font-semibold text-blue-900 hover:opacity-50">
                História
              </span>
            </a>
            <a href={"/quem-foi-damiao/"}>
              <span className="font-semibold text-blue-900 hover:opacity-50 ">
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
