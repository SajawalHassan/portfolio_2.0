interface Props {
  text: string;
}

export const MenuItem = ({ text }: Props) => {
  return (
    <div
      aria-label="Menu item"
      className="relative text-white w-full mx-auto flex flex-col items-center"
    >
      <h3 className="text-[20px] cursor-pointer">{text}</h3>
    </div>
  );
};
