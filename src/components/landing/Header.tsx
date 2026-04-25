"use client";

import { useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      data-site-header
      className="site-header fixed inset-x-0 top-0 z-50 border-b border-transparent"
    >
      <div className="site-header-inner mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="group inline-flex items-center gap-2.5 rounded-lg px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6BAED6]">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#9BC7EC] to-[#C4E5FB] shadow-md shadow-[#9BC7EC]/30 transition-shadow group-hover:shadow-[#9BC7EC]/50">
            <BookOpen size={18} className="text-white" strokeWidth={2.5} />
          </span>
          <span
            className="font-display text-base font-bold leading-tight text-[#0F172A]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            ULIS BOOK <span className="text-[#6BAED6]">– LOOP</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Điều hướng chính">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-2 text-sm font-medium text-[#475569] transition-colors hover:bg-[#DAF1FE] hover:text-[#0F172A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6BAED6]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="btn-primary hidden rounded-xl px-5 py-2.5 text-sm font-semibold text-white sm:inline-flex"
          >
            Đăng sách ngay
          </a>
          <button
            type="button"
            className="rounded-xl p-2 text-[#475569] transition-colors hover:bg-[#DAF1FE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6BAED6] md:hidden"
            aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`mobile-nav md:hidden ${mobileOpen ? "open" : ""}`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Điều hướng mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleMobileLinkClick}
              className="rounded-xl px-4 py-3 text-left font-medium text-[#0F172A] transition-colors hover:bg-[#DAF1FE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6BAED6]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleMobileLinkClick}
            className="btn-primary mt-2 rounded-xl px-4 py-3 text-center font-semibold text-white"
          >
            Đăng sách ngay
          </a>
        </nav>
      </div>
    </header>
  );
}
