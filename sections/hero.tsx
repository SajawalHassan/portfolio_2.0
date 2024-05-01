"use client";

import Bracket from "@/assets/{.svg";
import Image from "next/image";

import {TypeAnimation} from "react-type-animation";

export const Hero = () => {
  return (
    <main className="relative">
      <div className="flex flex-col left-12 sm:left-32 justify-between absolute min-h-[25rem] mt-3 md:flex-row -top-20 md:-left-10 md:-right-20 xl:top-0">
        <Image
          src={Bracket}
          width={250}
          height={250}
          alt="Bracket open"
          className="md:-rotate-90 xl:w-[280px] xl:h-[280px] 2xl:w-[300px] 2xl:h-[300px]"
        />
        <Image
          src={Bracket}
          width={250}
          height={250}
          alt="Bracket close"
          className="md:rotate-90 rotate-180 xl:w-[280px] xl:h-[280px] 2xl:w-[300px] 2xl:h-[300px]"
        />
      </div>
      <div className="pl-[30px] sm:pl-[60px] md:pl-[100px] pt-10 ml-5">
        <h1 className="font-bold text-[26px] sm:text-[34px] xl:text-[40px] 2xl:text-[45px]">
          Hi, I'm <br />
          <span className="bg-gradient-to-r from-th-primary to-th-secondary bg-clip-text text-transparent">Sajawal Hassan</span>
          .<br className="sm:hidden" /> I am a<br />
          <TypeAnimation sequence={["Frontend Developer", 2000, "Backend Developer", 2000, "Data Analyst", 2000]} speed={1} repeat={Infinity} />
        </h1>

        <p className="text-th-primary font-bold text-[18px] mt-[24px] md:hidden">Go deeper...</p>
      </div>
    </main>
  );
};
