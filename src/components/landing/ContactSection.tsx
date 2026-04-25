"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, ExternalLink, Send } from "lucide-react";
import { CONTACT } from "@/constants/site";
import { SMOOTH_EASE } from "@/constants/motion";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      action: "Gửi email",
      ActionIcon: Send,
    },
    {
      icon: FacebookIcon,
      label: "Fanpage",
      value: CONTACT.fanpage,
      href: "https://www.facebook.com",
      action: "Theo dõi Fanpage",
      ActionIcon: ExternalLink,
    },
    {
      icon: MapPin,
      label: "Địa điểm",
      value: CONTACT.address,
      href: "https://maps.google.com/?q=Đại+học+Ngoại+ngữ+ĐHQGHN",
      action: "Xem bản đồ",
      ActionIcon: ExternalLink,
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-2 justify-center mb-4">
            <div className="h-px w-10 bg-[#9BC7EC]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9BC7EC]">
              Liên hệ
            </span>
            <div className="h-px w-10 bg-[#9BC7EC]" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] font-display mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Liên hệ với ULIS BOOK – LOOP
          </h2>
          <p className="text-[#475569] text-lg max-w-xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact cards */}
          <div className="grid gap-4 mb-10">
            {contactItems.map(({ icon: Icon, label, value, href, action, ActionIcon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: SMOOTH_EASE }}
                className="flex items-center gap-5 bg-[#E3FDFE] rounded-2xl p-5 border border-[#C1DDF3]/50 hover:bg-[#DAF1FE] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#9BC7EC] to-[#AFD6F8] flex items-center justify-center flex-shrink-0 shadow-md shadow-[#9BC7EC]/20">
                  <Icon className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#9BC7EC] mb-0.5">
                    {label}
                  </p>
                  <p className="font-semibold text-[#0F172A] truncate">{value}</p>
                </div>
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center gap-1.5 btn-primary text-white text-xs font-semibold px-4 py-2 rounded-xl"
                  aria-label={`${action} – ${value}`}
                >
                  {action}
                  <ActionIcon size={13} />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="relative bg-gradient-to-br from-[#9BC7EC] to-[#7AAFE0] rounded-3xl p-8 text-center overflow-hidden"
          >
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" aria-hidden="true" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-white/10" aria-hidden="true" />
            <div className="relative z-10">
              <p className="text-4xl mb-4" aria-hidden="true">📚</p>
              <blockquote className="text-white font-semibold text-lg sm:text-xl leading-relaxed font-display" style={{ fontFamily: "'Playfair Display', serif" }}>
                &ldquo;Hãy cùng ULIS BOOK – LOOP dọn tủ sách cũ – không lo thiếu sách trong năm học mới!&rdquo;
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
