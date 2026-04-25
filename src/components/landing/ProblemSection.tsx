"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookX, Shuffle, Clock, Trash2 } from "lucide-react";
import { SMOOTH_EASE } from "@/constants/motion";

const problems = [
  {
    icon: BookX,
    title: "Khó tìm đúng giáo trình",
    desc: "Không có nơi lọc sách theo khoa và mã học phần chính xác, khiến việc tìm kiếm mất nhiều công sức.",
    color: "from-[#C4E5FB] to-[#DAF1FE]",
  },
  {
    icon: Shuffle,
    title: "Thông tin phân tán",
    desc: "Không có nền tảng chung, thông tin trao đổi rải rác khắp nơi, khó tổng hợp và theo dõi.",
    color: "from-[#DAF1FE] to-[#AFD6F8]",
  },
  {
    icon: Clock,
    title: "Mất thời gian trao đổi",
    desc: "Phải đăng bài qua nhiều kênh khác nhau, liên hệ qua lại mất nhiều công sức và thời gian.",
    color: "from-[#AFD6F8] to-[#C4E5FB]",
  },
  {
    icon: Trash2,
    title: "Giáo trình bị lãng phí",
    desc: "Nhiều giáo trình cũ bị bỏ phí sau mỗi học kỳ, không được tái sử dụng hiệu quả trong cộng đồng.",
    color: "from-[#C4E5FB] to-[#9BC7EC]",
  },
];

export default function ProblemSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="problems"
      ref={ref}
      className="py-24 sm:py-32"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #E3FDFE 100%)" }}
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
              Vấn đề
            </span>
            <div className="h-px w-10 bg-[#9BC7EC]" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4 font-display"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Hiện nay, sinh viên đang gặp vấn đề gì?
          </h2>
          <p className="text-[#475569] text-lg max-w-2xl mx-auto leading-relaxed">
            Trong bối cảnh nhu cầu sử dụng giáo trình ngày càng gia tăng, việc tìm kiếm và trao đổi
            giáo trình cũ giữa sinh viên vẫn còn nhiều hạn chế:
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {problems.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: SMOOTH_EASE }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white rounded-3xl p-6 border border-[#C1DDF3]/50 shadow-sm shadow-[#9BC7EC]/10 hover:shadow-md hover:shadow-[#9BC7EC]/20 transition-all duration-300 cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-sm`}
              >
                <Icon size={22} className="text-[#4A90C4]" />
              </div>
              <h3 className="font-semibold text-[#0F172A] text-lg mb-2">{title}</h3>
              <p className="text-[#475569] text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Solution hint */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur border border-[#9BC7EC]/30 rounded-2xl px-6 py-4 shadow-sm">
            <span className="text-2xl" aria-hidden="true">💡</span>
            <p className="text-[#475569] text-sm font-medium">
              <strong className="text-[#0F172A]">ULIS BOOK – LOOP</strong> ra đời để giải quyết tất cả những vấn đề trên!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
