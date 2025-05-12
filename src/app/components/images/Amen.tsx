import Image from "next/image";
import amenImage from "../../../../public/images/amen-300x90.png";

const AmenImage = () => {
  return (
    <Image src={amenImage} width={300} height={90} alt="camisolas e livros" />
  );
};
export default AmenImage;
