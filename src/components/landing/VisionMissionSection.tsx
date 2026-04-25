import Image from "next/image";
import { Target, Heart, Leaf, HandHeart } from "lucide-react";
import { LANDING_IMAGES } from "@/constants/images";

const missionItems = [
  "Giúp sinh viên giảm chi phí học tập với kênh trao đổi minh bạch.",
  "Xây dựng cộng đồng chia sẻ giáo trình theo từng khoa/ngành của ULIS.",
  "Thúc đẩy thói quen tái sử dụng tài nguyên học tập bền vững.",
];

const visionGallery = [
  LANDING_IMAGES.visionCampus,
  LANDING_IMAGES.visionStudy,
  LANDING_IMAGES.visionCommunity,
];

export default function VisionMissionSection() {
  return (
    <section
      id="vision"
      className="py-24 sm:py-32"
      style={{ background: "linear-gradient(135deg, #E3FDFE 0%, #DAF1FE 100%)" }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-reveal="fade-up" className="section-kicker justify-center text-center">
          Định hướng
        </div>
        <h2
          data-reveal="fade-up"
          data-reveal-delay="80"
          className="mb-14 text-center text-3xl font-bold text-[#0F172A] sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Tầm nhìn và sứ mệnh
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">
          <article
            data-reveal="fade-right"
            className="card relative overflow-hidden rounded-3xl border border-[#9BC7EC]/35 bg-white p-8 shadow-lg shadow-[#9BC7EC]/15"
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-gradient-to-bl from-[#DAF1FE] to-transparent" aria-hidden="true" />
            <div className="relative z-10">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#9BC7EC] to-[#AFD6F8] text-white">
                <Target size={22} />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-[#0F172A]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Tầm nhìn
              </h3>
              <p className="mb-6 leading-relaxed text-[#475569]">
                Trở thành nền tảng trao đổi giáo trình hàng đầu trong cộng đồng sinh viên ULIS,
                sau đó có thể mở rộng mô hình cho các trường đại học khác.
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                {visionGallery.map((image, index) => (
                  <figure key={image.src} className="gallery-item overflow-hidden rounded-2xl">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      loading="lazy"
                      sizes="(min-width: 1024px) 180px, 30vw"
                      placeholder="blur"
                      blurDataURL={image.blurDataURL}
                      data-lazy-fade="true"
                      className="image-lazy h-full w-full object-cover"
                      data-reveal-delay={String(120 + index * 80)}
                    />
                  </figure>
                ))}
              </div>
            </div>
          </article>

          <article
            data-reveal="fade-left"
            className="card relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#8BBEE7] to-[#6FAADB] p-8 text-white shadow-lg shadow-[#7AAFE0]/30"
          >
            <div className="absolute bottom-0 right-0 h-48 w-48 rounded-tl-full bg-white/10" aria-hidden="true" />
            <div className="relative z-10">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/40 bg-white/20">
                <Heart size={22} />
              </div>
              <h3 className="mb-4 text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Sứ mệnh
              </h3>

              <ul data-reveal="stagger" className="space-y-4">
                {missionItems.map((item, index) => {
                  const Icon = index === 0 ? Leaf : index === 1 ? HandHeart : Heart;
                  return (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-white/20">
                        <Icon size={14} />
                      </span>
                      <p className="text-sm leading-relaxed text-white/90">{item}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
