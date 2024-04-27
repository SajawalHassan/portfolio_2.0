import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface Props {
  link: string;
  alt: string;
  image: StaticImport;
}

export const MenuFooterItem = ({ link, image, alt }: Props) => {
  return (
    <a href={link} target="_blank">
      <Image src={image} width={24} height={24} alt={alt} />
    </a>
  );
};
