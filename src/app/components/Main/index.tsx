import Header from "./Header";
import CasaDamiaoImage from "./Image";
import MainVidio from "./Vidio";

const MainInfo = () => {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <CasaDamiaoImage />
      <Header />
      <p className="text-md/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        A Casa Damião é uma casa de acolhimento temporário para crianças em
        risco clínico dos Países Africanos de Língua Oficial Portuguesa (PALOP),
        com especial atenção para as crianças da Guiné-Bissau, com patologias
        crónicas sem tratamento no seu país.
      </p>
      <p className="text-md/6 font-[family-name:var(--font-geist-mono)] font-semibold">
        Ajude a Casa Damião colocando o nosso NIF na sua declaração de IRS
      </p>
      <p className="flex justify-center gap-[5px] items-center text-md/6 font-[family-name:var(--font-geist-mono)] ">
        NIF:
        <span className="text-md/6 font-[family-name:var(--font-geist-mono)] font-semibold">
          506 429 695
        </span>
      </p>
      <MainVidio />
    </main>
  );
};
export default MainInfo;
