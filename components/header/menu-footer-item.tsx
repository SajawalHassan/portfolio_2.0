import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface Props {
  link: string;
  alt: string;
  image: StaticImport;
}

export const MenuFooterItem = ({ link, image, alt }: Props) => {
  return (
    <a href={link} target="_blank" className="relative w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]">
      <Image src={image} fill alt={alt} />
    </a>
  );
};
