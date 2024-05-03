interface Props {
  text: string;
}

export const MenuItem = ({ text }: Props) => {
  return (
    <div aria-label="Menu item" className="text-white w-full mx-auto flex flex-col items-center">
      <div className="relative z-10">
        <h3 className="text-[20px] sm:text-[22px] cursor-pointer font-bold bg-gradient-to-r from-gray-400 via-white to-gray-400 text-transparent bg-clip-text animate-gradient shadow-lg">
          {text}
        </h3>
      </div>
    </div>
  );
};
