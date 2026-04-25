"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  SlidersHorizontal,
  MessageCircle,
  Camera,
  PercentCircle,
  Send,
  CheckCircle2,
} from "lucide-react";
import { SMOOTH_EASE } from "@/constants/motion";

const buySteps = [
  {
    icon: SlidersHorizontal,
    step: "01",
    title: "Lọc sách theo Khoa",
    desc: "Chọn khoa của bạn để thu hẹp danh sách giáo trình phù hợp.",
  },
  {
    icon: Search,
    step: "02",
    title: "Tìm theo mã học phần",
    desc: "Tìm chính xác 100% theo mã học phần trong chương trình đào tạo.",
  },
  {
    icon: MessageCircle,
    step: "03",
    title: "Liên hệ người bán",
    desc: "Xem tình trạng sách và liên hệ người bán trực tiếp, nhanh chóng.",
  },
];

const sellSteps = [
  {
    icon: Camera,
    step: "01",
    title: "Chụp ảnh sách",
    desc: "Chụp ảnh bìa và nội dung sách, đảm bảo ảnh rõ nét và đủ sáng.",
  },
  {
    icon: PercentCircle,
    step: "02",
    title: "Chọn tình trạng sách",
    desc: "Đánh giá tình trạng sách: 90%, 80%, 70%... để người mua biết chính xác.",
  },
  {
    icon: Send,
    step: "03",
    title: "Nhấn đăng tải",
    desc: "Đăng tin lên hệ thống và chờ người mua liên hệ. Xong!",
  },
];

function StepCard({
  icon: Icon,
  step,
  title,
  desc,
  delay,
  inView,
  isLast,
}: {
  icon: React.ElementType;
  step: string;
  title: string;
  desc: string;
  delay: number;
  inView: boolean;
  isLast: boolean;
}) {
  return (
    <div className="relative flex gap-4">
      {/* Connector line */}
      {!isLast && (
        <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#9BC7EC] to-[#C4E5FB]" aria-hidden="true" />
      )}

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay, duration: 0.5, ease: SMOOTH_EASE }}
        className="flex gap-4 w-full pb-6 last:pb-0"
      >
        {/* Icon */}
        <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#9BC7EC] to-[#AFD6F8] flex items-center justify-center shadow-md shadow-[#9BC7EC]/30">
          <Icon size={18} className="text-white" />
        </div>

        {/* Content */}
        <div className="flex-1 pt-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-[#9BC7EC] tracking-widest">Bước {step}</span>
          </div>
          <h3 className="font-semibold text-[#0F172A] mb-1">{title}</h3>
          <p className="text-sm text-[#475569] leading-relaxed">{desc}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function HowItWorksSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" ref={ref} className="py-24 sm:py-32 bg-white">
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
              Hướng dẫn
            </span>
            <div className="h-px w-10 bg-[#9BC7EC]" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] font-display"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            🎥 Cách mua/bán giáo trình trong 60s
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Buy Card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: SMOOTH_EASE }}
            className="bg-[#E3FDFE] rounded-3xl p-7 border border-[#C1DDF3]/50"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#9BC7EC] to-[#C4E5FB] flex items-center justify-center shadow-sm">
                <Search size={18} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#0F172A] text-lg font-display" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Hướng dẫn tìm/mua sách
                </h3>
                <p className="text-xs text-[#475569]">3 bước đơn giản</p>
              </div>
            </div>

            <div className="space-y-0">
              {buySteps.map((s, i) => (
                <StepCard
                  key={s.step}
                  {...s}
                  delay={0.2 + i * 0.1}
                  inView={inView}
                  isLast={i === buySteps.length - 1}
                />
              ))}
            </div>
          </motion.div>

          {/* Sell Card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: SMOOTH_EASE }}
            className="bg-gradient-to-br from-[#9BC7EC] to-[#7AAFE0] rounded-3xl p-7"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center border border-white/30">
                <Send size={18} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg font-display" style={{ fontFamily: "'Playfair Display', serif" }}>
                  3 bước bán sách siêu nhanh
                </h3>
                <p className="text-xs text-white/70">Chỉ mất chưa đến 1 phút!</p>
              </div>
            </div>

            <div className="space-y-0">
              {sellSteps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className={`relative flex gap-4 ${i < sellSteps.length - 1 ? "pb-6" : ""}`}
                >
                  {i < sellSteps.length - 1 && (
                    <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-white/30" aria-hidden="true" />
                  )}
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center border border-white/30">
                    <s.icon size={18} className="text-white" />
                  </div>
                  <div className="pt-1">
                    <span className="text-xs font-bold text-white/60 tracking-widest">Bước {s.step}</span>
                    <h3 className="font-semibold text-white mb-1">{s.title}</h3>
                    <p className="text-sm text-white/80 leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Emphasis */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-6 flex items-center gap-3 bg-white/20 backdrop-blur rounded-2xl p-4 border border-white/20"
            >
              <CheckCircle2 size={20} className="text-white flex-shrink-0" />
              <p className="text-white font-semibold text-sm">
                👉 Chỉ mất chưa đến 1 phút để hoàn tất!
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom mockup hint */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex flex-wrap justify-center items-center gap-3">
            {["📸 Chụp ảnh", "🏷️ Định giá", "📤 Đăng tải", "💬 Nhận hỏi", "✅ Giao sách"].map(
              (step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="bg-white border border-[#C1DDF3] rounded-xl px-4 py-2 text-sm font-medium text-[#475569] shadow-sm">
                    {step}
                  </span>
                  {i < 4 && (
                    <span className="text-[#9BC7EC] font-bold text-lg" aria-hidden="true">→</span>
                  )}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
