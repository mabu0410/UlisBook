"use client";

import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function IntroSection() {
  return (
    <section id="about" className="bg-white py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-lightest/20 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 rounded-full bg-brand-lighter text-brand-darkest text-sm font-semibold tracking-wider uppercase mb-4"
          >
            Giới Thiệu
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl font-bold text-brand-darkest sm:text-4xl mb-6"
          >
            ULIS BOOK – LOOP là gì?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex justify-center mb-6"
          >
            <img src="/images/logo.png" alt="Logo ULIS Book Loop" className="w-24 h-24 object-contain drop-shadow-lg" />
          </motion.div>
          <motion.p
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            ULIS BOOK – LOOP là nền tảng hỗ trợ sinh viên ULIS trao đổi, mua bán giáo trình cũ một cách dễ dàng. Dự án giúp tối ưu chi phí học tập và tận dụng lại nguồn tài liệu sẵn có trong cộng đồng sinh viên.
          </motion.p>
        </div>

        {/* Vấn đề đặt ra */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl font-bold text-brand-darkest mb-4">
              Hiện nay (Vấn đề đặt ra)
            </h3>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
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
                className="relative group bg-white border border-brand-light p-6 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-brand-muted/40 transition-all duration-300 hover:scale-[1.03]"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-brand-lighter mb-5 group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
                <h4 className="text-lg font-bold text-brand-darkest mb-2">{point.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mt-10"
          >
            <img src="/images/16.png" alt="Minh họa vấn đề" className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-2xl shadow-md border-2 border-brand-light/50 hover:scale-105 transition-transform duration-300" />
            <img src="/images/2.jpeg" alt="Sinh viên ULIS" className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-2xl shadow-md border-2 border-brand-light/50 hover:scale-105 transition-transform duration-300" />
          </motion.div>
        </div>

        {/* Tầm nhìn và Sứ mệnh */}
        <div className="grid gap-8 lg:grid-cols-2 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-brand-darkest text-white rounded-[2rem] overflow-hidden group flex flex-col shadow-xl shadow-brand-muted/30"
          >
            <div className="w-full h-56 sm:h-72 relative overflow-hidden">
              <img src="/images/22.png" alt="Tầm nhìn" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            
            <div className="relative p-8 sm:p-10 flex-1 flex flex-col">
              <Target className="w-10 h-10 text-brand-light mb-6" />
              <h3 className="text-2xl font-bold mb-4 font-heading">Tầm nhìn (Vision)</h3>
              <p className="text-brand-muted leading-relaxed text-lg">
                Trở thành nền tảng trao đổi giáo trình hàng đầu trong cộng đồng sinh viên ULIS, hướng tới mở rộng ra các trường đại học khác.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-brand-medium text-brand-darkest rounded-[2rem] overflow-hidden shadow-xl shadow-brand-muted/30 group flex flex-col"
          >
            <div className="w-full h-56 sm:h-72 relative overflow-hidden bg-white/60">
              <img src="/images/18.png" alt="Sứ mệnh" className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700" />
            </div>
            
            <div className="relative p-8 sm:p-10 flex-1 flex flex-col">
              <Heart className="w-10 h-10 text-brand-darkest mb-6" />
              <h3 className="text-2xl font-bold mb-6 font-heading">Sứ mệnh (Mission)</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-darkest mt-2 shrink-0" />
                  <span className="text-brand-darkest/90 font-medium text-base">Giúp sinh viên tiết kiệm chi phí học tập</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-darkest mt-2 shrink-0" />
                  <span className="text-brand-darkest/90 font-medium text-base">Tạo môi trường chia sẻ tài nguyên học tập hiệu quả</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-darkest mt-2 shrink-0" />
                  <span className="text-brand-darkest/90 font-medium text-base">Góp phần xây dựng cộng đồng sinh viên kết nối – bền vững – hỗ trợ lẫn nhau</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
