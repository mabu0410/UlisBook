const QUICK_LINKS = [
  { label: "Trang chủ", href: "#hero" },
  { label: "Về chúng tôi", href: "#benefits" },
  { label: "Lợi ích", href: "#register" },
  { label: "Cách thức", href: "#contact" },
  { label: "Đánh giá", href: "#reviews" },
];

const SUPPORT_LINKS = [
  { label: "Câu hỏi thường gặp", href: "#" },
  { label: "Hướng dẫn sử dụng", href: "#" },
  { label: "Điều khoản dịch vụ", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-darkest py-12 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="font-heading text-lg font-bold text-white">Liên Kết</h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a className="text-sm text-brand-muted transition hover:text-brand-dark" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-white">Hỗ Trợ</h3>
            <ul className="mt-4 space-y-2.5">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.label}>
                  <a className="text-sm text-brand-muted transition hover:text-brand-dark" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-center text-xs text-brand-muted sm:text-left">
          © {new Date().getFullYear()} ULIS BOOK LOOP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
