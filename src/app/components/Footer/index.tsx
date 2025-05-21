const Footer = () => {
  return (
    <footer className="flex flex-col gap-[10px] mb-[30px] mt-[40px] items-center justify-center">
      <p className="flex items-center gap-2 ">Casa Damião © 2025</p>
      <p className="flex items-center gap-2">
        Alojado por
        <a
          className="hover:underline hover:underline-offset-4"
          href="https://www.amen.pt/"
          rel="noopener noreferrer"
        >
          <span>AMEN.PT</span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
