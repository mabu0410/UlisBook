import Image from "next/image";
import { BookX, Shuffle, Clock, Trash2 } from "lucide-react";
import { LANDING_IMAGES } from "@/constants/images";

const problems = [
  {
    icon: BookX,
    title: "Khó tìm đúng giáo trình",
    desc: "Thiếu nơi lọc theo mã học phần khiến sinh viên mất thời gian tìm và hỏi lại nhiều lần.",
  },
  {
    icon: Shuffle,
    title: "Thông tin bị phân tán",
    desc: "Tin đăng nằm rải rác ở nhiều kênh, khó xác thực trạng thái còn bán hay đã hết.",
  },
  {
    icon: Clock,
    title: "Quy trình trao đổi chậm",
    desc: "Đăng bài, chờ phản hồi và xác nhận thủ công tạo nhiều bước thừa trong quá trình giao dịch.",
  },
  {
    icon: Trash2,
    title: "Sách cũ bị lãng phí",
    desc: "Nhiều giáo trình còn mới không được tái sử dụng sau học kỳ vì thiếu đầu ra phù hợp.",
  },
];

export default function ProblemSection() {
  const search = LANDING_IMAGES.problemSearch;
  const pile = LANDING_IMAGES.problemBooksPile;

  return (
    <section
      id="problems"
      className="py-24 sm:py-32"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #E3FDFE 100%)" }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-reveal="fade-up" className="section-kicker justify-center text-center">
          Vấn đề thực tế
        </div>
        <h2
          data-reveal="fade-up"
          data-reveal-delay="80"
          className="mx-auto mb-4 max-w-3xl text-center text-3xl font-bold text-[#0F172A] sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Sinh viên ULIS đang gặp khó khăn gì khi tìm giáo trình?
        </h2>
        <p data-reveal="fade-up" data-reveal-delay="150" className="mx-auto mb-12 max-w-2xl text-center text-lg text-[#475569]">
          Những bất cập này khiến chi phí học tập tăng và nguồn tài nguyên sách cũ chưa được tận dụng hiệu quả.
        </p>

        <div className="mb-10 grid gap-4 md:grid-cols-2">
          <figure data-reveal="fade-right" className="relative overflow-hidden rounded-3xl">
            <Image
              src={search.src}
              alt={search.alt}
              width={search.width}
              height={search.height}
              loading="lazy"
              sizes="(min-width: 768px) 50vw, 100vw"
              placeholder="blur"
              blurDataURL={search.blurDataURL}
              data-lazy-fade="true"
              className="image-lazy h-full w-full object-cover"
            />
          </figure>
          <figure data-reveal="fade-left" className="relative overflow-hidden rounded-3xl">
            <Image
              src={pile.src}
              alt={pile.alt}
              width={pile.width}
              height={pile.height}
              loading="lazy"
              sizes="(min-width: 768px) 50vw, 100vw"
              placeholder="blur"
              blurDataURL={pile.blurDataURL}
              data-lazy-fade="true"
              className="image-lazy h-full w-full object-cover"
            />
          </figure>
        </div>

        <div data-reveal="stagger" className="grid gap-5 sm:grid-cols-2">
          {problems.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="card rounded-3xl border border-[#C1DDF3]/50 bg-white p-6 shadow-sm shadow-[#9BC7EC]/10"
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C4E5FB] to-[#DAF1FE] text-[#4A90C4]">
                <Icon size={22} />
              </span>
              <h3 className="mb-2 text-lg font-semibold text-[#0F172A]">{title}</h3>
              <p className="text-sm leading-relaxed text-[#475569]">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
