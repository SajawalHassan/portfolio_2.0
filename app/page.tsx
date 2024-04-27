import { TracingBeam } from "@/components/ui/tracing-beam";
import { Header } from "@/sections/header";
import { Hero } from "@/sections/hero";

export default function Home() {
  return (
    <div className="text-white min-h-screen">
      <Header />
      <TracingBeam>
        <Hero />
      </TracingBeam>
    </div>
  );
}
