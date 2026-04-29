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
  {
    name: "Trần Minh Tùng",
    emoji: "👨‍🎓",
    faculty: "Khoa Sư phạm Tiếng Anh",
    avatar: "/images/1.jpeg",
    quote:
      "Tuyệt vời! Việc tìm kiếm giáo trình cũ trở nên dễ dàng hơn bao giờ hết. Cảm ơn đội ngũ đã tạo ra một nền tảng hữu ích cho sinh viên.",
  }
];

export default function ReviewSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000, stopOnInteraction: true }),
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
      <div className="absolute inset-0 bg-gradient-to-b from-brand-lightest/50 to-white pointer-events-none" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-12"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-lighter text-brand-darkest text-sm font-semibold tracking-wider uppercase mb-4">
            Đánh Giá Thực Tế
          </span>
          <h2 className="font-heading text-3xl font-bold text-brand-darkest sm:text-4xl">
            Sinh viên ULIS nói gì về chúng tôi?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 font-medium">
            Những trải nghiệm thực tế từ sinh viên đã tham gia trao đổi giáo trình.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing pb-8 -mx-4 px-4 sm:mx-0 sm:px-0" ref={emblaRef}>
            <div className="flex backface-hidden -ml-4">
              {REVIEWS.map((review, i) => (
                <div key={i} className="pl-4 min-w-[85%] sm:min-w-[50%] lg:min-w-[33.333%] shrink-0">
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative h-full rounded-[2rem] border border-brand-light bg-white p-6 sm:p-8 shadow-xl shadow-brand-muted/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-muted/40 group"
                  >
                    <div className="absolute top-6 right-6 text-brand-light transition-colors duration-300 group-hover:text-brand-medium/50">
                      <Quote size={40} fill="currentColor" />
                    </div>
                    
                    <div className="mb-6 flex items-center gap-4 relative z-10">
                      <div className="relative h-16 w-16 overflow-hidden rounded-full ring-4 ring-brand-lightest group-hover:ring-brand-light transition-all">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-base font-bold text-brand-darkest">{review.name} {review.emoji}</p>
                        <p className="text-sm text-brand-medium font-semibold">{review.faculty}</p>
                      </div>
                    </div>

                    <p className="text-base leading-relaxed text-slate-600 relative z-10 italic">
                      "{review.quote}"
                    </p>
                    
                    <div className="mt-6 flex gap-1 text-brand-medium">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </motion.article>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === selectedIndex ? "w-8 bg-brand-darkest" : "w-2.5 bg-brand-medium/40 hover:bg-brand-medium"
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
