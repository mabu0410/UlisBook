import Image from "next/image";
import { BookOpen, ArrowRight } from "lucide-react";
import { LANDING_IMAGES } from "@/constants/images";

export default function CTASection() {
  const ctaImage = LANDING_IMAGES.ctaStudents;

  return (
    <section id="cta" className="relative overflow-hidden py-24 sm:py-32">
      <Image
        src={ctaImage.src}
        alt={ctaImage.alt}
        fill
        loading="lazy"
        sizes="100vw"
        placeholder="blur"
        blurDataURL={ctaImage.blurDataURL}
        data-lazy-fade="true"
        className="image-lazy object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.84),rgba(15,23,42,0.6))]" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div data-reveal="scale-in" className="glass-card mx-auto rounded-[2rem] border border-white/35 p-10 sm:p-14">
          <span className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#9BC7EC] to-[#7AAFE0] text-white shadow-lg shadow-[#9BC7EC]/35">
            <BookOpen size={28} />
          </span>

          <h2
            className="mb-4 text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Sẵn sàng trao đổi giáo trình cùng cộng đồng ULIS?
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#334155]">
            Bắt đầu đăng sách cũ hoặc tìm giáo trình bạn cần chỉ với vài thao tác đơn giản.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#how-it-works"
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold text-white"
            >
              <BookOpen size={18} />
              Khám phá sách
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0F172A] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#1E293B]"
            >
              Đăng sách ngay
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
