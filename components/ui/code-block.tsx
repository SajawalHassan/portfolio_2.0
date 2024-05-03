// NOT FROM SHADCN UI, CUSTOM MADE

"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ContainerBaseProps {
  children: React.ReactNode;
  className?: string;
}

interface DotsProps {
  numOfDots: number;
  className?: string;
}
const Dots = ({ numOfDots, className }: DotsProps) => {
  const [arr, setArr] = useState<number[]>(Array(numOfDots).fill(null));

  return (
    <div className={cn("hidden sm:flex items-center gap-x-1.5", className)}>
      {arr.map((_, index) => (
        <div className="h-[2px] w-[2px] md:h-[3px] md:w-[3px] xl:h-[4px] xl:w-[4px] rounded-full bg-th-secondary bg-opacity-30" key={index} />
      ))}
    </div>
  );
};

export const CodeBlock = ({ children, className }: ContainerBaseProps) => {
  return <div className={cn("text-[14px] md:text-[16px] lg:text-[17px] xl:text-[17.5px] font-['Roboto_mono']", className)}>{children}</div>;
};

export const CodeSection = ({ children, className }: ContainerBaseProps) => {
  return <div className={cn(className)}>{children}</div>;
};

type CodeLineProps = ContainerBaseProps & {
  numOfDots?: number;
  parentClassName?: string;
  showLineNum?: boolean;
  lineNum: number;
};

export const CodeLine = ({ children, className, parentClassName, numOfDots = 0, lineNum, showLineNum = true }: CodeLineProps) => {
  return (
    <div className={cn("flex gap-x-2 hover:bg-th-accent hover:bg-opacity-10 py-0.5", parentClassName)}>
      {showLineNum && <p className="hidden sm:block text-gray-600">{lineNum}</p>}
      <div className={cn("flex items-start", numOfDots !== 0 && "sm:gap-x-2")}>
        {numOfDots > 0 && <Dots numOfDots={numOfDots} className="mt-2.5 md:mt-3" />}
        <div className={cn(className)}>{children}</div>
      </div>
    </div>
  );
};

// Color coded text
interface TextBaseProps {
  text: string;
  className?: string;
}

type MethodCodeProps = TextBaseProps & {
  color?: "specialFunc" | "func";
};

export const MethodCode = ({ text, className, color = "func" }: MethodCodeProps) => {
  return <span className={cn(color === "specialFunc" ? "text-th-primary" : "text-th-accent", className)}>{text}</span>;
};

export const PropNameCode = ({ text, className }: TextBaseProps) => {
  return <span className={cn("text-th-accent", className)}>{text}</span>;
};

export const PlainCode = ({ text, className }: TextBaseProps) => {
  return <span className={cn(className)}>{text}</span>;
};

export const StringCode = ({ text, className }: TextBaseProps) => {
  return <span className={cn("text-[#4CDD63]", className)}>{text}</span>;
};

export const NumberCode = ({ text, className }: TextBaseProps) => {
  return <span className={cn("text-[#E39D24]", className)}>{text}</span>;
};

export const CommentCode = ({ text, className }: TextBaseProps) => {
  return <span className={cn("text-[#5a5a5a]", className)}>// {text}</span>;
};

export const KeywordCode = ({ text, className }: TextBaseProps) => {
  return <span className={cn("text-th-primary", className)}>{text}</span>;
};

// Components

interface BaseDefineCodeProps {
  lineNum: number;
  numOfDots: number;
}

type DefineMethodCodeProps = BaseDefineCodeProps & {
  className?: string;
  type?: "specialFunc" | "func";
  methodText: string;
};

export const DefineMethodCode = ({ type = "func", className, methodText, lineNum, numOfDots }: DefineMethodCodeProps) => {
  return (
    <CodeLine numOfDots={numOfDots} lineNum={lineNum} className={className}>
      <MethodCode text={methodText} color={type} />
      <PlainCode text="() {" />
    </CodeLine>
  );
};

type DefinePropertiesCodeProps = BaseDefineCodeProps & {
  className?: string;
  plainTexts: string[];
  valueTexts: string[];
};

export const DefinePropertiesCode = ({ className, plainTexts, valueTexts, numOfDots, lineNum }: DefinePropertiesCodeProps) => {
  return plainTexts.map((plainText, index) => (
    <CodeLine numOfDots={numOfDots} lineNum={lineNum + index} className={className} key={index}>
      <PropNameCode text="this" />
      <PlainCode text={`.${plainText} = `} />
      {isNaN(Number(valueTexts[index])) ? <StringCode text={valueTexts[index]} /> : <NumberCode text={valueTexts[index]} />}
    </CodeLine>
  ));
};

type DefineReturnCodeProps = BaseDefineCodeProps & {
  className?: string;
  stringText: string;
  type: "string" | "array";
};

export const DefineReturnCode = ({ numOfDots, lineNum, stringText, type }: DefineReturnCodeProps) => {
  return (
    <CodeLine numOfDots={numOfDots} lineNum={lineNum}>
      <KeywordCode text="return" />
      {type === "array" && <PlainCode text=" [" />}
      <StringCode text={stringText} />
      {type === "array" && <PlainCode text="]" />}
      <PlainCode text=";" />
    </CodeLine>
  );
};
