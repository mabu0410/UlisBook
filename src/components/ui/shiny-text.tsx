"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
  shimmerWidth?: number;
}

export function ShinyText({ children, className, shimmerWidth = 100 }: ShinyTextProps) {
  return (
    <motion.div
      style={{
        "--shimmer-width": `${shimmerWidth}px`,
      } as React.CSSProperties}
      className={cn(
        "mx-auto max-w-md text-neutral-600/50 dark:text-neutral-400/50 ",
        // Shimmer effect
        "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
        // Shimmer gradient
        "bg-[linear-gradient(110deg,transparent,45%,#0f172a,55%,transparent)] dark:bg-[linear-gradient(110deg,transparent,45%,#fff,55%,transparent)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
