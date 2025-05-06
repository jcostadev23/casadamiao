import Image from "next/image";
import serveTheCityImage from "../../../../public/servethecity.jpg";

const ServeTheCityImage = () => {
  return (
    <Image
      src={serveTheCityImage}
      width={300}
      height={90}
      alt="camisolas e livros"
    />
  );
};
export default ServeTheCityImage;
