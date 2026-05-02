"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const REVIEWS = [
  {
    name: "Nguyễn Thu Hà",
    emoji: "⭐",
    faculty: "Khoa Ngôn ngữ và văn hóa Anh",
    avatar: "/images/14.png",
    quote:
      "Trước đây mình phải mua giáo trình mới rất tốn kém, nhưng từ khi dùng ULIS Book Loop mình đã đổi được sách với giá gần như 0 đồng. Rất tiện và tiết kiệm!",
  },
  {
    name: "Khánh Linh",
    emoji: "👩‍🎓",
    faculty: "Khoa Ngôn ngữ và văn hóa Hàn Quốc",
    avatar: "/images/5.jpeg",
    quote:
      "Mình không chỉ trao đổi sách mà còn kết nối được với nhiều bạn cùng ngành. Cảm giác cộng đồng rất rõ luôn.",
  },
  {
    name: "Hoàng Sơn",
    emoji: "👨‍🎓",
    faculty: "Khoa Ngôn ngữ Trung",
    avatar: "/images/13.png",
    quote:
      "Giao diện dễ dùng, đăng bài nhanh, phản hồi cũng nhanh. Nói chung là nên có từ sớm!",
  }
];

export default function ReviewSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="reviews" className="bg-white py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/40 to-white pointer-events-none" />
      <div className="absolute right-0 top-0 -z-10 m-auto h-[400px] w-[400px] rounded-full bg-emerald-50/60 opacity-60 blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm backdrop-blur-sm">
            Đánh Giá Thực Tế
          </span>
          <h2 className="font-heading text-4xl font-extrabold text-emerald-950 sm:text-5xl tracking-tight drop-shadow-sm mb-6">
            Sinh viên ULIS nói gì về ULIS Book Loop?
          </h2>
          <p className="text-lg leading-relaxed text-slate-600 font-medium">
            Những trải nghiệm thực tế từ sinh viên đã tham gia trao đổi giáo trình.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing pb-12 -mx-4 px-4 sm:mx-0 sm:px-0" ref={emblaRef}>
            <div className="flex backface-hidden -ml-6">
              {REVIEWS.map((review, i) => (
                <div key={i} className="pl-6 min-w-[90%] sm:min-w-[60%] lg:min-w-[40%] shrink-0">
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    className="relative h-full rounded-[2.5rem] border border-emerald-100 bg-white/60 backdrop-blur-xl p-8 sm:p-10 shadow-xl shadow-emerald-500/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/20 group overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/40 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"></div>
                    
                    <div className="absolute top-8 right-8 text-emerald-100 transition-all duration-500 group-hover:text-emerald-500/40 group-hover:scale-110 group-hover:rotate-12">
                      <Quote size={48} fill="currentColor" />
                    </div>
                    
                    <div className="mb-8 flex items-center gap-5 relative z-10">
                      <div className="relative h-16 w-16 overflow-hidden rounded-2xl ring-4 ring-emerald-50 group-hover:ring-emerald-100 transition-all shadow-md">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          fill
                          sizes="64px"
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <p className="text-[1.1rem] font-bold text-emerald-950 mb-1">{review.name} {review.emoji}</p>
                        <p className="text-[0.85rem] text-emerald-600 font-bold uppercase tracking-wider">{review.faculty}</p>
                      </div>
                    </div>

                    <p className="text-[1.05rem] leading-relaxed text-slate-600 relative z-10 italic font-medium">
                      "{review.quote}"
                    </p>
                    
                    <div className="mt-8 flex gap-1.5 text-[#F59E0B]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 fill-current drop-shadow-sm group-hover:scale-110 transition-transform" style={{ transitionDelay: `${star * 50}ms` }} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </motion.article>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === selectedIndex ? "w-10 bg-emerald-900 shadow-md" : "w-2.5 bg-emerald-500/30 hover:bg-emerald-500"
                }`}
                onClick={() => scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
