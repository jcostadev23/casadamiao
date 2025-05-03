import Image from "next/image";
import casaDamiaoImage from "../../../../public/casa-damiao.png";

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
