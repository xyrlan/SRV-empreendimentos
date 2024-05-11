"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  // const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  // useEffect(() => {
  //   animate(
  //     "span",
  //     {
  //       opacity: 1,
  //     },
  //     {
  //       duration: 1,
  //       delay: stagger(0.1),
  //     }
  //   );
  // }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div >
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
           	transition={{duration: 1, delay: 0.05 * idx}}
           	viewPort={{once: true}}
              key={word + idx}

              className="dark:text-white text-black"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-normal", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black text-base leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
