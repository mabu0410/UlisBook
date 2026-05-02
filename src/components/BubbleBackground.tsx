"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Bubble = {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
  opacity: number;
};

type BubbleBackgroundProps = {
  count?: number;
  minSize?: number;
  maxSize?: number;
  className?: string;
};

export default function BubbleBackground({
  count = 24,
  minSize = 10,
  maxSize = 42,
  className,
}: BubbleBackgroundProps) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Tránh lỗi hydration: Chỉ chạy trên client
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const finalCount = isMobile ? Math.floor(count / 2) : count;
    
    const newBubbles = Array.from({ length: finalCount }).map((_, i) => ({
      id: i,
      size: Math.random() * (maxSize - minSize) + minSize,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 10 + 15, // Chuyển động chậm, mềm
      opacity: Math.random() * 0.4 + 0.1,
    }));
    setBubbles(newBubbles);
  }, [count, minSize, maxSize]);

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden z-[1]", className)}>
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute bottom-0 animate-bubble-rise"
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            opacity: bubble.opacity,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
          }}
        >
          <div className="h-full w-full rounded-full border border-emerald-200/50 bg-white/25 shadow-[0_8px_30px_rgba(16,185,129,0.18)] backdrop-blur-sm animate-bubble-sway" />
        </div>
      ))}
    </div>
  );
}
