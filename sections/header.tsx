import Menu from "@/assets/icons/menu_icon.svg";
import Github from "@/assets/icons/github_icon.svg";
import Youtube from "@/assets/icons/youtube_icon.svg";
import Linkedin from "@/assets/icons/linkedin_icon.svg";
import Image from "next/image";
import Link from "next/link";

import {Drawer, DrawerContent, DrawerTrigger} from "@/components/ui/drawer";
import {MenuItem} from "@/components/header/menu-item";
import {MenuFooterItem} from "@/components/header/menu-footer-item";

export const Header = () => {
  return (
    <header>
      <nav className="py-[15px] px-[12px] md:px-[30px] flex items-center justify-between max-w-[1000px] xl:max-w-[1500px] mx-auto">
        <h3 className="text-[24px] xl:text-[30px] font-bold text-white" aria-label="Sajawal Hassan, author name">
          <span className="font-bold text-[26px] xl:text-[32px] text-th-primary">{"{"}</span>
          Sajawal
          <span className="font-bold text-[26px] xl:text-[32px] text-th-primary">{"}"}</span>
        </h3>

        <div className="items-center gap-x-6 hidden md:flex">
          <Link className="xl:text-[18px]" href={"#about"}>
            About.tsx
          </Link>
          <Link className="xl:text-[18px]" href={"#projects"}>
            Projects.tsx
          </Link>
          <Link className="xl:text-[18px]" href={"#process"}>
            Creation-Process.tsx
          </Link>
          <Link className="xl:text-[18px]" href={"#contact"}>
            Contact.tsx
          </Link>
        </div>

        <Drawer>
          <DrawerTrigger asChild>
            <div aria-label="Menu" className="py-[5px] px-[8px] rounded-[2.5px] border-[1px] border-th-secondary cursor-pointer md:hidden">
              <Image src={Menu} width={13.71} height={12} alt="Burger Icon" />
            </div>
          </DrawerTrigger>

          <DrawerContent className="bg-th-bg min-h-[30rem] p-4">
            <h3 className="text-[24px] font-bold text-white text-center" aria-label="Sajawal Hassan, author name">
              <span className="font-bold text-[26px] text-th-primary">{"{"}</span>
              Sajawal
              <span className="font-bold text-[26px] text-th-primary">{"}"}</span>
            </h3>

            <div className="w-full h-full my-auto space-y-1">
              <MenuItem text="About.tsx" />
              <MenuItem text="Projects.tsx" />
              <MenuItem text="Creation_Process.tsx" />
              <MenuItem text="Contact_Me.tsx" />
            </div>

            <div className="flex items-center mx-auto w-max gap-x-3.5">
              <MenuFooterItem link="https://github.com/SajawalHassan/" image={Github} alt="Github icon" />
              <MenuFooterItem link="https://www.youtube.com/@sajawalhassan1f12" image={Youtube} alt="Youtube icon" />
              <MenuFooterItem link="https://www.linkedin.com/in/sajawal-hasssan-186548284/" image={Linkedin} alt="Linkedin icon" />
            </div>
          </DrawerContent>
        </Drawer>
      </nav>
    </header>
  );
};
