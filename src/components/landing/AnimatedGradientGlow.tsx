"use client";

import { motion } from "framer-motion";

export default function AnimatedGradientGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
          scale: [1, 1.1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-[140px]"
      />
      <motion.div
        animate={{
          x: [0, 50, -100, 0],
          y: [0, 50, 50, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[100px]"
      />
    </div>
  );
}
