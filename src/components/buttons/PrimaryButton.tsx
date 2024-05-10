"use client";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import Link from "next/link";
 
export function PrimaryButton({children}: React.PropsWithChildren<{}>) {
  return (

      <HoverBorderGradient
        containerClassName="rounded"
        as="button"
        className="dark:bg-slate-950 bg-white text-slate-950 dark:text-white flex items-center space-x-2 "
      >
        {children}
      </HoverBorderGradient>
    
  );
}
 