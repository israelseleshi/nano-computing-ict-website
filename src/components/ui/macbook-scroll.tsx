"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
}: {
  src?: string;
  showGradient?: boolean;
  title?: React.ReactNode | string;
  badge?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1 : 1.5]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1 : 1.5]
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0.6, 0.9], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0.6, 0.7], [1, 0]);

  return (
    <div
      ref={ref}
      className="flex min-h-[200vh] flex-col items-center justify-start py-0 md:py-80"
    >
      <div
        className="relative -translate-y-40"
        style={{
          transform: "perspective(800px) rotateX(-25deg)",
        }}
      >
        <Lid
          src={src}
          scaleX={scaleX}
          scaleY={scaleY}
          rotate={rotate}
          translate={translate}
        />
      </div>
      <div className="relative -mt-[6.5rem] h-[22rem] w-[32rem]">
        <div className="absolute top-0 h-full w-full"
          style={{
            perspective: "800px",
          }}
        >
          <Keyboard scaleX={scaleX} scaleY={scaleY} />
        </div>
      </div>
    </div>
  );
};

export const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
  src,
}: {
  scaleX: any;
  scaleY: any;
  rotate: any;
  translate: any;
  src?: string;
}) => {
  return (
    <div className="relative [perspective:800px]">
      <div
        style={{
          transform: "perspective(800px) rotateY(-0deg) rotateX(0deg)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="relative h-[12rem] w-[32rem] rounded-2xl bg-[#010101]"
      >
        <div
          style={{
            transform: "perspective(800px) rotateY(0deg) rotateX(0deg)",
            transformOrigin: "bottom",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-0 h-full w-full rounded-2xl bg-[#010101]"
        >
          <div className="absolute inset-0 h-[96%] w-[98%] m-auto rounded-lg bg-black">
            {src ? <Image
              src={src}
              alt="macbook"
              fill
              className="object-cover object-center rounded-lg"
            /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Keyboard = ({
  scaleX,
  scaleY,
}: {
  scaleX: any;
  scaleY: any;
}) => {
  return (
    <div className="h-[22rem] w-[32rem] [perspective:800px] relative">
      <motion.div
        style={{
          transform: "perspective(800px) rotateX(-25deg) scale(1)",
          transformOrigin: "top",
          backgroundColor: "#010101",
        }}
        className="h-full w-full absolute top-0 rounded-2xl"
      ></motion.div>
      <div className="h-full w-full absolute"
        style={{
          transform: "perspective(800px) rotateX(-25deg)",
          transformOrigin: "top",
        }}
      >
        <div className="absolute w-[60%] h-[10%] bg-[#080808] top-[14%] left-[20%] rounded-md" />
      </div>
    </div>
  );
};
