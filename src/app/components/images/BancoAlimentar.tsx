import Image from "next/image";
import bancoAlimentarImage from "../../../../public/banco-alimentar-contra-a-fome-logo.gif";

const BancoAlimentarImage = () => {
  return (
    <Image
      src={bancoAlimentarImage}
      width={350}
      height={250}
      alt="camisolas e livros"
    />
  );
};
export default BancoAlimentarImage;
