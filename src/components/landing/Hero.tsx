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
  const y1 = useTransform(scrollY, [0, 500], [0, 80]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);

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
          className="object-cover opacity-30 mix-blend-overlay"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/90 via-brand-lightest/95 to-white/100 backdrop-blur-sm" />
      
      {/* Floating Animated Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.15, 1],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 -top-16 h-[30rem] w-[30rem] rounded-full bg-brand-light/40 blur-[100px] mix-blend-multiply"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, -40, 0],
            scale: [1, 1.25, 1],
            rotate: [0, -15, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-0 h-[35rem] w-[35rem] rounded-full bg-brand-medium/20 blur-[120px] mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="mb-8 inline-flex items-center rounded-full border border-brand-medium/30 bg-white/70 backdrop-blur-md px-5 py-2 shadow-sm hover:bg-white/90 transition-colors duration-300"
          >
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-medium opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-darkest"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-darkest/90">
              Mạng lưới trao đổi giáo trình
            </span>
            <span className="mx-3 h-4 w-px bg-brand-medium/40"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-medium">
              Dành cho sinh viên ULIS
            </span>
          </motion.div>

          <h1 className="font-heading text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl pb-3 text-transparent bg-clip-text bg-gradient-to-br from-brand-darkest via-[#1e293b] to-brand-medium drop-shadow-sm">
            Trao sách cũ – <br />Nhận tri thức
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl font-medium max-w-xl">
            Kết nối sinh viên ULIS thông qua việc trao đổi, mua bán giáo trình cũ một cách nhanh chóng, tiết kiệm và tiện lợi.
          </p>

          <ul className="mt-10 space-y-4">
            {BULLETS.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                className="flex items-center gap-4 text-brand-darkest"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-lightest/80 text-brand-medium shadow-sm ring-1 ring-brand-light/50">
                  <CheckCircle2 size={16} strokeWidth={3} />
                </div>
                <span className="text-[1.05rem] font-semibold text-slate-700">{item}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col items-start gap-4">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.03, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#register"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-brand-darkest px-10 py-5 text-lg font-bold text-white shadow-xl shadow-brand-darkest/20 transition-all hover:shadow-brand-medium/50 hover:shadow-2xl ring-1 ring-white/10"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
              Đăng ký tham gia ngay
              <ArrowRight size={22} className="transition-transform group-hover:translate-x-1.5" />
            </motion.a>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-sm font-semibold text-slate-500 ml-3 flex items-center gap-2"
            >
              <span className="text-xl">✨</span> Hoàn toàn miễn phí 100%
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          style={{ y: y1 }}
          initial={{ opacity: 0, scale: 0.92, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:ml-auto w-full max-w-lg"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] bg-brand-lightest/50 p-3 shadow-2xl shadow-brand-muted/50 rotate-1 hover:rotate-0 transition-all duration-700 ease-out backdrop-blur-sm">
            <div className="absolute inset-0 rounded-[3rem] border-2 border-white/60"></div>
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-inner">
              <Image
                src="/images/1.jpeg"
                alt="Sảnh ULIS - Creating Opportunities Together"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darkest/50 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Floating Element */}
          <motion.div
            style={{ y: y2 }}
            className="absolute -bottom-8 -left-8 rounded-3xl border border-white/80 bg-white/90 p-5 shadow-2xl backdrop-blur-xl transition-transform hover:scale-105"
          >
            <div className="flex items-center gap-5">
              <div className="flex -space-x-3">
                <Image src="/images/14.png" alt="Avatar" width={44} height={44} className="rounded-full border-2 border-white object-cover shadow-sm" />
                <Image src="/images/5.jpeg" alt="Avatar" width={44} height={44} className="rounded-full border-2 border-white object-cover shadow-sm" />
                <Image src="/images/13.png" alt="Avatar" width={44} height={44} className="rounded-full border-2 border-white object-cover shadow-sm" />
              </div>
              <div>
                <p className="text-base font-extrabold text-brand-darkest">500+ Sinh viên</p>
                <p className="text-sm font-semibold text-slate-500">đã tham gia</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

