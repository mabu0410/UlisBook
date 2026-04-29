"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ImageSection() {
  return (
    <section id="benefits" className="bg-white py-14 sm:py-16 lg:py-20 relative">
      <div className="absolute inset-0 bg-brand-lightest/30 pointer-events-none" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h2 className="font-heading text-2xl font-bold text-brand-darkest sm:text-3xl">
            Cộng đồng ULIS Book Loop đang lan tỏa
          </h2>
          <p className="mt-3 text-sm text-brand-medium sm:text-base font-medium">
            Hơn 5+ khoa đang tham gia trao đổi giáo trình
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl border border-brand-light bg-white/70 backdrop-blur-md p-2 shadow-lg shadow-brand-muted/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-muted/50"
          >
            <div className="absolute top-4 right-4 z-10 rounded-full bg-brand-medium px-3 py-1 text-xs font-semibold text-white shadow-md">
              Trao đổi sôi nổi
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/2.jpeg"
                alt="Sách và giáo trình được trao đổi trong cộng đồng ULIS"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative overflow-hidden rounded-2xl border border-brand-light bg-white/70 backdrop-blur-md p-2 shadow-lg shadow-brand-muted/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-muted/50"
          >
            <div className="absolute top-4 right-4 z-10 rounded-full bg-brand-medium px-3 py-1 text-xs font-semibold text-white shadow-md">
              Kết nối sinh viên
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/3.jpeg"
                alt="Sinh viên ULIS tham gia hoạt động cộng đồng"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
