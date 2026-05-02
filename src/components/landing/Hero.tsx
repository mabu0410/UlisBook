"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import BubbleBackground from "@/components/BubbleBackground";
import AnimatedGradientGlow from "@/components/landing/AnimatedGradientGlow";
import FloatingBookIcons from "@/components/landing/FloatingBookIcons";
import { useEffect, useState } from "react";

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

  // Mouse Parallax Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  const rotateX = useTransform(springY, [-300, 300], [5, -5]);
  const rotateY = useTransform(springX, [-300, 300], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="hero"
      onMouseMove={!isMobile ? handleMouseMove : undefined}
      onMouseLeave={!isMobile ? handleMouseLeave : undefined}
      className="relative min-h-screen overflow-hidden bg-cover bg-center flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24"
      style={{ backgroundImage: "url('/images/image.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/85 via-emerald-50/80 to-teal-100/75" />
      <div className="absolute inset-0 z-0 bg-white/20 backdrop-blur-[1px]" />

      {/* Bubble effect */}
      <BubbleBackground count={24} minSize={10} maxSize={42} />
      
      {/* Animated Glow Blobs & Icons */}
      <AnimatedGradientGlow />
      <FloatingBookIcons />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8 inline-flex items-center rounded-full border border-emerald-200 bg-white/70 backdrop-blur-md px-5 py-2 shadow-sm hover:bg-white/90 transition-all duration-300 hover:scale-105"
          >
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-700"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800/90">
              Mạng lưới trao đổi giáo trình
            </span>
            <span className="mx-3 h-4 w-px bg-emerald-300/40"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              Dành cho sinh viên ULIS
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl pb-4 text-emerald-950 drop-shadow-sm"
          >
            Trao sách cũ – <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Nhận tri thức</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-8 text-xl leading-relaxed text-slate-700 sm:text-2xl font-semibold max-w-xl"
          >
            Kết nối sinh viên ULIS thông qua việc trao đổi, mua bán giáo trình cũ một cách nhanh chóng, tiết kiệm và tiện lợi.
          </motion.p>

          <ul className="mt-10 space-y-4">
            {BULLETS.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                className="flex items-center gap-4 text-emerald-900"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 shadow-sm ring-1 ring-emerald-100">
                  <CheckCircle2 size={16} strokeWidth={3} />
                </div>
                <span className="text-lg font-bold text-emerald-950">{item}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col items-start gap-4">
            <motion.a
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#register"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 px-10 py-5 text-lg font-bold text-white shadow-xl shadow-emerald-500/25 transition-all hover:shadow-emerald-500/40 ring-1 ring-white/10"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></span>
              Đăng ký tham gia ngay
              <ArrowRight size={22} className="transition-transform group-hover:translate-x-1.5" />
            </motion.a>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="text-sm font-semibold text-slate-500 ml-3 flex items-center gap-2"
            >
              <span className="text-xl">✨</span> Hoàn toàn miễn phí 100%
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          style={{ 
            y: y1,
            rotateX: !isMobile ? rotateX : 0,
            rotateY: !isMobile ? rotateY : 0,
            perspective: 1000
          }}
          initial={{ opacity: 0, scale: 0.92, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:ml-auto w-full max-w-lg"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] bg-emerald-50/50 p-3 shadow-2xl shadow-emerald-500/20 rotate-1 hover:rotate-0 transition-all duration-700 ease-out backdrop-blur-sm border border-emerald-100 group">
            <div className="absolute inset-0 rounded-[3rem] border-2 border-white/60 z-20 group-hover:border-white transition-colors"></div>
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-inner">
              <Image
                src="/images/1.jpeg"
                alt="Sảnh ULIS - Creating Opportunities Together"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Floating Element */}
          <motion.div
            style={{ y: y2 }}
            className="absolute -bottom-8 -left-8 rounded-3xl border border-emerald-100 bg-white/90 p-5 shadow-2xl backdrop-blur-xl transition-transform hover:scale-105"
          >
            <div className="flex items-center gap-5">
              <div className="flex -space-x-3">
                <Image src="/images/14.png" alt="Avatar" width={44} height={44} className="rounded-full border-2 border-white object-cover shadow-sm" />
                <Image src="/images/5.jpeg" alt="Avatar" width={44} height={44} className="rounded-full border-2 border-white object-cover shadow-sm" />
                <Image src="/images/13.png" alt="Avatar" width={44} height={44} className="rounded-full border-2 border-white object-cover shadow-sm" />
              </div>
              <div>
                <p className="text-base font-extrabold text-emerald-950">500+ Sinh viên</p>
                <p className="text-sm font-semibold text-slate-500">đã tham gia</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

