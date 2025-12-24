'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
}: {
  src?: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
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
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="flex h-[200vh] flex-col items-center justify-start py-0 [perspective:800px]"
    >
      <motion.h2
        style={{
          translateY: textTransform,
          opacity: textOpacity,
        }}
        className="dark:text-white text-neutral-800 text-3xl font-bold mb-20 text-center"
      >
        {title}
      </motion.h2>
      {/* Lid */}
      <Lid
        src={src}
        scaleX={scaleX}
        scaleY={scaleY}
        rotate={rotate}
        translate={translate}
      />

      {/* Base area */}
      <div className="h-[22rem] w-[32rem] bg-gray-200 dark:bg-[#272729] rounded-2xl overflow-hidden relative -z-10">
        {/* above keyboard bar */}
        <div className="h-10 w-full relative">
          <div className="absolute inset-x-0 mx-auto w-[80%] h-4 bg-gray-100 dark:bg-[#121212] rounded-b-md" />
        </div>
        <div className="h-full w-full relative p-2">
          <Keyboard />
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
          transform: 'perspective(800px) rotateY(-25deg) rotateX(13deg)',
          transformOrigin: 'bottom left',
        }}
        className="h-[12rem] w-[32rem] bg-gray-200 dark:bg-[#272729] rounded-2xl p-2 relative"
      >
        <div
          style={{
            boxShadow: '0px 2px 0px 2px var(--neutral-900) inset',
          }}
          className="absolute inset-0 bg-gray-200 dark:bg-[#272729] rounded-lg flex items-center justify-center"
        >
          {src ? (
            <Image
              src={src}
              alt="macbook"
              fill
              className="object-cover object-left-top absolute rounded-lg inset-0 h-full w-full"
            />
          ) : (
            <div className="h-full w-full bg-white dark:bg-black" />
          )}
        </div>
      </div>
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformOrigin: 'top center',
          transformStyle: 'preserve-3d',
        }}
        className="h-96 w-[32rem] absolute inset-0 bg-gray-200 dark:bg-[#272729] rounded-2xl p-2"
      >
        <div className="absolute inset-0 bg-[#272729] rounded-lg" />
        {src ? (
          <Image
            src={src}
            alt="macbook"
            fill
            className="object-cover object-left-top absolute rounded-lg inset-0 h-full w-full"
          />
        ) : (
          <div className="h-full w-full bg-white dark:bg-black" />
        )}
      </motion.div>
    </div>
  );
};

export const Keyboard = () => {
  return (
    <div className="w-full h-full bg-[#0A090D] mx-auto rounded-md overflow-hidden">
      <Keypad />
      <BottomBar />
    </div>
  );
};

export const Keypad = () => {
  return (
    <div className="h-full w-full p-1">
      <div className="mx-auto h-[1rem] w-[80%] rounded-md bg-gradient-to-tr from-[#424242] to-[#303030]" />
      <div className="flex justify-center mx-auto mt-2">
        <Keys />
      </div>
      <div className="mx-auto flex h-[3.5rem] w-[85%] items-center justify-center rounded-xl bg-gradient-to-tr from-[#424242] to-[#303030] p-2">
        <div className="h-full w-full rounded-md bg-[#212121]" />
      </div>
    </div>
  );
};

const keys = [
  'M',
  'A',
  'C',
  'B',
  'O',
  'O',
  'K',
  'A',
  'I',
  'R',
  'S',
  'P',
  'A',
  'C',
  'E',
  'E',
  'N',
  'T',
  'E',
  'R',
  'N',
  'A',
  'N',
  'O',
];
export const Keys = () => {
  return (
    <div className="grid grid-cols-6 gap-1">
      {keys.map((key, i) => (
        <div
          key={i}
          className="h-6 w-6 rounded-[4px] bg-gradient-to-tr from-[#424242] to-[#303030] p-0.5"
        >
          <div className="h-full w-full rounded-[3px] bg-[#212121] flex justify-center items-center text-[5px] text-neutral-400">
            {key}
          </div>
        </div>
      ))}
    </div>
  );
};

export const BottomBar = () => {
  return (
    <div className="absolute h-2 w-full inset-x-0 bottom-0 bg-gradient-to-tr from-[#424242] to-[#303030]"></div>
  );
};
