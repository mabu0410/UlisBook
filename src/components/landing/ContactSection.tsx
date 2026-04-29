"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useRef } from "react";

export default function ContactSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden bg-brand-darkest py-20 sm:py-32">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/images/11.png"
          alt="ULIS Book Loop Contact Background"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-darkest via-brand-darkest/80 to-brand-darkest/40" />

      <div className="relative z-20 mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <span className="inline-block py-1 px-3 rounded-full border border-white/20 bg-white/10 text-white text-sm font-semibold tracking-wider uppercase mb-6 w-max backdrop-blur-sm">
            Liên hệ với chúng tôi
          </span>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-5xl leading-tight">
            Bạn cần hỗ trợ thêm?
          </h2>
          <p className="mt-6 text-lg text-brand-muted leading-relaxed max-w-md">
            Đội ngũ ULIS Book Loop luôn sẵn sàng hỗ trợ bạn tham gia cộng đồng, tìm giáo trình phù hợp và kết nối nhanh với sinh viên cùng chuyên ngành.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Mail size={24} className="text-brand-light" />
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-muted">Email</p>
                <p className="text-base font-medium">ulisbookloop@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Phone size={24} className="text-brand-light" />
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-muted">Hotline</p>
                <p className="text-base font-medium">0368004205</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <MapPin size={24} className="text-brand-light" />
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-muted">Địa chỉ</p>
                <p className="text-base font-medium">Trường Đại học Ngoại ngữ - ĐHQGHN</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl shadow-black/50 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none" />
            <h3 className="font-heading text-2xl font-bold text-white mb-6">Form liên hệ nhanh</h3>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-brand-light">Họ và tên</span>
                  <input
                    type="text"
                    placeholder="Nhập họ và tên"
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-base text-white placeholder-white/40 outline-none transition-all focus:border-brand-light focus:bg-white/10 focus:ring-4 focus:ring-brand-light/20"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-brand-light">Email</span>
                  <input
                    type="email"
                    placeholder="Email của bạn"
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-base text-white placeholder-white/40 outline-none transition-all focus:border-brand-light focus:bg-white/10 focus:ring-4 focus:ring-brand-light/20"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-brand-light">Nội dung cần hỗ trợ</span>
                <textarea
                  rows={4}
                  placeholder="Bạn muốn hỏi gì..."
                  className="w-full resize-none rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-base text-white placeholder-white/40 outline-none transition-all focus:border-brand-light focus:bg-white/10 focus:ring-4 focus:ring-brand-light/20"
                ></textarea>
              </label>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 text-base font-bold text-brand-darkest transition-all hover:bg-brand-lightest hover:scale-[1.02]"
              >
                Gửi liên hệ
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
