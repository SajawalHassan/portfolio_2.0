"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative w-full max-w-[840px] xl:max-w-[1340px] mx-auto h-full mt-[100px]",
        className
      )}
    >
      <div className="absolute -left-4 sm:left-8 md:left-0 top-3">
        <div className="h-[18px] w-[18px] rounded-full border-[4px] border-th-primary ml-[25px] " />
        <p className="text-th-accent font-bold uppercase rotate-90 absolute left-[4.5px] top-[380.5px] [text-shadow:0px_6px_20px_#b41817]">
          Scroll
        </p>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight} // Set the SVG height
          className="ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} 24V ${svgHeight}`}
            fill="none"
            stroke="#F1221F"
            strokeOpacity="0.25"
            strokeWidth="5"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="5.5"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1} // set y1 for gradient
              y2={y2} // set y2 for gradient
            >
              <stop stopColor="#E34400" stopOpacity="0"></stop>
              <stop stopColor="#E34400"></stop>
              <stop offset="0.325" stopColor="#E34400"></stop>
              <stop offset="1" stopColor="#E34400" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
