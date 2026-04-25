"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Heart, Lightbulb, HandHeart, Leaf } from "lucide-react";
import { SMOOTH_EASE } from "@/constants/motion";

export default function VisionMissionSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="vision"
      ref={ref}
      className="py-24 sm:py-32"
      style={{ background: "linear-gradient(135deg, #E3FDFE 0%, #DAF1FE 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-2 justify-center mb-4">
            <div className="h-px w-10 bg-[#9BC7EC]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9BC7EC]">
              Định hướng
            </span>
            <div className="h-px w-10 bg-[#9BC7EC]" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] font-display"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tầm nhìn &amp; Sứ mệnh
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: SMOOTH_EASE }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="relative bg-white rounded-3xl p-8 border border-[#9BC7EC]/30 shadow-lg shadow-[#9BC7EC]/10 overflow-hidden transition-all duration-300"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-full bg-gradient-to-bl from-[#DAF1FE] to-transparent opacity-60 pointer-events-none" aria-hidden="true" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#9BC7EC] to-[#AFD6F8] flex items-center justify-center shadow-md shadow-[#9BC7EC]/30">
                  <Target size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#9BC7EC]">Vision</p>
                  <h3 className="text-xl font-bold text-[#0F172A] font-display" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Tầm nhìn
                  </h3>
                </div>
              </div>

              <p className="text-[#475569] leading-relaxed text-base mb-6">
                Trở thành <strong className="text-[#0F172A]">nền tảng trao đổi giáo trình hàng đầu</strong> trong
                cộng đồng sinh viên ULIS, hướng tới mở rộng ra các trường đại học khác.
              </p>

              <div className="flex items-center gap-2 p-3 bg-[#E3FDFE] rounded-xl">
                <Lightbulb size={16} className="text-[#9BC7EC] flex-shrink-0" />
                <p className="text-xs text-[#475569]">
                  Xây dựng hệ sinh thái học tập bền vững cho sinh viên Việt Nam
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: SMOOTH_EASE }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="relative bg-gradient-to-br from-[#9BC7EC] to-[#7AAFE0] rounded-3xl p-8 shadow-lg shadow-[#9BC7EC]/30 overflow-hidden transition-all duration-300"
          >
            {/* Decorative */}
            <div className="absolute bottom-0 right-0 w-48 h-48 rounded-tl-full bg-white/10 pointer-events-none" aria-hidden="true" />
            <div className="absolute top-0 left-0 w-32 h-32 rounded-br-full bg-white/5 pointer-events-none" aria-hidden="true" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center border border-white/30">
                  <Heart size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/70">Mission</p>
                  <h3 className="text-xl font-bold text-white font-display" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Sứ mệnh
                  </h3>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  {
                    icon: Leaf,
                    text: "Giúp sinh viên tiết kiệm chi phí học tập một cách thiết thực",
                  },
                  {
                    icon: HandHeart,
                    text: "Tạo môi trường chia sẻ tài nguyên học tập hiệu quả trong cộng đồng",
                  },
                  {
                    icon: Heart,
                    text: "Góp phần xây dựng cộng đồng sinh viên kết nối – bền vững – hỗ trợ lẫn nhau",
                  },
                ].map(({ icon: Icon, text }, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.35 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={14} className="text-white" />
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">{text}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
