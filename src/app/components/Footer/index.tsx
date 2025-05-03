const Footer = () => {
  return (
    <footer className="row-start-3 flex flex-col gap-[10px] flex-wrap items-center justify-center">
      <p className="flex items-center gap-2 ">Casa Damião © 2025</p>
      <p className="flex items-center gap-2 hover:underline hover:underline-offset-4">
        Alojado por
        <span className="text-md/6 font-[family-name:var(--font-geist-mono)] font-semibold text-blue-800">
          Amen.pt
        </span>
      </p>
    </footer>
  );
};

export default Footer;
