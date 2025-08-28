"use client";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export function PrimaryButton({ children }: React.PropsWithChildren<{}>) {
  return (
    <HoverBorderGradient
      containerClassName="rounded"
      as="button"
      className="bg-primary-500 text-secondary-900 hover:bg-primary-600 flex items-center space-x-2 font-semibold px-6 py-3 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      {children}
    </HoverBorderGradient>
  );
}
