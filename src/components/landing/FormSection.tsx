"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { FormEvent } from "react";

const BENEFITS = [
  "Đăng ký miễn phí 100%",
  "Trao đổi giáo trình không giới hạn",
  "Kết nối sinh viên ULIS nhanh chóng",
  "Cộng đồng thân thiện, hỗ trợ lẫn nhau",
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
      className="py-16 sm:py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img src="/images/12.png" alt="Background đăng ký" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-md"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-[2.5rem] border border-white/80 bg-white/60 backdrop-blur-2xl p-8 shadow-2xl shadow-brand-muted/20 sm:p-12"
        >
          <div className="mb-8 inline-flex items-center rounded-full border border-brand-medium/30 bg-white/80 backdrop-blur-md px-5 py-2 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-darkest/90">
              Đăng ký tham gia
            </span>
          </div>
          <h3 className="font-heading text-4xl font-extrabold text-brand-darkest sm:text-5xl leading-[1.15] tracking-tight drop-shadow-sm">
            📚 Đăng ký để trở thành thành viên ngay
          </h3>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 font-medium max-w-lg">
            Chỉ cần điền thông tin cơ bản, bạn sẽ sẵn sàng tham gia mạng lưới trao đổi giáo trình và kết nối với sinh viên ULIS.
          </p>

          <ul className="mt-10 space-y-5">
            {BENEFITS.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4 text-brand-darkest"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-lightest text-brand-medium mt-0.5 shadow-sm border border-brand-light/50">
                  <CheckCircle2 size={16} strokeWidth={3} />
                </div>
                <span className="text-base font-bold text-slate-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="rounded-[2.5rem] border-2 border-white/90 bg-white/80 backdrop-blur-3xl p-8 shadow-2xl shadow-brand-muted/40 sm:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-lightest/80 rounded-bl-full blur-2xl opacity-70 pointer-events-none" />
          
          <h4 className="font-heading text-3xl font-extrabold text-brand-darkest sm:text-4xl relative z-10 mb-2">
            Thông tin của bạn
          </h4>
          <p className="text-slate-500 mb-8 relative z-10 font-medium">Hoàn tất form dưới đây để tạo tài khoản.</p>

          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block group">
                <span className="mb-2.5 block text-sm font-bold text-slate-700 transition-colors group-focus-within:text-brand-medium">
                  Họ và tên
                </span>
                <input
                  type="text"
                  required
                  placeholder="Nguyễn Văn A"
                  className="w-full rounded-2xl border-2 border-slate-200/80 bg-white/90 px-5 py-4 text-base text-brand-darkest outline-none transition-all placeholder:text-slate-400 focus:border-brand-medium focus:bg-white focus:ring-4 focus:ring-brand-medium/20 focus:shadow-lg"
                />
              </label>

              <label className="block group">
                <span className="mb-2.5 block text-sm font-bold text-slate-700 transition-colors group-focus-within:text-brand-medium">
                  Mã số sinh viên
                </span>
                <input
                  type="text"
                  required
                  placeholder="2004xxxx"
                  className="w-full rounded-2xl border-2 border-slate-200/80 bg-white/90 px-5 py-4 text-base text-brand-darkest outline-none transition-all placeholder:text-slate-400 focus:border-brand-medium focus:bg-white focus:ring-4 focus:ring-brand-medium/20 focus:shadow-lg"
                />
              </label>
            </div>

            <label className="block group">
              <span className="mb-2.5 block text-sm font-bold text-slate-700 transition-colors group-focus-within:text-brand-medium">
                Email
              </span>
              <input
                type="email"
                required
                pattern="^[a-zA-Z0-9._%+-]+@ulis\.vnu\.edu\.vn$"
                placeholder="you@ulis.vnu.edu.vn"
                className="w-full rounded-2xl border-2 border-slate-200/80 bg-white/90 px-5 py-4 text-base text-brand-darkest outline-none transition-all placeholder:text-slate-400 focus:border-brand-medium focus:bg-white focus:ring-4 focus:ring-brand-medium/20 focus:shadow-lg invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 invalid:[&:not(:placeholder-shown):not(:focus)]:focus:ring-red-400/20"
              />
            </label>

            <label className="block group">
              <span className="mb-2.5 block text-sm font-bold text-slate-700 transition-colors group-focus-within:text-brand-medium">
                Khoa đang theo học
              </span>
              <input
                type="text"
                required
                placeholder="Khoa Ngôn ngữ..."
                className="w-full rounded-2xl border-2 border-slate-200/80 bg-white/90 px-5 py-4 text-base text-brand-darkest outline-none transition-all placeholder:text-slate-400 focus:border-brand-medium focus:bg-white focus:ring-4 focus:ring-brand-medium/20 focus:shadow-lg"
              />
            </label>

            <label className="block group">
              <span className="mb-2.5 block text-sm font-bold text-slate-700 transition-colors group-focus-within:text-brand-medium">
                Vai trò mong muốn
              </span>
              <div className="relative">
                <select
                  required
                  defaultValue=""
                  className="w-full appearance-none rounded-2xl border-2 border-slate-200/80 bg-white/90 px-5 py-4 text-base text-brand-darkest outline-none transition-all focus:border-brand-medium focus:bg-white focus:ring-4 focus:ring-brand-medium/20 focus:shadow-lg cursor-pointer"
                >
                  <option value="" disabled>Chọn vai trò của bạn</option>
                  <option value="seller">Người bán</option>
                  <option value="buyer">Người mua</option>
                  <option value="both">Cả hai</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-slate-400 group-focus-within:text-brand-medium transition-colors">
                  <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </label>

            <label className="flex items-start gap-4 mt-6 group cursor-pointer">
              <div className="relative flex items-center mt-0.5">
                <input
                  type="checkbox"
                  required
                  className="peer h-6 w-6 cursor-pointer appearance-none rounded-md border-2 border-slate-300 bg-white checked:border-brand-darkest checked:bg-brand-darkest transition-all focus:ring-2 focus:ring-brand-darkest/30 focus:outline-none"
                />
                <svg
                  className="pointer-events-none absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-[0.95rem] font-medium text-slate-600 group-hover:text-brand-darkest transition-colors leading-relaxed">
                Tôi cam kết thông tin sách đăng tải là trung thực và chính xác.
              </span>
            </label>

            <motion.button
              whileHover={{ scale: 1.02, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative mt-4 inline-flex w-full items-center justify-center overflow-hidden rounded-2xl bg-brand-darkest px-6 py-4.5 text-lg font-bold text-white shadow-xl shadow-brand-darkest/20 transition-all hover:shadow-brand-medium/50 hover:shadow-2xl ring-1 ring-white/20"
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
