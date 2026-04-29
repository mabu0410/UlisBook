"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
      <Image
        src="/images/7.jpeg"
        alt="Khuôn viên ULIS"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-darkest/90 to-brand-darkest/70" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">Liên hệ với chúng tôi</h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-200 sm:text-base">
            Đội ngũ ULIS Book Loop luôn sẵn sàng hỗ trợ bạn tham gia cộng đồng, tìm giáo trình phù
            hợp và kết nối nhanh với sinh viên cùng chuyên ngành.
          </p>

          <div className="mt-6 space-y-3 text-sm text-slate-100 sm:text-base">
            <p>
              <span className="font-semibold text-brand-medium">Email:</span> ulisbookloop@gmail.com
            </p>
            <p>
              <span className="font-semibold text-brand-medium">Hotline:</span> 0988 123 456
            </p>
            <p>
              <span className="font-semibold text-brand-medium">Địa chỉ:</span> Trường Đại học Ngoại ngữ
              - ĐHQGHN
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-brand-light bg-white/80 p-5 shadow-2xl shadow-brand-darkest/50 backdrop-blur-md sm:p-6"
        >
          <h3 className="font-heading text-xl font-semibold text-brand-darkest">Form liên hệ nhanh</h3>

          <form className="mt-4 space-y-3">
            <input
              type="text"
              placeholder="Họ và tên"
              className="w-full rounded-xl border border-brand-light bg-white px-4 py-3 text-sm text-brand-darkest outline-none transition focus:border-brand-medium focus:ring-4 focus:ring-brand-medium/20"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-brand-light bg-white px-4 py-3 text-sm text-brand-darkest outline-none transition focus:border-brand-medium focus:ring-4 focus:ring-brand-medium/20"
            />
            <textarea
              rows={4}
              placeholder="Nội dung cần hỗ trợ"
              className="w-full resize-none rounded-xl border border-brand-light bg-white px-4 py-3 text-sm text-brand-darkest outline-none transition focus:border-brand-medium focus:ring-4 focus:ring-brand-medium/20"
            />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-brand-darkest px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-muted/50 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_0_15px_rgba(155,199,236,0.6)]"
            >
              Gửi liên hệ
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
