"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const Jumbotron = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Create scroll-based animations
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const imageY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  return (
    <section
      ref={containerRef}
      className="px-4 py-10 md:py-24 overflow-hidden min-h-[90vh] flex items-center"
      id="home"
    >
      <div className="container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="flex items-center md:px-8 md:pl-[200px]"
            style={{ opacity: textOpacity, y: textY }}
          >
            <div className="space-y-6">
              <motion.p
                className="font-semibold text-[#5E3BEE]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Hey, I am Gigih Rahmandita
              </motion.p>

              <motion.h1
                className="text-4xl font-semibold md:text-5xl text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                I Am A Fullstack Developer
              </motion.h1>

              <motion.p
                className="text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                I’m a Full Stack Developer who helps bring your web ideas to
                life with Next.js, React, Golang, TypeScript, JavaScript, PHP,
                and DevOps expertise.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#contact-form"
                  className="bg-[#5E3BEE] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-[#4c30c0] hover:shadow-lg hover:shadow-[#5E3BEE]/30 focus:outline-none focus:ring-2 focus:ring-[#5E3BEE] focus:ring-offset-2 relative overflow-hidden group"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-300 opacity-20"></span>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ scale: imageScale, y: imageY }}
          >
            <div className="relative h-[320px] w-full md:h-[500px]">
              <Image
                src="/mypict.png"
                alt="Gigih Rahmandita"
                width={600}
                height={600}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="drop-shadow-xl object-contain"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
