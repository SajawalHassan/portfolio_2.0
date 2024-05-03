import Menu from "@/assets/icons/menu_icon.svg";
import Github from "@/assets/icons/github_icon.svg";
import Youtube from "@/assets/icons/youtube_icon.svg";
import Linkedin from "@/assets/icons/linkedin_icon.svg";
import Image from "next/image";
import Link from "next/link";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MenuItem } from "@/components/header/menu-item";
import { MenuFooterItem } from "@/components/header/menu-footer-item";
import { MovingBorderContainer } from "@/components/ui/moving-border";

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
            <MovingBorderContainer
              containerClassName="md:hidden"
              className="text-white rounded-[2.5px] py-[5px] px-[8px] cursor-pointer"
              borderClassName="bg-[radial-gradient(var(--th-accent)_20%,transparent_80%)] opacity-30">
              <Image src={Menu} width={13.71} height={12} alt="Burger Icon" />
            </MovingBorderContainer>
          </DrawerTrigger>

          <DrawerContent className="bg-th-bg">
            <MovingBorderContainer
              as="div"
              containerClassName="bg-th-bg"
              borderClassName="w-[50rem] h-[50rem] sm:w-[100rem] sm:h-[100rem] bg-[radial-gradient(var(--gray-700)_60%,transparent_90%)] opacity-30"
              className="min-h-[25rem] flex flex-col justify-between p-4"
              duration={3000}>
              <h3 className="text-[24px] sm:text-[26px] font-bold text-white text-center" aria-label="Sajawal Hassan, author name">
                <span className="font-bold text-[26px] sm:text-[28px] text-th-primary">{"{"}</span>
                Sajawal
                <span className="font-bold text-[26px] sm:text-[28px] text-th-primary">{"}"}</span>
              </h3>

              <div className="w-full h-full my-auto space-y-2.5 sm:space-y-3.5">
                <MenuItem text="About.tsx" />
                <MenuItem text="Projects.tsx" />
                <MenuItem text="Creation.tsx" />
                <MenuItem text="Contact_Me.tsx" />
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
