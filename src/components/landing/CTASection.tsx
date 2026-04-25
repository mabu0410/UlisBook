"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, ArrowRight } from "lucide-react";
import { SMOOTH_EASE } from "@/constants/motion";

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="cta"
      ref={ref}
      className="py-24 sm:py-32 relative overflow-hidden cta-bg"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-[#9BC7EC]/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#AFD6F8]/25 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: SMOOTH_EASE }}
          className="bg-white/70 backdrop-blur-xl rounded-4xl p-10 sm:p-14 border border-[#9BC7EC]/30 shadow-xl shadow-[#9BC7EC]/15"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9BC7EC] to-[#7AAFE0] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#9BC7EC]/30"
          >
            <BookOpen size={28} className="text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4 font-display leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Sẵn sàng trao đổi giáo trình cùng cộng đồng ULIS?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#475569] text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Bắt đầu đăng sách cũ hoặc tìm giáo trình cần thiết chỉ trong vài thao tác đơn giản.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={() => scrollTo("how-it-works")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary text-white font-semibold px-8 py-4 rounded-2xl flex items-center gap-2 justify-center text-base"
              aria-label="Khám phá sách"
            >
              <BookOpen size={18} />
              Khám phá sách
            </motion.button>
            <motion.button
              onClick={() => scrollTo("contact")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#0F172A] text-white font-semibold px-8 py-4 rounded-2xl flex items-center gap-2 justify-center text-base hover:bg-[#1E293B] transition-colors"
              aria-label="Đăng sách ngay"
            >
              Đăng sách ngay
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#475569]"
          >
            {["✅ Miễn phí đăng sách", "🔒 Kết nối an toàn", "⚡ Tìm sách trong 60s"].map(
              (item) => (
                <span key={item} className="font-medium">
                  {item}
                </span>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
