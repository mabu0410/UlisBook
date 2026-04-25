"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Users, ArrowLeftRight, Sparkles } from "lucide-react";
import { SMOOTH_EASE } from "@/constants/motion";

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: SMOOTH_EASE },
  },
});

const toPx = (value: number) => `${value.toFixed(3)}px`;

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex items-center gap-2 justify-center mb-4"
        >
          <div className="h-px w-10 bg-[#9BC7EC]" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#9BC7EC]">
            Về chúng tôi
          </span>
          <div className="h-px w-10 bg-[#9BC7EC]" />
        </motion.div>

        <motion.h2
          variants={fadeUp(0.05)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#0F172A] mb-16 font-display"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          ULIS BOOK – LOOP là gì?
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <p className="text-[#475569] text-lg leading-relaxed mb-8">
              <strong className="text-[#0F172A]">ULIS BOOK – LOOP</strong> là nền tảng hỗ trợ sinh viên ULIS{" "}
              <strong className="text-[#0F172A]">trao đổi, mua bán giáo trình cũ</strong> một cách dễ dàng.
              Dự án giúp tối ưu chi phí học tập và tận dụng lại nguồn tài liệu sẵn có trong cộng đồng sinh viên.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: BookOpen,
                  title: "Nền tảng chuyên biệt",
                  desc: "Được xây dựng riêng cho sinh viên ULIS, với hệ thống lọc theo khoa và mã học phần.",
                },
                {
                  icon: Users,
                  title: "Cộng đồng tin cậy",
                  desc: "Kết nối trực tiếp giữa sinh viên trong trường, đảm bảo uy tín và an toàn.",
                },
                {
                  icon: Sparkles,
                  title: "Đơn giản & nhanh chóng",
                  desc: "Đăng sách hoặc tìm sách chỉ trong vài thao tác, không phức tạp, không mất thời gian.",
                },
              ].map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  variants={fadeUp(0.15 + i * 0.07)}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-[#E3FDFE] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#9BC7EC] to-[#C4E5FB] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F172A] mb-1">{title}</h3>
                    <p className="text-sm text-[#475569] leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Loop visual */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="relative flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Center circle */}
              <div className="relative w-56 h-56 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C4E5FB] to-[#9BC7EC] opacity-20 animate-pulse" />
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#DAF1FE] to-[#C4E5FB] flex items-center justify-center border border-[#9BC7EC]/30 shadow-inner">
                  <div className="text-center">
                    <ArrowLeftRight size={32} className="text-[#6BAED6] mx-auto mb-2" />
                    <p className="text-xs font-bold text-[#0F172A] uppercase tracking-wide">LOOP</p>
                    <p className="text-[10px] text-[#475569]">Vòng lặp trao đổi</p>
                  </div>
                </div>

                {/* Orbit nodes */}
                {[
                  { icon: BookOpen, label: "Sách cũ", angle: 0, color: "from-[#9BC7EC] to-[#C4E5FB]" },
                  { icon: Users, label: "Sinh viên", angle: 120, color: "from-[#AFD6F8] to-[#9BC7EC]" },
                  { icon: Sparkles, label: "Giá trị", angle: 240, color: "from-[#C4E5FB] to-[#AFD6F8]" },
                ].map(({ icon: Icon, label, angle, color }) => {
                  const rad = (angle * Math.PI) / 180;
                  const r = 110;
                  const x = Math.cos(rad) * r;
                  const y = Math.sin(rad) * r;
                  return (
                    <motion.div
                      key={label}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      style={{ position: "absolute", top: "50%", left: "50%", transformOrigin: "0 0" }}
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{
                          position: "absolute",
                          top: toPx(y - 24),
                          left: toPx(x - 24),
                          width: "48px",
                          height: "48px",
                        }}
                        className={`rounded-xl bg-gradient-to-br ${color} flex flex-col items-center justify-center shadow-lg cursor-default`}
                      >
                        <Icon size={18} className="text-white mb-0.5" />
                        <span className="text-[8px] text-white font-semibold">{label}</span>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Stats below */}
              <div className="flex justify-around mt-10">
                {[
                  { value: "500+", label: "Sinh viên" },
                  { value: "200+", label: "Giáo trình" },
                  { value: "4 Khoa", label: "Ngôn ngữ" },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <p className="text-xl font-bold text-[#0F172A] font-display" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {value}
                    </p>
                    <p className="text-xs text-[#475569]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
