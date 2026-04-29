"use client";

import { motion } from "framer-motion";
import { Filter, CheckSquare, MessageCircle, Camera, Percent, UploadCloud } from "lucide-react";

const BUY_FEATURES = [
  {
    icon: <Filter className="w-6 h-6 text-brand-medium" />,
    title: "Lọc sách theo Khoa",
    description: "Nhanh chóng tìm danh sách giáo trình thuộc khoa của bạn.",
  },
  {
    icon: <CheckSquare className="w-6 h-6 text-brand-medium" />,
    title: "Tìm chính xác theo mã học phần (100%)",
    description: "Đảm bảo mua đúng sách 100% nhờ hệ thống mã học phần.",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-brand-medium" />,
    title: "Xem tình trạng sách và liên hệ",
    description: "Liên hệ người bán nhanh chóng, xem chi tiết tình trạng.",
  },
];

const SELL_STEPS = [
  {
    icon: <Camera className="w-8 h-8 text-white" />,
    title: "Chụp ảnh sách",
    description: "Chụp một bức ảnh rõ nét bìa giáo trình của bạn.",
  },
  {
    icon: <Percent className="w-8 h-8 text-white" />,
    title: "Chọn tình trạng (%)",
    description: "(ví dụ: 90%, 80%...)",
  },
  {
    icon: <UploadCloud className="w-8 h-8 text-white" />,
    title: "Nhấn đăng tải",
    description: "Điền thông tin và đăng bài lên hệ thống.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-brand-lightest py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-light text-brand-darkest text-sm font-semibold tracking-wider uppercase mb-4">
            Đơn Giản & Hiệu Quả
          </span>
          <h2 className="font-heading text-3xl font-bold text-brand-darkest sm:text-4xl flex items-center justify-center gap-3">
            <span>🎥</span> Cách mua/bán giáo trình trong 60s
          </h2>
        </motion.div>



        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Cột Mua */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-brand-muted/20 h-full"
          >
            <h3 className="text-2xl font-bold text-brand-darkest mb-8 border-b border-brand-light pb-4">Hướng dẫn tìm / mua sách</h3>
            <div className="space-y-8">
              {BUY_FEATURES.map((feature, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-lightest flex items-center justify-center group-hover:bg-brand-light transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-darkest mb-1 group-hover:text-brand-medium transition-colors">{feature.title}</h4>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cột Bán */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-brand-darkest rounded-3xl p-8 sm:p-10 shadow-xl shadow-brand-muted/20 text-white relative h-full flex flex-col"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-medium/10 rounded-bl-full pointer-events-none" />
            <h3 className="text-2xl font-bold text-white mb-10 border-b border-white/20 pb-4">3 bước bán sách siêu nhanh</h3>
            
            <div className="relative space-y-10 flex-1 before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-light before:via-brand-medium before:to-transparent">
              {SELL_STEPS.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-brand-darkest bg-brand-medium text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-110 transition-transform duration-300 relative z-10">
                    {step.icon}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/10 backdrop-blur p-5 rounded-2xl border border-white/10 group-hover:bg-white/20 transition-colors">
                    <span className="text-brand-medium font-bold mb-1 block">Bước {i + 1}</span>
                    <h4 className="font-bold text-lg text-white mb-1">{step.title}</h4>
                    <p className="text-sm text-brand-muted">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center relative z-10">
              <span className="inline-block py-3 px-8 rounded-full bg-brand-medium text-brand-darkest font-bold shadow-lg shadow-brand-medium/30 hover:scale-105 transition-transform cursor-default">
                👉 Chỉ mất chưa đến 1 phút để hoàn tất!
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
