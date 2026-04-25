import { BookOpen } from "lucide-react";
import { NAV_LINKS, SITE_NAME, SITE_TAGLINE } from "@/constants/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#9BC7EC] to-[#C4E5FB] flex items-center justify-center">
                <BookOpen size={18} className="text-white" strokeWidth={2.5} />
              </div>
              <span
                className="font-bold text-base"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                ULIS BOOK{" "}
                <span className="text-[#9BC7EC]">– LOOP</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{SITE_TAGLINE}</p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h3 className="font-semibold text-sm uppercase tracking-widest text-slate-400 mb-4">
              Điều hướng
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white text-sm transition-colors hover:underline underline-offset-4"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-slate-400 mb-4">
              Liên hệ
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:ulisbookloop@gmail.com"
                  className="text-slate-300 hover:text-white text-sm transition-colors"
                >
                  ulisbookloop@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white text-sm transition-colors"
                >
                  ULIS Book – Loop
                </a>
              </li>
              <li className="text-slate-300 text-sm">
                Trường Đại học Ngoại ngữ – ĐHQGHN
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-slate-500 text-sm">
            © {year} <span className="text-slate-300 font-medium">{SITE_NAME}</span>. Tất cả quyền được bảo lưu.
          </p>
          <p className="text-slate-600 text-xs">
            Được xây dựng với ❤️ bởi sinh viên ULIS
          </p>
        </div>
      </div>
    </footer>
  );
}
