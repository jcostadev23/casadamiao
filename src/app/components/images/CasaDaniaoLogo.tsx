import Image from "next/image";
import casaDamiaoLogo from "../../../../public/images/logo-casa-damicao.png";

const CasaDamiaoImage = () => {
  return (
    <Image
      src={casaDamiaoLogo}
      width={220}
      height={220}
      alt="crianças a brincar"
    />
  );
};
export default CasaDamiaoImage;
