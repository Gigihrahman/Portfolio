"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Aboutme = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40" id="aboutme">
      <div className="relative overflow-hidden py-10 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-br">
        {/* Background patterns - made responsive */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-20 sm:w-30 md:w-40 h-20 sm:h-30 md:h-40 rounded-full bg-blue-300"></div>
          <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-30 sm:w-40 md:w-60 h-30 sm:h-40 md:h-60 rounded-full bg-purple-300"></div>
          <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-10 sm:w-15 md:w-20 h-10 sm:h-15 md:h-20 rounded-full bg-yellow-300"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center justify-between"
          >
            {/* Text content */}
            <div className="w-full lg:w-3/5">
              <div className="relative">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 relative inline-block"
                >
                  About Me
                  <span className="absolute bottom-0 left-0 w-full h-1 sm:h-2 bg-blue-500 opacity-70 rounded-full transform translate-y-1 sm:translate-y-2"></span>
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 text-gray-700"
              >
                Saya adalah seorang{" "}
                <span className="font-bold text-blue-600">
                  full stack developer
                </span>{" "}
                yang memiliki ketertarikan mendalam dalam pengembangan website.
                Saya senang menggunakan teknologi terbaru seperti{" "}
                <span className="font-medium">
                  React, Next.js, JavaScript, TypeScript, Golang, dan PHP
                </span>
                .
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700"
              >
                Saya sangat mengutamakan{" "}
                <span className="font-bold text-blue-600">
                  komunikasi dalam tim
                </span>
                , seperti yang saya lakukan saat terlibat dalam proyek Letsea
                yang melibatkan enam anggota. Dalam proyek tersebut, saya
                bertanggung jawab untuk membuat REST API menggunakan Node.js,
                Express.js, dan MySQL, yang membantu meningkatkan kerjasama dan
                kekompakan kelompok.
              </motion.p>

              {/* Tech stack badges - made responsive */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-1 sm:gap-2 mt-6 sm:mt-8"
              >
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "Express",
                  "MySQL",
                  "Golang",
                  "PHP",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-100 text-gray-800 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors duration-200 ease-in-out"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Illustration - made responsive */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full sm:w-3/4 md:w-2/3 lg:w-2/5 mt-8 lg:mt-0 flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square">
                <div className="absolute inset-0 bg-blue-50 rounded-full transform -translate-x-2 sm:-translate-x-4 translate-y-2 sm:translate-y-4"></div>
                <div className="absolute inset-0 bg-blue-100 rounded-full opacity-60 transform translate-x-1 sm:translate-x-2 -translate-y-1 sm:-translate-y-2"></div>
                <div className="relative rounded-2xl overflow-hidden w-full h-full">
                  <Image
                    src="/aboutme.png" // Replace with your actual image
                    alt="Developer illustration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 w-12 sm:w-24 h-12 sm:h-24 bg-yellow-300 rounded-full opacity-60"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
