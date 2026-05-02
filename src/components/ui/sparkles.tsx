"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SparklesProps {
  className?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
}

export const SparklesCore = (props: SparklesProps) => {
  const {
    className,
    minSize = 0.6,
    maxSize = 1.5,
    particleDensity = 100,
    particleColor = "#ffffff",
  } = props;
  const [particles, setParticles] = useState<Array<any>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: particleDensity }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (maxSize - minSize) + minSize,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, [maxSize, minSize, particleDensity]);

  return (
    <div className={cn("absolute inset-0 z-0", className)}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            backgroundColor: particleColor,
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
