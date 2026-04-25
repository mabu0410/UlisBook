import Image from "next/image";
import { LANDING_IMAGES } from "@/constants/images";

const galleryImages = [
  LANDING_IMAGES.galleryCampusMain,
  LANDING_IMAGES.galleryLibrary,
  LANDING_IMAGES.gallerySelfstudy,
  LANDING_IMAGES.galleryOutdoor,
  LANDING_IMAGES.galleryCommunity,
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-white py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-reveal="fade-up" className="section-kicker justify-center text-center">
          Không gian ULIS
        </div>
        <h2
          data-reveal="fade-up"
          data-reveal-delay="80"
          className="mb-4 text-center text-3xl font-bold text-[#0F172A] sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Gallery cộng đồng và khuôn viên học tập
        </h2>
        <p data-reveal="fade-up" data-reveal-delay="140" className="mx-auto mb-12 max-w-2xl text-center text-lg text-[#475569]">
          Hình ảnh được lưu local trên Vercel CDN, tối ưu cho tải nhanh và hiển thị ổn định trên mọi thiết bị.
        </p>

        <div className="grid gap-4 md:grid-cols-12">
          {galleryImages.map((image, index) => {
            const isMain = index === 0;
            const spanClass = isMain ? "md:col-span-7" : index === 1 ? "md:col-span-5" : "md:col-span-4";
            return (
              <figure
                key={image.src}
                data-reveal="scale-in"
                data-reveal-delay={String(80 + index * 70)}
                className={`gallery-item overflow-hidden rounded-3xl ${spanClass}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  sizes={
                    isMain
                      ? "(min-width: 768px) 58vw, 100vw"
                      : "(min-width: 768px) 32vw, 100vw"
                  }
                  placeholder="blur"
                  blurDataURL={image.blurDataURL}
                  data-lazy-fade="true"
                  className="image-lazy h-full w-full object-cover"
                />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
