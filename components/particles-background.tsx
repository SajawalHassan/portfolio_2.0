"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { IOptions, RecursivePartial, type Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";

interface Props {
  optionsMobile: RecursivePartial<IOptions>;
  optionsLaptop: RecursivePartial<IOptions>;
  className?: string;
}

export const ParticleBackground = ({ optionsMobile, optionsLaptop, className }: Props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (_container?: Container): Promise<void> => {};

  if (init) {
    return (
      process.env.NODE_ENV === "production" &&
      (window.innerWidth > 1024 ? (
        <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={optionsLaptop} className={cn(className)} />
      ) : (
        <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={optionsMobile} className={cn(className)} />
      ))
    );
  }

  return <></>;
};
