import Link from "next/link";

interface Props {
  text: string;
  link: string;
}

export const HeaderLink = ({ text, link }: Props) => {
  return (
    <div className="overflow-x-hidden group mt-1">
      <Link
        className="xl:text-[18px] font-semibold bg-gradient-to-r from-gray-200 to-gray-300 text-transparent bg-clip-text transition-all duration-200"
        href={link}
        scroll={true}>
        {text}
      </Link>
      <div className="h-1 bg-th-primary transition-all duration-200 w-[70%] group-hover:w-[95%]" />
    </div>
  );
};
