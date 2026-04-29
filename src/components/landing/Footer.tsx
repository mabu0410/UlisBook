import { MapPin, Mail, Phone } from "lucide-react";

const QUICK_LINKS = [
  { label: "Trang chủ", href: "#hero" },
  { label: "Lợi ích", href: "#features" },
  { label: "Hướng dẫn", href: "#benefits" },
  { label: "Đánh giá", href: "#reviews" },
  { label: "Liên hệ", href: "#contact" },
];

const SUPPORT_LINKS = [
  { label: "Câu hỏi thường gặp", href: "#" },
  { label: "Hướng dẫn sử dụng", href: "#" },
  { label: "Điều khoản dịch vụ", href: "#" },
  { label: "Chính sách bảo mật", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-darkest py-16 text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-light/20 to-transparent" />
      
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          
          <div className="lg:col-span-1">
            <a href="#hero" className="inline-flex items-center gap-2 mb-6 group">
              <span className="font-heading text-2xl font-bold tracking-wide text-white group-hover:text-brand-light transition-colors">
                ULIS BOOK LOOP
              </span>
            </a>
            <p className="text-sm text-brand-muted leading-relaxed mb-8">
              Nền tảng trao đổi giáo trình lớn nhất dành riêng cho sinh viên Đại học Ngoại ngữ - ĐHQGHN. Kết nối, tiết kiệm và lan tỏa tri thức.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-brand-light transition-all hover:bg-brand-medium hover:text-brand-darkest hover:scale-110">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-brand-light transition-all hover:bg-brand-medium hover:text-brand-darkest hover:scale-110">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-brand-light transition-all hover:bg-brand-medium hover:text-brand-darkest hover:scale-110">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-1 lg:ml-12">
            <h3 className="font-heading text-lg font-bold text-white mb-6">Liên Kết Nhanh</h3>
            <ul className="space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a className="group flex items-center text-sm text-brand-muted transition-all hover:text-brand-light" href={link.href}>
                    <span className="w-0 overflow-hidden transition-all duration-300 group-hover:w-3 group-hover:mr-2 text-brand-light">▹</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-heading text-lg font-bold text-white mb-6">Hỗ Trợ</h3>
            <ul className="space-y-4">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.label}>
                  <a className="group flex items-center text-sm text-brand-muted transition-all hover:text-brand-light" href={link.href}>
                    <span className="w-0 overflow-hidden transition-all duration-300 group-hover:w-3 group-hover:mr-2 text-brand-light">▹</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-heading text-lg font-bold text-white mb-6">Thông Tin</h3>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-light shrink-0 mt-0.5" />
                <span>Số 2 Phạm Văn Đồng, Cầu Giấy, Hà Nội</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-light shrink-0" />
                <span>ulisbookloop@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-light shrink-0" />
                <span>0988 123 456</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-brand-muted">
            © {new Date().getFullYear()} ULIS BOOK LOOP. All rights reserved.
          </p>
          <p className="text-sm text-brand-muted">
            Thiết kế & Phát triển với ❤️ bởi sinh viên ULIS
          </p>
        </div>
      </div>
    </footer>
  );
}
