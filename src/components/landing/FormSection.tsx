"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { FormEvent } from "react";

const BENEFITS = [
  "Tìm người trao đổi đúng môn học nhanh hơn",
  "Giảm chi phí mua giáo trình mỗi học kỳ",
  "Nhận thông tin từ cộng đồng sinh viên ULIS",
];

export default function FormSection() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Đăng ký thành công!", {
      description: "Chào mừng bạn gia nhập cộng đồng ULIS Book Loop. Chúng tôi sẽ liên hệ sớm nhất.",
    });
  };

  return (
    <section
      id="register"
      className="bg-brand-lightest py-16 sm:py-24 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-brand-light/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[30rem] h-[30rem] bg-brand-medium/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-[2rem] border border-white/60 bg-white/40 backdrop-blur-xl p-8 shadow-2xl shadow-brand-muted/40 sm:p-10"
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-brand-medium/20 bg-white/60 backdrop-blur-sm px-4 py-1.5 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-darkest/80">
              Đăng ký nhanh
            </span>
          </div>
          <h3 className="font-heading text-3xl font-bold text-brand-darkest sm:text-4xl leading-tight">
            Bắt đầu hành trình trao đổi giáo trình ngay hôm nay
          </h3>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            Chỉ cần điền thông tin cơ bản, bạn sẽ sẵn sàng tham gia mạng lưới ULIS Book Loop và kết nối với sinh viên cùng môn học.
          </p>

          <ul className="mt-8 space-y-4">
            {BENEFITS.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-3 text-brand-darkest"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-darkest mt-0.5">
                  <CheckCircle2 size={14} strokeWidth={3} />
                </div>
                <span className="text-base font-semibold text-slate-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="rounded-[2rem] border border-white/80 bg-white/70 backdrop-blur-2xl p-8 shadow-2xl shadow-brand-muted/50 sm:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lightest rounded-bl-full opacity-50 pointer-events-none" />
          
          <h4 className="font-heading text-2xl font-bold text-brand-darkest sm:text-3xl relative z-10">
            Thông tin của bạn
          </h4>

          <form className="mt-8 space-y-5 relative z-10" onSubmit={handleSubmit}>
            <label className="block group">
              <span className="mb-2 block text-sm font-semibold text-slate-700 transition-colors group-focus-within:text-brand-darkest">
                Họ và tên
              </span>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="Nhập họ và tên"
                  className="w-full rounded-xl border-2 border-brand-light/50 bg-white/80 px-4 py-3.5 text-base text-brand-darkest outline-none transition-all focus:border-brand-medium focus:bg-white focus:ring-4 focus:ring-brand-medium/20 focus:shadow-md"
                />
              </div>
            </label>

            <label className="block group">
              <span className="mb-2 block text-sm font-semibold text-slate-700 transition-colors group-focus-within:text-brand-darkest">
                Email
              </span>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="you@vnu.edu.vn"
                  className="w-full rounded-xl border-2 border-brand-light/50 bg-white/80 px-4 py-3.5 text-base text-brand-darkest outline-none transition-all focus:border-brand-medium focus:bg-white focus:ring-4 focus:ring-brand-medium/20 focus:shadow-md"
                />
              </div>
            </label>

            <label className="block group">
              <span className="mb-2 block text-sm font-semibold text-slate-700 transition-colors group-focus-within:text-brand-darkest">
                Số điện thoại
              </span>
              <div className="relative">
                <input
                  type="tel"
                  required
                  placeholder="09xx xxx xxx"
                  className="w-full rounded-xl border-2 border-brand-light/50 bg-white/80 px-4 py-3.5 text-base text-brand-darkest outline-none transition-all focus:border-brand-medium focus:bg-white focus:ring-4 focus:ring-brand-medium/20 focus:shadow-md"
                />
              </div>
            </label>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative mt-4 inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-brand-darkest px-5 py-4 text-base font-bold text-white shadow-xl shadow-brand-muted/60 transition-all hover:shadow-brand-medium/50 hover:shadow-2xl"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
              Đăng ký ngay
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
