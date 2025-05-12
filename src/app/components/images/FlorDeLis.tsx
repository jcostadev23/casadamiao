import Image from "next/image";
import florDeLisImage from "../../../../public/images/flor-de-lis.png";

const FlorDeLisImage = () => {
  return (
    <Image
      src={florDeLisImage}
      width={300}
      height={90}
      alt="camisolas e livros"
    />
  );
};
export default FlorDeLisImage;
