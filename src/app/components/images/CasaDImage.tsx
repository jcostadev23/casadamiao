import Image from "next/image";
import casaDImage from "../../../../public/images/casad.jpg";

const CasaDImage = () => {
  return (
    <Image src={casaDImage} width={600} height={500} alt="camisolas e livros" />
  );
};
export default CasaDImage;
