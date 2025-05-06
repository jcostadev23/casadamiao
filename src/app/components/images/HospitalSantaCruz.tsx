import Image from "next/image";
import hospitalSantaCruzImage from "../../../../public/logo-hsc.jpg";

const HospitalSantaCruzImage = () => {
  return (
    <Image
      src={hospitalSantaCruzImage}
      width={300}
      height={90}
      alt="camisolas e livros"
    />
  );
};
export default HospitalSantaCruzImage;
