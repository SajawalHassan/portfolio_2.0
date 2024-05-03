import Link from "next/link";

interface Props {
  text: string;
  link: string;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuItem = ({ text, link, setDrawerOpen }: Props) => {
  return (
    <Link
      href={link}
      scroll={true}
      aria-label="Menu item"
      className="text-white w-full mx-auto flex flex-col items-center"
      onClick={() => setDrawerOpen(false)}>
      <h3 className="text-[20px] sm:text-[22px] cursor-pointer font-bold bg-gradient-to-r from-gray-400 via-white to-gray-400 text-transparent bg-clip-text animate-gradient shadow-lg">
        {text}
      </h3>
    </Link>
  );
};
