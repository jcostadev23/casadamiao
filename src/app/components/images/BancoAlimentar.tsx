import Image from "next/image";
import bancoAlimentarImage from "../../../../public/images/banco-alimentar-contra-a-fome-logo.gif";

const BancoAlimentarImage = () => {
  return (
    <Image
      src={bancoAlimentarImage}
      width={200}
      height={200}
      alt="Banco alimentar logo"
    />
  );
};
export default BancoAlimentarImage;
