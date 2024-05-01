import Image from "next/image";
import GridlineMobile from "@/assets/about-gridline-mobile.png";
import Triangle from "@/assets/about-triangle.png";
import MeAtDinner from "@/assets/me-at-dinner.png";
import {
  CodeBlock,
  CodeLine,
  CodeSection,
  CommentCode,
  DefineMethodCode,
  DefinePropertiesCode,
  DefineReturnCode,
  MethodCode,
  PlainCode,
  PropNameCode,
} from "@/components/ui/code-block";

export const About = () => {
  return (
    <section className="relative px-[10.5px] space-y-[18px]">
      <Image src={GridlineMobile} alt="About gridline" fill className="w-full absolute inset-0 m-auto -z-10 h-full" />

      <div className="relative h-[6rem]">
        <h3
          className="text-[24px] xl:text-[30px] font-bold text-white opacity-75 rotate-[16.13deg] absolute bottom-6"
          aria-label="Sajawal Hassan, author name">
          <span className="font-bold text-[26px] xl:text-[32px] text-th-primary">{"{"}</span>
          About.tsx
          <span className="font-bold text-[26px] xl:text-[32px] text-th-primary">{"}"}</span>
        </h3>
        <Image src={Triangle} alt="Triangle" width={131} height={37} className="absolute bottom-0" />
      </div>

      <div>
        <Image src={MeAtDinner} alt="Me at dinner" width={310} height={180} className="rounded-[10px]" />
        <div>
          <CodeBlock>
            <CodeSection>
              <CodeLine parentClassName="hover:bg-transparent" lineNum={0} showLineNum={false}>
                <CommentCode text="Creative, Hard-working, Cooperating. A perfect mixture" />
              </CodeLine>
              <CodeLine className="space-x-2" numOfDots={0} lineNum={1}>
                <MethodCode text="class" color="specialFunc" />
                <PropNameCode text="Sajawal" />
                <PlainCode text="{" />
              </CodeLine>
              <DefineMethodCode lineNum={2} numOfDots={2} methodText="constructor" type="specialFunc" />
              <DefinePropertiesCode
                lineNum={3}
                numOfDots={4}
                plainTexts={["name", "age", "email"]}
                valueTexts={['"Sajawal Hassan"', `${new Date().getFullYear() - 2012}`, "sajawalhassan.1feb@gmail.com"]}
              />
              <CodeLine numOfDots={2} lineNum={6}>
                <PlainCode text="}" />
              </CodeLine>
            </CodeSection>

            <CodeSection>
              <DefineMethodCode lineNum={7} numOfDots={2} methodText="aboutMe" />
              <DefineReturnCode
                type="string"
                numOfDots={4}
                lineNum={8}
                stringText=" “My name is Sajawal Hassan! I am a hobbyist Web / App Developer. 
              I've been in the field for about 3 years now, primarily working in Web dev. Although now I am 
              learning Data Science on the side, I am open to work.”"
              />
              <CodeLine numOfDots={2} lineNum={9}>
                <PlainCode text="}" />
              </CodeLine>
            </CodeSection>

            <CodeSection>
              <DefineMethodCode lineNum={10} numOfDots={2} methodText="aboutMe" />
              <DefineReturnCode
                type="array"
                numOfDots={4}
                lineNum={11}
                stringText=" “ReactJS”, “NextJS”, “TailwindCSS”, “HTML5”, “CSS3”, “Javascript”, “Typescript”, “SQL”, “MongoDB”, “PrismaORM”, “React Native”, “Expo”, “Django”, “Linux”, “Redux / Redux Toolkit”, “Zustand”, “Python”, “Pandas”, “Matplotlib”, “Numpy”"
              />
              <CodeLine numOfDots={2} lineNum={12}>
                <PlainCode text="}" />
              </CodeLine>
            </CodeSection>
          </CodeBlock>
        </div>
      </div>
    </section>
  );
};
