'use client'
import { cn } from "@/utils/cn";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn("relative p-[2px] group hover:-translate-x-1 hover:-translate-y-1 duration-200", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "200% 200%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#5b7083,transparent),radial-gradient(circle_farthest-side_at_100%_0,#162447,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#1e4158,transparent),radial-gradient(circle_farthest-side_at_0_0,#3a506b,#1d1d1d)]"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-xl z-[1] will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#5b7083,transparent),radial-gradient(circle_farthest-side_at_100%_0,#162447,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#1e4158,transparent),radial-gradient(circle_farthest-side_at_0_0,#3a506b,#1d1d1d)]"
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};