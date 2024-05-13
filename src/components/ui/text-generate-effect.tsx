"use client";
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.05 * idx }}
              viewport={{ once: true }}
              key={word + idx}

              className=""
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
      <div className="">
        <div className="  leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
