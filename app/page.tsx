import { TracingBeam } from "@/components/ui/tracing-beam";
import { About } from "@/sections/about";
import { Header } from "@/sections/header";
import { Hero } from "@/sections/hero";

export default function Home() {
  return (
    <div className="text-white min-h-screen">
      <Header />
      <TracingBeam childrenClassName="space-y-[380px]">
        <Hero />
        <About />
      </TracingBeam>
    </div>
  );
}
