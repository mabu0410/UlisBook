import Image from "next/image";
import {
  Search,
  Wallet,
  RefreshCw,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { LANDING_IMAGES } from "@/constants/images";

const highlights = [
  { label: "Tìm sách nhanh", icon: Search },
  { label: "Tiết kiệm chi phí", icon: Wallet },
  { label: "Tái sử dụng giáo trình", icon: RefreshCw },
  { label: "Kết nối cộng đồng", icon: Users },
];

export default function HeroSection() {
  const hero = LANDING_IMAGES.heroBg;
  const students = LANDING_IMAGES.heroStudents;

  return (
    <section
      id="hero"
      data-hero
      className="hero-section relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <Image
        src={hero.src}
        alt={hero.alt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        placeholder="blur"
        blurDataURL={hero.blurDataURL}
        className="hero-parallax-image object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.78),rgba(15,23,42,0.46)_45%,rgba(15,23,42,0.5))]" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <div
            data-reveal="fade-up"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/95 backdrop-blur"
          >
            <Sparkles size={12} className="text-[#DAF1FE]" />
            Dành cho sinh viên ULIS
          </div>

          <h1
            data-reveal="fade-up"
            data-reveal-delay="80"
            className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Trao sách cũ
            <br />
            <span className="text-[#DAF1FE]">Nhận tri thức</span>
          </h1>

          <p
            data-reveal="fade-up"
            data-reveal-delay="160"
            className="hero-typing mb-8 max-w-xl text-lg text-white/90"
          >
            Trao sách cũ – Nhận tri thức
          </p>

          <p
            data-reveal="fade-up"
            data-reveal-delay="220"
            className="mb-10 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
          >
            ULIS BOOK – LOOP kết nối sinh viên trong trường để trao đổi, mua bán giáo trình cũ nhanh hơn,
            minh bạch hơn và tiết kiệm chi phí ngay từ học kỳ đầu.
          </p>

          <div
            data-reveal="fade-up"
            data-reveal-delay="280"
            className="mb-12 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#how-it-works" className="btn-primary inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-base font-semibold text-white">
              Tìm giáo trình ngay
              <Search size={17} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/35 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Đăng bán sách cũ
              <ArrowRight size={17} />
            </a>
          </div>

          <div data-reveal="stagger" className="grid grid-cols-2 gap-3">
            {highlights.map(({ label, icon: Icon }) => (
              <div key={label} className="card flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 backdrop-blur">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-[#DAF1FE]/90 text-[#0F172A]">
                  <Icon size={14} />
                </span>
                <span className="text-xs font-medium text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          data-reveal="scale-in"
          data-reveal-delay="220"
          className="relative hidden justify-self-end lg:block"
        >
          <div className="glass-card card max-w-[380px] rounded-3xl p-4 shadow-2xl shadow-[#0B1220]/35">
            <Image
              src={students.src}
              alt={students.alt}
              width={students.width}
              height={students.height}
              priority
              sizes="100vw"
              placeholder="blur"
              blurDataURL={students.blurDataURL}
              className="rounded-2xl object-cover"
            />
            <div className="mt-4 rounded-2xl border border-white/40 bg-white/85 p-4 text-[#0F172A]">
              <p className="text-sm font-semibold">500+ sinh viên đã tham gia cộng đồng</p>
              <p className="mt-1 text-xs text-[#334155]">
                Theo dõi giáo trình đúng mã học phần và liên hệ trực tiếp với người bán trong vài phút.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
