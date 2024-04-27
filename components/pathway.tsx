import Image from "next/image";
import PathwayLine from "@/assets/pathway_line.png";

export const Pathway = () => {
  return (
    <div className="pl-[21px] relative" aria-label="Progress line, background">
      <Image
        src={PathwayLine}
        width={10}
        height={10}
        alt="Progress line"
        className="h-full"
      />
      <p className="font-bold text-th-accent text-[18px] [text-shadow:0px_4px_15px_#b41817] absolute rotate-90 top-[318px] left-0">
        Scroll
      </p>
    </div>
  );
};
