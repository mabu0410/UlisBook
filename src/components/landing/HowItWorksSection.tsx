"use client";

import { motion } from "framer-motion";
import { Filter, CheckSquare, MessageCircle, Camera, Percent, UploadCloud } from "lucide-react";

const BUY_FEATURES = [
  {
    icon: <Filter className="w-6 h-6 text-brand-medium group-hover:text-white transition-colors" />,
    title: "Lọc sách theo Khoa",
    description: "Nhanh chóng tìm danh sách giáo trình thuộc khoa của bạn.",
  },
  {
    icon: <CheckSquare className="w-6 h-6 text-brand-medium group-hover:text-white transition-colors" />,
    title: "Tìm chính xác theo mã học phần (100%)",
    description: "Đảm bảo mua đúng sách 100% nhờ hệ thống mã học phần.",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-brand-medium group-hover:text-white transition-colors" />,
    title: "Xem tình trạng sách và liên hệ",
    description: "Liên hệ người bán nhanh chóng, xem chi tiết tình trạng.",
  },
];

const SELL_STEPS = [
  {
    icon: <Camera className="w-7 h-7 text-brand-darkest" />,
    title: "Chụp ảnh sách",
    description: "Chụp một bức ảnh rõ nét bìa giáo trình của bạn.",
  },
  {
    icon: <Percent className="w-7 h-7 text-brand-darkest" />,
    title: "Chọn tình trạng (%)",
    description: "(ví dụ: 90%, 80%...)",
  },
  {
    icon: <UploadCloud className="w-7 h-7 text-brand-darkest" />,
    title: "Nhấn đăng tải",
    description: "Điền thông tin và đăng bài lên hệ thống.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-emerald-50/60 py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-100/80 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/60 border border-emerald-100 text-emerald-900 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm backdrop-blur-sm">
            Đơn Giản & Hiệu Quả
          </span>
          <h2 className="font-heading text-4xl font-black text-emerald-950 sm:text-5xl flex items-center justify-center gap-4 tracking-tight drop-shadow-sm">
            <span>🎥</span> Cách mua/bán trong 60s
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Cột Mua */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-12 shadow-2xl shadow-emerald-500/10 border border-emerald-50 h-full relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50/50 rounded-full blur-3xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h3 className="text-3xl font-extrabold text-emerald-950 mb-10 border-b border-emerald-100 pb-5 font-heading">Hướng dẫn tìm / mua sách</h3>
            <div className="space-y-10 relative z-10">
              {BUY_FEATURES.map((feature, i) => (
                <div key={i} className="flex gap-6 items-start group/item">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover/item:bg-emerald-500 group-hover/item:shadow-lg group-hover/item:shadow-emerald-500/40 transition-all duration-300 border border-emerald-100 group-hover/item:-translate-y-1">
                    {feature.icon}
                  </div>
                  <div className="pt-1">
                    <h4 className="text-xl font-bold text-emerald-950 mb-2 group-hover/item:text-emerald-600 transition-colors">{feature.title}</h4>
                    <p className="text-slate-600 text-base font-medium">{feature.description}</p>
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
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-emerald-950 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl shadow-emerald-950/30 border border-emerald-950 text-white relative h-full flex flex-col overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/20 rounded-bl-full pointer-events-none blur-2xl" />
            <div className="absolute inset-0 bg-emerald-500/5 mix-blend-overlay pointer-events-none"></div>
            
            <h3 className="text-3xl font-extrabold text-white mb-12 border-b border-white/20 pb-5 font-heading relative z-10">3 bước bán sách siêu nhanh</h3>
            
            <div className="relative space-y-12 flex-1 before:absolute before:inset-0 before:ml-7 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-emerald-500 before:via-emerald-500/50 before:to-transparent z-10">
              {SELL_STEPS.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group/step"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl border-[3px] border-emerald-950 bg-emerald-500 text-emerald-950 shadow-xl shrink-0 md:order-1 md:group-odd/step:-translate-x-1/2 md:group-even/step:translate-x-1/2 group-hover/step:scale-110 group-hover/step:rotate-3 transition-transform duration-300 relative z-10">
                    {step.icon}
                  </div>
                  <div className="w-[calc(100%-4.5rem)] md:w-[calc(50%-3rem)] bg-white/5 backdrop-blur-md p-6 rounded-[2rem] border border-white/10 group-hover/step:bg-white/10 group-hover/step:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                    <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-3 border border-emerald-500/30">BƯỚC {i + 1}</span>
                    <h4 className="font-extrabold text-xl text-white mb-2">{step.title}</h4>
                    <p className="text-base text-slate-300 font-medium">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-14 text-center relative z-10">
              <span className="inline-flex items-center justify-center py-4 px-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-emerald-950 font-extrabold shadow-xl shadow-emerald-500/20 hover:scale-105 transition-transform cursor-default border border-white/40">
                <span className="text-xl mr-2">👉</span> Chỉ mất chưa đến 1 phút để hoàn tất!
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
