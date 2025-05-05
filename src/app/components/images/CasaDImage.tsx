import Image from "next/image";
import casaDImage from "../../../../public/casad.jpg";

const CasaDImage = () => {
  return (
    <Image src={casaDImage} width={350} height={250} alt="camisolas e livros" />
  );
};
export default CasaDImage;
