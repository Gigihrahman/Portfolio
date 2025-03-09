"use client";
import Card from "@/components/Card";
import { projects } from "./data";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function MyPorto() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative mt-[5vh]" id="portfolio">
      {/* Sticky header container */}
      <div className="sticky top-0 bg-white/90 backdrop-blur-sm py-4 z-10 shadow-sm">
        <h2 className="text-3xl font-bold text-blue-600 uppercase tracking-wider font-sans mb-3 text-center">
          My Portfolio
        </h2>

        <div className="bg-gray-100 border-l-4 border-blue-600 p-4 mb-2 italic text-gray-700 font-light text-lg max-w-lg mx-auto">
          Showcasing my best work and projects
        </div>
      </div>

      {/* Projects wrapper */}
      <div className="relative mt-6">
        {projects.map((project, index) => {
          const targetScale = 1 - (projects.length - index) * 0.05;
          return (
            <Card
              key={index}
              i={index}
              {...project}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
}
