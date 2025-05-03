import Image from "next/image";
import casaDamiao from "../../../../public/casadamicao.jpg";

const CasaDamiaoImage = () => {
  return (
    <Image
      src={casaDamiao}
      width={600}
      height={400}
      sizes="100vw"
      alt="crianças a brincar"
      style={{ width: "80%", height: "auto" }}
    />
  );
};
export default CasaDamiaoImage;
