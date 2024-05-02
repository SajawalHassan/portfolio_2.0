import Image from "next/image";
import MeAtDinner from "@/assets/me-at-dinner.jpg";
import LightBulb from "@/assets/lightbulb.png";
import MeAtDinnerVertical from "@/assets/me-at-dinner-vertical.jpg";
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
    <section className="relative px-[10.5px] xl:ml-[40px] max-w-[1000px] xl:max-w-[1400px] border-2 lg:border-none border-th-primary rounded-[10px]">
      <div className="lg:hidden mx-auto w-max text-center">
        <h3 className="text-[22px] font-bold text-white opacity-75" aria-label="Sajawal Hassan, author name">
          <span className="font-bold text-[24px] text-th-primary">{"{"}</span>
          About.tsx
          <span className="font-bold text-[24px] text-th-primary">{"}"}</span>
        </h3>

        <div className="w-[270px] min-h-[160px] sm:w-[310px] sm:h-[180px] md:w-[350px] md:h-[220px] relative mt-2">
          <Image src={MeAtDinner} alt="Me at dinner" fill className="rounded-[10px] object-cover" />
        </div>
      </div>

      <div className="flex justify-between xl:justify-start items-end">
        <div className="border-2 border-th-primary border-b-0 p-2 w-max rounded-t-[10px] hidden lg:block">
          <div className="h-[30rem] w-[353px] relative">
            <Image src={MeAtDinnerVertical} alt="Me at dinner" fill className="rounded-[10px] object-cover" />
          </div>
        </div>

        <div className="w-[517px] h-[342px] xl:w-[600px] xl:h-[400px] relative hidden lg:block mx-auto">
          <Image src={LightBulb} alt="light bulb" fill className="object-cover" />
        </div>
      </div>
      <CodeBlock className="pb-2 pt-4 px-2 lg:border-2 lg:border-th-primary rounded-[10px] rounded-tl-none">
        <CodeSection>
          <CodeLine parentClassName="hover:bg-transparent" lineNum={0} showLineNum={false}>
            <CommentCode text="Creative, Hard-working, Cooperative. A perfect mixture" />
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
            plainTexts={["name", "age", "location", "email"]}
            valueTexts={['"Sajawal Hassan"', `${new Date().getFullYear() - 2012}`, '"Pakistan"', '"sajawalhassan.1feb@gmail.com"']}
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
            stringText=" “I'm a teenager skilled in Web / App Development, 
              with experience in creating clones of popular platforms like Reddit and Discord. 
              I've also worked on projects for major events at a top Pakistani university. Learning Data Science
              on the side, I am very well versed in statistical analysis of data. 
              With my skills I'm confident in my ability to turn your dreams into a digital reality.”"
          />
          <CodeLine numOfDots={2} lineNum={9}>
            <PlainCode text="}" />
          </CodeLine>
        </CodeSection>

        <CodeSection>
          <DefineMethodCode lineNum={10} numOfDots={2} methodText="skills" />
          <DefineReturnCode
            type="array"
            numOfDots={4}
            lineNum={11}
            stringText="“ReactJS”, “NextJS”, “TailwindCSS”, “HTML5”, “CSS3”, “Javascript”, “Typescript”, “SQL”, “MongoDB”, “PrismaORM”, “React Native”, “Expo”, “Django”, “Linux”, “Redux / Redux Toolkit”, “Zustand”, “Python”, “Pandas”, “Matplotlib”, “Numpy”"
          />
          <CodeLine numOfDots={2} lineNum={12}>
            <PlainCode text="}" />
          </CodeLine>
        </CodeSection>
      </CodeBlock>
    </section>
  );
};
