import Image from "next/image";
import aidaImage from "../../../../public/aida.jpg";

const AidaImage = () => {
  return (
    <Image src={aidaImage} width={350} height={250} alt="camisolas e livros" />
  );
};
export default AidaImage;
