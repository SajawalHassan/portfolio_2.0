import { Pathway } from "@/components/pathway";
import { Header } from "@/sections/header";
import { Hero } from "@/sections/hero";

export default function Home() {
  return (
    <div className="text-white">
      <Header />
      <main aria-label="main content" className="flex gap-x-[15px]">
        <Pathway />

        <Hero />
      </main>
    </div>
  );
}
