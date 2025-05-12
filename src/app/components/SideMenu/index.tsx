import MainMenu from "../NavBar/Main";

const SideMenu = () => {
  return (
    <div className="self-start py-6 px-4 w-full md:w-2/5 lg:w-2/5 bg-blue-50">
      <h2 className="text-xl mb-6 font-semibold">Sobre Nós</h2>
      <MainMenu onNavBar={false} />
    </div>
  );
};

export default SideMenu;
