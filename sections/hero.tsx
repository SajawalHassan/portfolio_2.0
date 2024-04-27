"use client";

import Bracket from "@/assets/{.svg";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  return (
    <main className="relative px-[40px] pt-[100px]">
      <Image
        src={Bracket}
        width={250}
        height={250}
        alt="Bracket open"
        className="absolute inset-x-0 mx-auto top-2"
      />
      <h1 className="font-bold text-[26px] sm:text-[34px]">
        Hi, I'm <br />
        <span className="bg-gradient-to-r from-th-primary to-th-secondary bg-clip-text text-transparent">
          Sajawal Hassan
        </span>
        .<br />I am a<br />
        <TypeAnimation
          sequence={[
            "Frontend Developer",
            2000,
            "Backend Developer",
            2000,
            "Data Analyst",
            2000,
          ]}
          speed={1}
          repeat={Infinity}
        />
      </h1>
      <p className="text-th-primary font-bold text-[18px] mt-[24px]">
        Go deeper...
      </p>
      <Image
        src={Bracket}
        width={250}
        height={250}
        alt="Bracket close"
        className="absolute inset-x-0 mx-auto -bottom-28 rotate-180"
      />
    </main>
  );
};
