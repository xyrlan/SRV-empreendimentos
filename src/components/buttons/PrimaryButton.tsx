"use client";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
 
export function PrimaryButton({children}: React.PropsWithChildren<{}>) {
  return (
    <div className=" flex justify-center text-center">
      <HoverBorderGradient
        as="button"
        className="dark:bg-slate-950 bg-white text-slate-950 dark:text-white flex items-center space-x-2 "
      >
        <span>{children}</span>
      </HoverBorderGradient>
    </div>
  );
}
 