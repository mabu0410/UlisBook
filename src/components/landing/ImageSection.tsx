"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ImageSection() {
  return (
    <section id="gallery" className="bg-white py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-light to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center max-w-2xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-lighter text-brand-darkest text-sm font-semibold tracking-wider uppercase mb-4">
            Hoạt Động Cộng Đồng
          </span>
          <h2 className="font-heading text-3xl font-bold text-brand-darkest sm:text-4xl">
            Lan Tỏa Văn Hóa Đọc Tại ULIS
          </h2>
          <p className="mt-4 text-base text-slate-600 font-medium">
            Hàng trăm sinh viên từ các khoa đang cùng nhau xây dựng một mạng lưới trao đổi giáo trình lớn mạnh.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-12 md:grid-rows-2 h-auto md:h-[600px]">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl md:col-span-8 md:row-span-2 shadow-lg shadow-brand-muted/30"
          >
            <div className="absolute inset-0 bg-brand-darkest/10 transition-colors group-hover:bg-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-darkest/80 via-transparent to-transparent z-10" />
            
            <Image
              src="/images/2.jpeg"
              alt="Sách và giáo trình được trao đổi trong cộng đồng ULIS"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="inline-block rounded-full bg-brand-medium/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm mb-3">
                Trao đổi sôi nổi
              </span>
              <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">Góc trao đổi sách</h3>
              <p className="text-sm text-slate-200 line-clamp-2 max-w-md drop-shadow-sm">
                Không chỉ là tiết kiệm, đây là nơi những cuốn sách tiếp tục hành trình tri thức của mình qua các thế hệ sinh viên ULIS.
              </p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative overflow-hidden rounded-3xl md:col-span-4 md:row-span-2 shadow-lg shadow-brand-muted/30 min-h-[300px]"
          >
            <div className="absolute inset-0 bg-brand-darkest/10 transition-colors group-hover:bg-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-darkest/80 via-brand-darkest/20 to-transparent z-10" />
            
            <Image
              src="/images/3.jpeg"
              alt="Sinh viên ULIS tham gia hoạt động cộng đồng"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="inline-block rounded-full bg-brand-dark/90 px-3 py-1 text-xs font-bold text-brand-darkest backdrop-blur-sm mb-3">
                Kết nối sinh viên
              </span>
              <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">Gặp gỡ & Kết nối</h3>
              <p className="text-xs text-slate-200 drop-shadow-sm">
                Xây dựng mối quan hệ từ những môn học chung.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
