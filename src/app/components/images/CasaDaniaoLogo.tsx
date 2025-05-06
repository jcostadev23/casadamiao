import Image from "next/image";
import casaDamiaoImage from "../../../../public/logo-casa-damicao.png";

const CasaDamiaoImage = () => {
  return (
    <Image
      src={casaDamiaoImage}
      width={350}
      height={250}
      alt="crianças a brincar"
    />
  );
};
export default CasaDamiaoImage;
