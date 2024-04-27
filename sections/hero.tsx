"use client";

import Bracket from "@/assets/{.svg";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  return (
    <main className="relative px-[40px] sm:px-[120px] md:px-[140px] pt-[100px]">
      <div className="flex flex-col items-center justify-between absolute min-h-[25rem] inset-0 m-auto mt-3 md:flex-row md:-left-10">
        <Image
          src={Bracket}
          width={250}
          height={250}
          alt="Bracket open"
          className="md:-rotate-90"
        />
        <Image
          src={Bracket}
          width={250}
          height={250}
          alt="Bracket close"
          className="md:rotate-90 rotate-180"
        />
      </div>
      <h1 className="font-bold text-[26px] sm:text-[34px]">
        Hi, I'm <br />
        <span className="bg-gradient-to-r from-th-primary to-th-secondary bg-clip-text text-transparent">
          Sajawal Hassan
        </span>
        .<br className="sm:hidden" /> I am a<br />
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
    </main>
  );
};
