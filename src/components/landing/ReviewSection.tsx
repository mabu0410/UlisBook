"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    name: "Nguyễn Thu Hà",
    emoji: "👩‍🎓",
    faculty: "Khoa Tiếng Hàn",
    avatar: "/images/4.jpeg",
    quote:
      "Trước đây mình phải mua giáo trình mới rất tốn kém, nhưng từ khi dùng ULIS Book Loop mình đã đổi được sách với giá gần như 0 đồng. Rất tiện và tiết kiệm!",
  },
  {
    name: "Lê Phương Anh",
    emoji: "👩‍🎓",
    faculty: "Khoa Ngôn ngữ Nhật",
    avatar: "/images/5.jpeg",
    quote:
      "Mình không chỉ trao đổi sách mà còn kết nối được với nhiều bạn cùng ngành. Cảm giác cộng đồng rất rõ luôn.",
  },
  {
    name: "Phạm Quang Huy",
    emoji: "👨‍🎓",
    faculty: "Khoa Ngôn ngữ Trung",
    avatar: "/images/6.jpeg",
    quote:
      "Giao diện dễ dùng, đăng bài nhanh, phản hồi cũng nhanh. Nói chung là nên có từ sớm!",
  },
];

export default function ReviewSection() {
  return (
    <section id="reviews" className="bg-brand-lightest py-14 sm:py-16 lg:py-20 relative">
      <div className="absolute inset-0 bg-white/40 pointer-events-none" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-heading text-2xl font-bold text-brand-darkest sm:text-3xl">
            💬 Sinh viên ULIS nói gì về ULIS Book Loop?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Những trải nghiệm thực tế từ sinh viên đã tham gia trao đổi giáo trình.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6 sm:mt-10 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl border border-brand-light bg-white/70 backdrop-blur-md p-5 shadow-lg shadow-brand-muted/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-muted/50 sm:p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-brand-light">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-darkest">{review.emoji} {review.name}</p>
                  <p className="text-xs text-brand-medium font-medium">{review.faculty}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-600">“{review.quote}”</p>
              <div className="mt-4 flex gap-1 text-brand-medium">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
