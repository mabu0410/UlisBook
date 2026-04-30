"use client";

import { motion, Variants } from "framer-motion";
import { SearchX, LayoutDashboard, Clock, BookX, Target, Heart } from "lucide-react";

const PAIN_POINTS = [
  {
    icon: <SearchX className="w-6 h-6 text-brand-darkest" />,
    title: "Khó tìm giáo trình",
    description: "Khó tìm đúng giáo trình theo khoa và mã học phần.",
  },
  {
    icon: <LayoutDashboard className="w-6 h-6 text-brand-darkest" />,
    title: "Thông tin phân tán",
    description: "Không có nền tảng chung, sinh viên phải tự tìm kiếm khắp nơi.",
  },
  {
    icon: <Clock className="w-6 h-6 text-brand-darkest" />,
    title: "Mất thời gian",
    description: "Tốn nhiều thời gian đăng bài, trao đổi qua nhiều kênh khác nhau.",
  },
  {
    icon: <BookX className="w-6 h-6 text-brand-darkest" />,
    title: "Lãng phí tài nguyên",
    description: "Nhiều giáo trình cũ còn tốt nhưng bị bỏ phí sau mỗi kỳ học.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function IntroSection() {
  return (
    <section id="about" className="bg-white py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-lightest/40 via-white to-white pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1.5 px-4 rounded-full bg-brand-lighter/80 border border-brand-light/50 text-brand-darkest text-xs font-bold tracking-widest uppercase mb-6 shadow-sm backdrop-blur-sm"
          >
            Giới Thiệu
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-heading text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-darkest to-brand-medium sm:text-5xl mb-8 drop-shadow-sm"
          >
            ULIS BOOK – LOOP là gì?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="flex justify-center mb-8 relative"
          >
            <div className="absolute inset-0 bg-brand-light/20 blur-2xl rounded-full w-32 h-32 mx-auto"></div>
            <img src="/images/logo.png" alt="Logo ULIS Book Loop" className="w-28 h-28 object-contain drop-shadow-xl relative z-10 hover:scale-105 transition-transform duration-500" />
          </motion.div>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3, duration: 0.6 }}
             className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium"
          >
            ULIS BOOK – LOOP là nền tảng hỗ trợ sinh viên ULIS trao đổi, mua bán giáo trình cũ một cách dễ dàng. Dự án giúp tối ưu chi phí học tập và tận dụng lại nguồn tài liệu sẵn có trong cộng đồng sinh viên.
          </motion.p>
        </div>

        {/* Vấn đề đặt ra */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-brand-darkest mb-4 font-heading">
              Hiện nay (Vấn đề đặt ra)
            </h3>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Trong bối cảnh nhu cầu sử dụng giáo trình ngày càng gia tăng, việc tìm kiếm và trao đổi giáo trình cũ giữa sinh viên vẫn còn nhiều hạn chế:
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {PAIN_POINTS.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group bg-white/70 backdrop-blur-xl border border-brand-light/40 p-8 rounded-[2rem] shadow-lg shadow-brand-muted/20 hover:shadow-2xl hover:shadow-brand-muted/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lightest/50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-2xl bg-brand-lighter/80 mb-6 group-hover:scale-110 group-hover:bg-brand-light/50 transition-all duration-300 shadow-sm border border-white">
                  {point.icon}
                </div>
                <h4 className="text-xl font-bold text-brand-darkest mb-3 relative z-10 group-hover:text-brand-medium transition-colors">{point.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed relative z-10 font-medium">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center gap-6 mt-14"
          >
            <div className="relative group perspective-1000">
              <img src="/images/16.png" alt="Minh họa vấn đề" className="w-36 h-36 md:w-56 md:h-56 object-cover rounded-[2rem] shadow-xl border-4 border-white group-hover:rotate-y-12 transition-transform duration-700" />
              <div className="absolute inset-0 rounded-[2rem] shadow-inner pointer-events-none"></div>
            </div>
            <div className="relative group perspective-1000 mt-8">
              <img src="/images/2.jpeg" alt="Sinh viên ULIS" className="w-36 h-36 md:w-56 md:h-56 object-cover rounded-[2rem] shadow-xl border-4 border-white group-hover:-rotate-y-12 transition-transform duration-700" />
              <div className="absolute inset-0 rounded-[2rem] shadow-inner pointer-events-none"></div>
            </div>
          </motion.div>
        </div>

        {/* Tầm nhìn và Sứ mệnh - Bento Box Style */}
        <div className="grid gap-6 lg:grid-cols-2 items-stretch">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-gradient-to-br from-[#0F172A] to-[#1e293b] text-white rounded-[2.5rem] overflow-hidden group flex flex-col shadow-2xl shadow-brand-darkest/20 border border-white/10"
          >
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay"></div>
            <div className="w-full h-64 sm:h-80 relative overflow-hidden">
              <img src="/images/22.png" alt="Tầm nhìn" className="w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent"></div>
            </div>
            
            <div className="relative p-8 sm:p-12 flex-1 flex flex-col z-10 -mt-10">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 mb-6 shadow-lg">
                <Target className="w-7 h-7 text-brand-light" />
              </div>
              <h3 className="text-3xl font-extrabold mb-4 font-heading tracking-tight">Tầm nhìn <span className="text-brand-light font-medium text-xl ml-2 opacity-80">(Vision)</span></h3>
              <p className="text-slate-300 leading-relaxed text-lg font-medium">
                Trở thành nền tảng trao đổi giáo trình hàng đầu trong cộng đồng sinh viên ULIS, hướng tới mở rộng ra các trường đại học khác.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative bg-gradient-to-br from-brand-medium via-brand-light to-brand-lighter text-brand-darkest rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-medium/30 group flex flex-col border border-white/50"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/30 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="w-full h-64 sm:h-80 relative overflow-hidden bg-white/40 backdrop-blur-sm">
              <img src="/images/18.png" alt="Sứ mệnh" className="w-full h-full object-contain p-8 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-1000 drop-shadow-xl" />
            </div>
            
            <div className="relative p-8 sm:p-12 flex-1 flex flex-col z-10 bg-white/40 backdrop-blur-md border-t border-white/40">
              <div className="w-14 h-14 bg-white/80 rounded-2xl flex items-center justify-center border border-white mb-6 shadow-md">
                <Heart className="w-7 h-7 text-brand-medium" />
              </div>
              <h3 className="text-3xl font-extrabold mb-6 font-heading tracking-tight">Sứ mệnh <span className="text-brand-darkest/60 font-medium text-xl ml-2">(Mission)</span></h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-darkest mt-2 shrink-0 shadow-sm" />
                  <span className="text-brand-darkest/90 font-semibold text-[1.05rem] leading-snug">Giúp sinh viên tiết kiệm chi phí học tập</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-darkest mt-2 shrink-0 shadow-sm" />
                  <span className="text-brand-darkest/90 font-semibold text-[1.05rem] leading-snug">Tạo môi trường chia sẻ tài nguyên học tập hiệu quả</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-darkest mt-2 shrink-0 shadow-sm" />
                  <span className="text-brand-darkest/90 font-semibold text-[1.05rem] leading-snug">Góp phần xây dựng cộng đồng sinh viên kết nối – bền vững – hỗ trợ lẫn nhau</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
