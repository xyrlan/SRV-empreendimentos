"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { CallButton } from "../buttons/CallButton";
import Logo from "../Logo";
import { navItems } from "@/lib/navItems";
import { Menu, X } from "lucide-react";
import MobileNavbar from "../mobile-navbar";
import { ModeToggle2 } from "../mode-toggle2";

export const FloatingNav = ({
  className,
}: {
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <header className="overflow-hidden">
      <AnimatePresence mode="wait">
        {open ? (
          <motion.div
            initial={{
              opacity: 1,
              y: -100,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.2,
            }}
            className={cn(
              "flex max-w-6xl fixed sm:top-8 top-0 inset-x-0 mx-auto  dark:bg-slate-950 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 px-4 sm:pl-8 py-2 items-center justify-between space-x-4",
              className
            )}
          >
            <Logo width={100} />
            <ModeToggle2 />
            <X onClick={() => setOpen(!open)} className="h-7 w-auto block md:hidden cursor-pointer hover:brightness-75 duration-200" />
          </motion.div>
        ) : (
          <motion.div
            initial={{
              opacity: 1,
              y: -100,
            }}
            animate={{
              y: visible ? 0 : -100,
              opacity: visible ? 1 : 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className={cn(
              "flex max-w-6xl fixed sm:top-8 top-0 max-sm:rounded-none inset-x-0 mx-auto md:border border-slate-400 dark:border-slate-700 rounded-xl dark:bg-slate-950 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 px-4 sm:pl-8 py-2 items-center justify-between space-x-4",
              className
            )}
          >
            <Logo width={100} />
            <ModeToggle2 />
            <Menu onClick={() => setOpen(!open)} className="h-7 w-auto block md:hidden cursor-pointer hover:brightness-75 duration-200" />
            <div className=" items-center justify-between space-x-4 select-none hidden md:flex max-md:text-sm">
              {navItems.map((navItem: any, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-slate-400 hover:text-neutral-500 duration-200 transition-all font-medium"
                  )}
                >
                  {/* <span className="block sm:hidden">{navItem.icon}</span> */}
                  <span className="hidden sm:block max-md:text-sm">{navItem.name}</span>
                </Link>
              ))}
            </div>
            <div className="hidden md:block">
              <CallButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <MobileNavbar setOpen={setOpen} />
        )}
      </AnimatePresence>
    </header>
  );
};
