"use client";

import { motion } from "framer-motion";
import {
  Search,
  Wallet,
  RefreshCw,
  Users,
  ArrowRight,
  BookOpen,
  Star,
} from "lucide-react";
import { SMOOTH_EASE } from "@/constants/motion";

const highlights = [
  { label: "Tìm sách nhanh", icon: Search },
  { label: "Tiết kiệm chi phí", icon: Wallet },
  { label: "Tái sử dụng giáo trình", icon: RefreshCw },
  { label: "Kết nối cộng đồng", icon: Users },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: SMOOTH_EASE },
  }),
};

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden hero-bg noise"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#C4E5FB]/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#AFD6F8]/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#DAF1FE]/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-[#9BC7EC]/40 rounded-full px-4 py-1.5 mb-6 shadow-sm"
            >
              <Star size={12} className="text-[#9BC7EC] fill-[#9BC7EC]" />
              <span className="text-xs font-semibold text-[#475569] tracking-wide uppercase">
                Dành cho sinh viên ULIS
              </span>
              <Star size={12} className="text-[#9BC7EC] fill-[#9BC7EC]" />
            </motion.div>

            {/* H1 – only one on the page */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0F172A] leading-[1.05] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Trao sách cũ –{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6BAED6] to-[#9BC7EC]">
                Nhận tri thức
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-[#475569] text-lg sm:text-xl leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
            >
              Kết nối sinh viên ULIS thông qua việc trao đổi, mua bán giáo trình cũ một cách{" "}
              <strong className="text-[#0F172A] font-semibold">nhanh chóng, tiết kiệm</strong> và tiện lợi.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-12"
            >
              <motion.button
                onClick={() => scrollTo("how-it-works")}
                className="btn-primary text-white font-semibold px-7 py-3.5 rounded-2xl flex items-center gap-2 justify-center text-base"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Tìm giáo trình ngay
                <Search size={17} />
              </motion.button>
              <motion.button
                onClick={() => scrollTo("contact")}
                className="bg-white/80 backdrop-blur border border-[#9BC7EC]/50 text-[#0F172A] font-semibold px-7 py-3.5 rounded-2xl flex items-center gap-2 justify-center text-base hover:bg-white hover:border-[#9BC7EC] transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Đăng bán sách cũ
                <ArrowRight size={17} />
              </motion.button>
            </motion.div>

            {/* Highlights */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 gap-3"
            >
              {highlights.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 bg-white/60 backdrop-blur border border-[#C1DDF3]/50 rounded-xl px-3.5 py-2.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#DAF1FE] flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-[#6BAED6]" />
                  </div>
                  <span className="text-xs font-medium text-[#475569]">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: SMOOTH_EASE }}
            className="relative hidden lg:flex items-center justify-center"
            aria-hidden="true"
          >
            {/* Main app mockup card */}
            <div className="relative w-[360px]">
              {/* Floating card top */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 glass-card rounded-2xl p-3 shadow-xl z-10 w-44"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-lg bg-[#C4E5FB] flex items-center justify-center">
                    <BookOpen size={12} className="text-[#6BAED6]" />
                  </div>
                  <span className="text-xs font-semibold text-[#0F172A]">Vừa đăng</span>
                </div>
                <p className="text-xs text-[#475569]">Giáo trình Ngữ âm tiếng Anh – 90%</p>
                <p className="text-xs font-bold text-[#9BC7EC] mt-1">35.000 đ</p>
              </motion.div>

              {/* Main card */}
              <div className="glass-card rounded-3xl p-6 shadow-2xl shadow-[#9BC7EC]/20">
                {/* Search bar */}
                <div className="bg-[#DAF1FE] rounded-xl flex items-center gap-2 px-3 py-2.5 mb-4">
                  <Search size={14} className="text-[#9BC7EC]" />
                  <span className="text-xs text-[#475569]">Tìm theo mã học phần...</span>
                </div>

                {/* Book cards */}
                {[
                  { title: "Tiếng Anh Giao tiếp A1", code: "ENG101", cond: "90%", price: "45.000 đ" },
                  { title: "Ngữ pháp tiếng Pháp nâng cao", code: "FRA203", cond: "85%", price: "50.000 đ" },
                  { title: "Lý thuyết dịch thuật", code: "TRA301", cond: "80%", price: "30.000 đ" },
                ].map((book, i) => (
                  <motion.div
                    key={book.code}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#DAF1FE]/50 transition-colors mb-2 last:mb-0"
                  >
                    <div
                      className="w-10 h-12 rounded-lg flex-shrink-0 flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${["#C4E5FB", "#DAF1FE", "#AFD6F8"][i]}, ${["#AFD6F8", "#C4E5FB", "#DAF1FE"][i]})`,
                      }}
                    >
                      <BookOpen size={16} className="text-[#6BAED6]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-[#0F172A] truncate">{book.title}</p>
                      <p className="text-[10px] text-[#475569]">{book.code} · Tình trạng {book.cond}</p>
                    </div>
                    <span className="text-xs font-bold text-[#6BAED6] flex-shrink-0">{book.price}</span>
                  </motion.div>
                ))}
              </div>

              {/* Floating bottom card */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-8 glass-card rounded-2xl p-3 shadow-xl z-10 w-40"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Users size={12} className="text-[#9BC7EC]" />
                  <span className="text-[10px] font-semibold text-[#0F172A]">Cộng đồng</span>
                </div>
                <p className="text-lg font-bold text-[#0F172A]">500+</p>
                <p className="text-[10px] text-[#475569]">sinh viên ULIS</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 fill-white/30">
          <path d="M0,40 C360,0 1080,80 1440,20 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
