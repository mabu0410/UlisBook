"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const BENEFITS = [
  "Tìm người trao đổi đúng môn học nhanh hơn",
  "Giảm chi phí mua giáo trình mỗi học kỳ",
  "Nhận thông tin từ cộng đồng sinh viên ULIS",
];

export default function FormSection() {
  return (
    <section
      id="register"
      className="bg-brand-lightest py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-brand-light bg-white/70 backdrop-blur-md p-6 shadow-xl shadow-brand-muted/30 sm:p-8"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-darkest bg-brand-light/30 px-3 py-1 rounded-full border border-brand-light">Đăng ký nhanh</span>
          <h3 className="mt-4 font-heading text-2xl font-bold text-brand-darkest sm:text-3xl">
            Bắt đầu hành trình trao đổi giáo trình ngay hôm nay
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Chỉ cần điền thông tin cơ bản, bạn sẽ sẵn sàng tham gia mạng lưới ULIS Book Loop và
            kết nối với sinh viên cùng môn học.
          </p>

          <ul className="mt-6 space-y-3">
            {BENEFITS.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-2.5 text-brand-darkest"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-medium" />
                <span className="text-sm font-medium">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-brand-light bg-white/70 backdrop-blur-md p-6 shadow-2xl shadow-brand-muted/30 sm:p-8"
        >
          <h4 className="font-heading text-xl font-bold text-brand-darkest sm:text-2xl">Form đăng ký</h4>

          <form className="mt-5 space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-slate-700">Họ và tên</span>
              <input
                type="text"
                placeholder="Nhập họ và tên"
                className="w-full rounded-xl border border-brand-light bg-white px-4 py-3 text-sm text-brand-darkest outline-none transition focus:border-brand-medium focus:ring-4 focus:ring-brand-medium/20"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-slate-700">Email</span>
              <input
                type="email"
                placeholder="you@vnu.edu.vn"
                className="w-full rounded-xl border border-brand-light bg-white px-4 py-3 text-sm text-brand-darkest outline-none transition focus:border-brand-medium focus:ring-4 focus:ring-brand-medium/20"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-slate-700">Số điện thoại</span>
              <input
                type="tel"
                placeholder="09xx xxx xxx"
                className="w-full rounded-xl border border-brand-light bg-white px-4 py-3 text-sm text-brand-darkest outline-none transition focus:border-brand-medium focus:ring-4 focus:ring-brand-medium/20"
              />
            </label>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-brand-darkest px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-muted/50 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_0_15px_rgba(155,199,236,0.6)]"
            >
              Đăng ký
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
