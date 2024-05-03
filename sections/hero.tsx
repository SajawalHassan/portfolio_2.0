"use client";

import Bracket from "@/assets/{.svg";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  return (
    <main className="relative ml-[10px] sm:ml-[60px] md:ml-[100px] md:h-[20rem]">
      <div className="flex flex-col justify-between w-max absolute inset-y-0 top-[3rem] h-[25rem] sm:h-[40rem] my-auto md:flex-row md:h-max md:w-screen md:max-w-[1100px] xl:max-w-[1600px] md:-left-[12.5rem] -z-10">
        <Image src={Bracket} width={250} height={250} alt="Bracket open" className="md:-rotate-90 sm:w-[300px] sm:h-[300px]" />
        <Image src={Bracket} width={250} height={250} alt="Bracket close" className="md:rotate-90 sm:w-[300px] sm:h-[300px] rotate-180" />
      </div>

      <h1 className="font-bold text-[23px] sm:text-[34px] xl:text-[40px] 2xl:text-[45px] pt-14">
        Hi, I'm <br />
        <span className="bg-gradient-to-r from-th-primary to-th-secondary bg-clip-text text-transparent">Sajawal Hassan</span>
        .<br className="sm:hidden" /> I am a<br />
        <TypeAnimation sequence={["Frontend Developer", 2000, "Backend Developer", 2000, "Data Analyst", 2000]} speed={1} repeat={Infinity} />
      </h1>

      <p className="text-th-primary font-bold text-[18px] mt-[24px] md:hidden">Go deeper...</p>
    </main>
  );
};
