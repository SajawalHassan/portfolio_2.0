import { ParticleBackground } from "@/components/particles-background";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { About } from "@/sections/about";
import { Header } from "@/sections/header";
import { Hero } from "@/sections/hero";
import { particlesConfigInteractive, particlesConfigUninteractive } from "@/data/particles-data";

export default function Home() {
  return (
    <div className="text-white min-h-screen w-screen">
      <ParticleBackground optionsLaptop={particlesConfigInteractive} optionsMobile={particlesConfigUninteractive} />
      <Header />
      <TracingBeam childrenClassName="space-y-[380px]">
        <Hero />
        <div className="bg-[#150B0A] fixed top-[20rem] left-0" />
        <About />
      </TracingBeam>
    </div>
  );
}
