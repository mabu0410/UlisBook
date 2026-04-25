import { Mail, MapPin, ExternalLink, Send } from "lucide-react";
import { CONTACT } from "@/constants/site";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    action: "Gửi email",
    actionIcon: Send,
  },
  {
    icon: FacebookIcon,
    label: "Fanpage",
    value: CONTACT.fanpage,
    href: "https://www.facebook.com",
    action: "Theo dõi",
    actionIcon: ExternalLink,
  },
  {
    icon: MapPin,
    label: "Địa điểm",
    value: CONTACT.address,
    href: "https://maps.google.com/?q=Đại+học+Ngoại+ngữ+ĐHQGHN",
    action: "Xem bản đồ",
    actionIcon: ExternalLink,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-reveal="fade-up" className="section-kicker justify-center text-center">
          Liên hệ
        </div>
        <h2
          data-reveal="fade-up"
          data-reveal-delay="80"
          className="mb-4 text-center text-3xl font-bold text-[#0F172A] sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Kết nối với ULIS BOOK – LOOP
        </h2>
        <p data-reveal="fade-up" data-reveal-delay="140" className="mx-auto mb-14 max-w-xl text-center text-lg text-[#475569]">
          Đội ngũ luôn sẵn sàng hỗ trợ bạn trong quá trình tìm hoặc đăng bán giáo trình.
        </p>

        <div data-reveal="stagger" className="mx-auto mb-10 grid max-w-3xl gap-4">
          {contactItems.map(({ icon: Icon, label, value, href, action, actionIcon: ActionIcon }) => (
            <article key={label} className="card flex items-center gap-5 rounded-2xl border border-[#C1DDF3]/50 bg-[#E3FDFE] p-5">
              <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#9BC7EC] to-[#AFD6F8] text-white shadow-md shadow-[#9BC7EC]/20">
                <Icon />
              </span>
              <div className="min-w-0 flex-1">
                <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-[#6BAED6]">{label}</p>
                <p className="truncate font-semibold text-[#0F172A]">{value}</p>
              </div>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="btn-primary inline-flex flex-shrink-0 items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold text-white"
                aria-label={`${action} – ${value}`}
              >
                {action}
                <ActionIcon size={13} />
              </a>
            </article>
          ))}
        </div>

        <blockquote
          data-reveal="fade-up"
          className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#8BBEE7] to-[#6FAADB] p-8 text-center"
        >
          <span className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" aria-hidden="true" />
          <span className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-white/10" aria-hidden="true" />
          <div className="relative z-10">
            <p className="mb-4 text-4xl" aria-hidden="true">
              📚
            </p>
            <p
              className="text-lg font-semibold leading-relaxed text-white sm:text-xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              “Hãy cùng ULIS BOOK – LOOP dọn tủ sách cũ, không lo thiếu giáo trình trong năm học mới.”
            </p>
          </div>
        </blockquote>
      </div>
    </section>
  );
}
