"use client";

import Menu from "@/assets/icons/menu_icon.svg";
import Github from "@/assets/icons/github_icon.svg";
import Youtube from "@/assets/icons/youtube_icon.svg";
import Linkedin from "@/assets/icons/linkedin_icon.svg";
import Image from "next/image";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MenuItem } from "@/components/header/menu-item";
import { MenuFooterItem } from "@/components/header/menu-footer-item";
import { MovingBorderContainer } from "@/components/ui/moving-border";
import { HeaderLink } from "@/components/header/header-link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Header = () => {
  const [scrollDir, setScrollDir] = useState("up");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    console.log(scrollDir);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  return (
    <header
      className={cn(
        "fixed w-screen bg-gradient-to-b from-th-bg to-transparent transition-all duration-200 flex justify-center z-50",
        scrollDir === "up" ? "top-0" : "-top-[10rem]"
      )}>
      <nav className={"py-[15px] px-[12px] md:px-[30px] items-center w-full justify-between max-w-[1000px] flex xl:max-w-[1500px]"}>
        <Link scroll={true} href={"#hero"} className="text-[24px] xl:text-[30px] font-bold text-white" aria-label="Sajawal Hassan, author name">
          <span className="font-bold text-[26px] xl:text-[32px] text-th-primary">{"{"}</span>
          Sajawal
          <span className="font-bold text-[26px] xl:text-[32px] text-th-primary">{"}"}</span>
        </Link>

        <div className="items-center gap-x-3 hidden md:flex">
          <HeaderLink text="About.tsx" link="#about" />
          <HeaderLink text="Projects.tsx" link="#projects" />
          <HeaderLink text="Creation.tsx" link="#creation" />
          <HeaderLink text="Contact.tsx" link="#contact" />
        </div>

        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <DrawerTrigger asChild>
            <MovingBorderContainer
              containerClassName="md:hidden"
              className="text-white rounded-[2.5px] py-[5px] px-[8px] cursor-pointer"
              borderClassName="bg-[radial-gradient(var(--th-accent)_20%,transparent_80%)] opacity-30"
              onClick={() => setDrawerOpen(true)}>
              <Image src={Menu} width={13.71} height={12} alt="Burger Icon" />
            </MovingBorderContainer>
          </DrawerTrigger>

          <DrawerContent className="bg-th-bg">
            <MovingBorderContainer
              as="div"
              containerClassName="bg-th-bg"
              borderClassName="w-[55rem] h-[55rem] sm:w-[100rem] sm:h-[100rem] bg-[radial-gradient(var(--gray-700)_60%,transparent_90%)] opacity-30"
              className="min-h-[25rem] flex flex-col justify-between p-4"
              duration={6000}>
              <h3 className="text-[24px] sm:text-[26px] font-bold text-white text-center" aria-label="Sajawal Hassan, author name">
                <span className="font-bold text-[26px] sm:text-[28px] text-th-primary">{"{"}</span>
                Sajawal
                <span className="font-bold text-[26px] sm:text-[28px] text-th-primary">{"}"}</span>
              </h3>

              <div className="w-full h-full my-auto space-y-2.5 sm:space-y-3.5">
                <MenuItem setDrawerOpen={setDrawerOpen} link="#about" text="About.tsx" />
                <MenuItem setDrawerOpen={setDrawerOpen} link="#projects" text="Projects.tsx" />
                <MenuItem setDrawerOpen={setDrawerOpen} link="#creation" text="Creation.tsx" />
                <MenuItem setDrawerOpen={setDrawerOpen} link="#contact" text="Contact.tsx" />
              </div>

              <div className="flex items-center mx-auto w-max gap-x-3.5">
                <MenuFooterItem link="https://github.com/SajawalHassan/" image={Github} alt="Github icon" />
                <MenuFooterItem link="https://www.youtube.com/@sajawalhassan1f12" image={Youtube} alt="Youtube icon" />
                <MenuFooterItem link="https://www.linkedin.com/in/sajawal-hasssan-186548284/" image={Linkedin} alt="Linkedin icon" />
              </div>
            </MovingBorderContainer>
          </DrawerContent>
        </Drawer>
      </nav>
    </header>
  );
};
