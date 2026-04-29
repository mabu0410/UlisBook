"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const BULLETS = [
  "Đăng ký miễn phí 100%",
  "Trao đổi giáo trình không giới hạn",
  "Kết nối sinh viên ULIS nhanh chóng",
  "Cộng đồng thân thiện, hỗ trợ lẫn nhau",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-brand-lighter to-brand-lightest"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-16 top-14 h-64 w-64 rounded-full bg-brand-light/50 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-brand-medium/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:pb-24 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="mb-5 inline-flex items-center rounded-full border border-brand-medium/30 bg-brand-light/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-darkest">
            ULIS BOOK LOOP
          </span>

          <h1 className="font-heading text-3xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-darkest to-brand-medium sm:text-4xl lg:text-5xl pb-1">
            📚 Tham Gia ULIS Book Loop Ngay Hôm Nay
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Trở thành một phần của mạng lưới trao đổi giáo trình dành riêng cho sinh viên ULIS.
            Tiết kiệm chi phí - chia sẻ tri thức - lan tỏa giá trị học tập.
          </p>

          <ul className="mt-7 space-y-3">
            {BULLETS.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-2.5 text-brand-darkest"
              >
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-medium" />
                <span className="text-sm sm:text-base font-medium">{item}</span>
              </motion.li>
            ))}
          </ul>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            href="#register"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-darkest px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-muted/50 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_0_15px_rgba(155,199,236,0.6)] sm:text-base"
          >
            Đăng ký tham gia ngay
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-brand-light bg-white/70 p-3 shadow-2xl shadow-brand-muted/30 backdrop-blur-md">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/1.jpeg"
                alt="Sảnh ULIS - Creating Opportunities Together"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
