"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const BULLETS = [
  "Đăng ký miễn phí 100%",
  "Trao đổi giáo trình không giới hạn",
  "Kết nối sinh viên ULIS nhanh chóng",
  "Cộng đồng thân thiện, hỗ trợ lẫn nhau",
];

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-brand-lightest pt-24 pb-16 lg:pt-32 lg:pb-24 min-h-screen flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/1.jpeg"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/95 via-brand-lightest/85 to-white/95" />
      
      {/* Floating Animated Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-light/30 blur-[100px]"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-brand-medium/15 blur-[120px]"
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-flex items-center rounded-full border border-brand-medium/20 bg-white/60 backdrop-blur-sm px-4 py-1.5 shadow-sm"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-brand-darkest/80">
              Mạng lưới trao đổi giáo trình
            </span>
            <span className="mx-2 h-3 w-px bg-brand-medium/30"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-medium">
              Dành cho sinh viên ULIS
            </span>
          </motion.div>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl pb-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-darkest via-brand-darkest to-brand-medium">
            Trao sách cũ – Nhận tri thức
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-700 sm:text-xl font-medium">
            Kết nối sinh viên ULIS thông qua việc trao đổi, mua bán giáo trình cũ một cách nhanh chóng, tiết kiệm và tiện lợi.
          </p>

          <ul className="mt-8 space-y-4">
            {BULLETS.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                className="flex items-center gap-3 text-brand-darkest"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-lightest text-brand-medium">
                  <CheckCircle2 size={16} strokeWidth={3} />
                </div>
                <span className="text-base font-semibold">{item}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-start gap-3">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#register"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-brand-darkest px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand-muted/60 transition-all hover:shadow-brand-medium/40 hover:shadow-2xl"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
              Đăng ký tham gia ngay
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-sm font-medium text-slate-500 ml-2"
            >
              ✨ Hoàn toàn miễn phí 100%
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          style={{ y: y1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:ml-auto w-full max-w-lg"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-brand-lightest p-2 shadow-2xl shadow-brand-muted/40 rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/50"></div>
            <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
              <Image
                src="/images/1.jpeg"
                alt="Sảnh ULIS - Creating Opportunities Together"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darkest/40 to-transparent"></div>
            </div>
          </div>

          {/* Floating Element */}
          <motion.div
            style={{ y: y2 }}
            className="absolute -bottom-6 -left-6 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-xl backdrop-blur-md"
          >
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="h-10 w-10 rounded-full border-2 border-white bg-brand-light"></div>
                <div className="h-10 w-10 rounded-full border-2 border-white bg-brand-medium"></div>
                <div className="h-10 w-10 rounded-full border-2 border-white bg-brand-dark"></div>
              </div>
              <div>
                <p className="text-sm font-bold text-brand-darkest">500+ Sinh viên</p>
                <p className="text-xs font-semibold text-brand-medium">đã tham gia</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
