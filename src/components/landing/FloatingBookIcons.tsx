"use client";

import { motion } from "framer-motion";
import { BookOpen, Bookmark, Sparkles, GraduationCap } from "lucide-react";

const ICONS = [
  { Icon: BookOpen, size: 24, top: "15%", left: "10%", delay: 0 },
  { Icon: Bookmark, size: 20, top: "25%", left: "85%", delay: 2 },
  { Icon: Sparkles, size: 28, top: "65%", left: "5%", delay: 1 },
  { Icon: GraduationCap, size: 24, top: "80%", left: "90%", delay: 3 },
  { Icon: BookOpen, size: 18, top: "10%", left: "45%", delay: 4 },
];

export default function FloatingBookIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
      {ICONS.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 0.2, 0.2, 0],
            y: [0, -30, -10, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
          className="absolute text-emerald-600/30"
          style={{ top: item.top, left: item.left }}
        >
          <item.Icon size={item.size} />
        </motion.div>
      ))}
    </div>
  );
}
