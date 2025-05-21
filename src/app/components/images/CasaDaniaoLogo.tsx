import Image from "next/image";
import casaDamiaoLogo from "../../../../public/images/logo-casa-damicao.png";

type Props = {
  scrolled: boolean;
};

const CasaDamiaoImage: React.FC<Props> = ({ scrolled }) => {
  const size = scrolled ? 120 : 220;
  return (
    <Image
      src={casaDamiaoLogo}
      width={size}
      height={size}
      alt="crianças a brincar"
    />
  );
};
export default CasaDamiaoImage;
