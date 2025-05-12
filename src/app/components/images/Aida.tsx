import Image from "next/image";
import aidaImage from "../../../../public/images/aida.jpg";

const AidaImage = () => {
  return <Image src={aidaImage} width={150} height={150} alt="aida logo" />;
};
export default AidaImage;
