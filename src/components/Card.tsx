"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  range: [number, number];
  targetScale: number;
  progress: any; // You can specify a more precise type if known
}

const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  src,
  link,
  color,
  range,
  targetScale,
  progress,
}) => {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]); // image zoom out animation
  const scale = useTransform(progress, range, [1, targetScale]); // stacking effect

  return (
    <div
      ref={container}
      className="cardContainer h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        className="card flex flex-col relative h-[500px] w-[1000px] rounded-3xl p-12 xl:h-[500px] xl:w-[1000px] lg:h-[450px] lg:w-[900px] md:h-[400px] md:w-[800px] sm:h-[350px] sm:w-[90%] sm:p-6"
        style={{
          scale,
          backgroundColor: color,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <h2 className="text-center m-0 text-2xl font-bold font-serif sm:text-lg">
          {title}
        </h2>

        {/* Mobile layout - Image first, then description */}
        <div className="flex flex-col h-full mt-8 gap-4 lg:hidden">
          {/* Image for mobile */}
          <div className="imgContainer relative w-full h-[55%] rounded-2xl overflow-hidden">
            <motion.div style={{ scale: imageScale }} className="w-full h-full">
              <Image fill src={src} alt={title} className="object-cover" />
            </motion.div>
          </div>

          {/* Description for mobile */}
          <div className="desc w-full text-sm">
            <p className="text-sm first-letter:text-xl line-clamp-1">
              {description}
            </p>
            <span className="flex items-center gap-1 mt-2">
              <Dialog>
                <DialogTrigger className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-black text-white hover:bg-black/90 transition-colors text-xs">
                  Visit Website
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-[90vw] max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-serif">
                      {title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="overflow-hidden rounded-lg h-64 md:h-80 lg:h-96">
                      <Image
                        src={src}
                        alt={title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <DialogDescription className="text-base md:text-lg space-y-4 max-h-64 md:max-h-80 lg:max-h-96 overflow-y-auto pr-2">
                        {description.split("\n\n").map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </DialogDescription>
                      {/* Visit website button removed */}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </span>
          </div>
        </div>

        {/* Desktop layout - Side by side */}
        <div className="hidden lg:flex h-full mt-12 gap-12 flex-row">
          {/* Description */}
          <div className="desc w-[40%] relative top-[10%] text-sm">
            <p className="text-base first-letter:text-2xl line-clamp-3">
              {description}
            </p>
            <span className="flex items-center gap-1">
              <Dialog>
                <DialogTrigger className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-black text-white hover:bg-black/90 transition-colors text-xs">
                  Visit Website
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-[90vw] max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-serif">
                      {title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="overflow-hidden rounded-lg h-64 md:h-80 lg:h-96">
                      <Image
                        src={src}
                        alt={title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <DialogDescription className="text-base md:text-lg space-y-4 max-h-64 md:max-h-80 lg:max-h-96 overflow-y-auto pr-2">
                        {description.split("\n\n").map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </DialogDescription>
                      {/* Visit website button removed */}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </span>
          </div>

          {/* Image for desktop */}
          <div className="imgContainer relative w-[60%] h-full rounded-3xl overflow-hidden">
            <motion.div style={{ scale: imageScale }} className="w-full h-full">
              <Image fill src={src} alt={title} className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
