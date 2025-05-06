import Image from "next/image";
import hospitalSantaCruzImage from "../../../../public/logo-hsc.jpg";

const HospitalSantaCruzImage = () => {
  return (
    <Image
      src={hospitalSantaCruzImage}
      width={300}
      height={90}
      alt="Hospital Santa Cruz logo"
    />
  );
};
export default HospitalSantaCruzImage;
