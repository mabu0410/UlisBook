import Image from "next/image";
import {
  Search,
  SlidersHorizontal,
  MessageCircle,
  Camera,
  PercentCircle,
  Send,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LANDING_IMAGES } from "@/constants/images";

const buySteps = [
  {
    icon: SlidersHorizontal,
    step: "01",
    title: "Lọc sách theo khoa",
    desc: "Chọn khoa/ngành để thu hẹp nhanh danh sách giáo trình cần thiết.",
  },
  {
    icon: Search,
    step: "02",
    title: "Tìm theo mã học phần",
    desc: "Tra cứu chính xác theo học phần của chương trình đào tạo.",
  },
  {
    icon: MessageCircle,
    step: "03",
    title: "Liên hệ người bán",
    desc: "Xem tình trạng sách và chốt điểm giao trực tiếp trong trường.",
  },
];

const sellSteps = [
  {
    icon: Camera,
    step: "01",
    title: "Chụp ảnh sách",
    desc: "Đảm bảo ảnh rõ nét để người mua đánh giá đúng chất lượng.",
  },
  {
    icon: PercentCircle,
    step: "02",
    title: "Chọn tình trạng",
    desc: "Đánh giá sách theo thang 70% - 90% để minh bạch thông tin.",
  },
  {
    icon: Send,
    step: "03",
    title: "Đăng tải ngay",
    desc: "Tin đăng xuất hiện ngay và sẵn sàng nhận liên hệ từ người mua.",
  },
];

function StepCard({
  icon: Icon,
  step,
  title,
  desc,
  isLast,
}: {
  icon: LucideIcon;
  step: string;
  title: string;
  desc: string;
  isLast: boolean;
}) {
  return (
    <div className="relative flex gap-4 pb-6 last:pb-0">
      {!isLast && (
        <span
          className="absolute left-5 top-12 h-[calc(100%-1.25rem)] w-0.5 bg-gradient-to-b from-[#9BC7EC] to-[#C4E5FB]"
          aria-hidden="true"
        />
      )}
      <span className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#9BC7EC] to-[#AFD6F8] text-white">
        <Icon size={18} />
      </span>
      <div>
        <p className="text-xs font-bold tracking-widest text-[#6BAED6]">Bước {step}</p>
        <h3 className="mb-1 font-semibold text-[#0F172A]">{title}</h3>
        <p className="text-sm leading-relaxed text-[#475569]">{desc}</p>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  const howImage = LANDING_IMAGES.howBookExchange;

  return (
    <section id="how-it-works" className="bg-white py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-reveal="fade-up" className="section-kicker justify-center text-center">
          Hướng dẫn sử dụng
        </div>
        <h2
          data-reveal="fade-up"
          data-reveal-delay="80"
          className="mb-6 text-center text-3xl font-bold text-[#0F172A] sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Mua và bán giáo trình trong 60 giây
        </h2>

        <figure data-reveal="scale-in" data-reveal-delay="120" className="gallery-item mb-10 overflow-hidden rounded-3xl">
          <Image
            src={howImage.src}
            alt={howImage.alt}
            width={howImage.width}
            height={howImage.height}
            loading="lazy"
            sizes="(min-width: 1024px) 1120px, 100vw"
            placeholder="blur"
            blurDataURL={howImage.blurDataURL}
            data-lazy-fade="true"
            className="image-lazy h-full w-full object-cover"
          />
        </figure>

        <div className="grid gap-8 lg:grid-cols-2">
          <article data-reveal="fade-right" className="card rounded-3xl border border-[#C1DDF3]/50 bg-[#E3FDFE] p-7">
            <h3 className="mb-7 text-lg font-bold text-[#0F172A]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Hướng dẫn tìm/mua sách
            </h3>
            <div data-reveal="stagger">
              {buySteps.map((step, index) => (
                <StepCard key={step.step} {...step} isLast={index === buySteps.length - 1} />
              ))}
            </div>
          </article>

          <article data-reveal="fade-left" className="card rounded-3xl bg-gradient-to-br from-[#8BBEE7] to-[#6FAADB] p-7 text-white">
            <h3 className="mb-7 text-lg font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              3 bước đăng bán nhanh
            </h3>
            <div data-reveal="stagger" className="space-y-4">
              {sellSteps.map(({ icon: Icon, step, title, desc }) => (
                <div key={step} className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-white/30 bg-white/20">
                    <Icon size={16} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-white/70">Bước {step}</p>
                    <h4 className="font-semibold text-white">{title}</h4>
                    <p className="text-sm text-white/85">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-white/25 bg-white/15 px-4 py-3 text-sm font-semibold text-white">
              <CheckCircle2 size={18} />
              Hoàn tất đăng bán dưới 1 phút
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
