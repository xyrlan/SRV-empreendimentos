"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/image-slider";


export function ImagesSliderProvider({ children }: { children: React.ReactNode }) {
  const images = [
    "/srv-bg.jpg",
    "/srv-bg2.jpg",
  ];
  return (
    <ImagesSlider className="h-full px-4 max-lg:pt-32 pt-4 pb-4" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center "
      >
        {children}
      </motion.div>
    </ImagesSlider>
  );
}
