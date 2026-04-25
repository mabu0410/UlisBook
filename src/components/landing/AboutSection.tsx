import Image from "next/image";
import { BookOpen, Users, Sparkles } from "lucide-react";
import { LANDING_IMAGES } from "@/constants/images";

const features = [
  {
    icon: BookOpen,
    title: "Nền tảng chuyên biệt",
    desc: "Lọc theo khoa, mã học phần và tình trạng sách để tìm đúng giáo trình ngay lần đầu.",
  },
  {
    icon: Users,
    title: "Cộng đồng tin cậy",
    desc: "Kết nối trực tiếp giữa sinh viên ULIS, hạn chế nhiễu thông tin từ các nhóm rải rác.",
  },
  {
    icon: Sparkles,
    title: "Đơn giản và nhanh",
    desc: "Đăng bán hoặc tìm mua chỉ với vài thao tác, tối ưu cho điện thoại và desktop.",
  },
];

const stats = [
  { value: "500+", label: "Sinh viên" },
  { value: "200+", label: "Giáo trình" },
  { value: "4", label: "Khoa ngôn ngữ" },
];

export default function AboutSection() {
  const library = LANDING_IMAGES.aboutLibrary;
  const books = LANDING_IMAGES.aboutBooks;

  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <div data-reveal="fade-up" className="section-kicker">
            Về dự án
          </div>
          <h2
            data-reveal="fade-up"
            data-reveal-delay="80"
            className="mb-6 text-3xl font-bold text-[#0F172A] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            ULIS BOOK – LOOP là gì?
          </h2>

          <p data-reveal="fade-up" data-reveal-delay="150" className="mb-8 text-lg leading-relaxed text-[#475569]">
            ULIS BOOK – LOOP là landing page kết nối sinh viên ULIS trong việc trao đổi giáo trình cũ.
            Mục tiêu là giảm lãng phí sách, giảm chi phí đầu kỳ và tăng khả năng tiếp cận tài liệu cho toàn
            trường.
          </p>

          <div data-reveal="stagger" className="space-y-4">
            {features.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="card flex gap-4 rounded-2xl border border-[#C1DDF3]/50 bg-[#F8FCFF] p-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#9BC7EC] to-[#C4E5FB] text-white shadow-sm">
                  <Icon size={18} />
                </span>
                <div>
                  <h3 className="mb-1 font-semibold text-[#0F172A]">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#475569]">{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <div data-reveal="fade-left" className="grid grid-cols-12 gap-4">
            <div className="relative col-span-7 overflow-hidden rounded-3xl">
              <Image
                src={library.src}
                alt={library.alt}
                width={library.width}
                height={library.height}
                loading="lazy"
                sizes="(min-width: 1024px) 360px, 60vw"
                placeholder="blur"
                blurDataURL={library.blurDataURL}
                data-lazy-fade="true"
                className="image-lazy h-full w-full object-cover"
              />
            </div>
            <div className="relative col-span-5 overflow-hidden rounded-3xl">
              <Image
                src={books.src}
                alt={books.alt}
                width={books.width}
                height={books.height}
                loading="lazy"
                sizes="(min-width: 1024px) 260px, 40vw"
                placeholder="blur"
                blurDataURL={books.blurDataURL}
                data-lazy-fade="true"
                className="image-lazy h-full w-full object-cover"
              />
            </div>
          </div>

          <div data-reveal="fade-up" data-reveal-delay="120" data-stats className="mt-6 grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[#C1DDF3]/50 bg-[#EAF7FF] p-4 text-center">
                <p
                  data-counter-target={stat.value}
                  className="text-2xl font-bold text-[#0F172A]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  0
                </p>
                <p className="text-xs font-medium text-[#475569]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
