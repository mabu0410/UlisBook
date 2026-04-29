"use client";

import { useEffect, useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Trang chủ", href: "#hero" },
  { label: "Về chúng tôi", href: "#benefits" },
  { label: "Lợi ích", href: "#register" },
  { label: "Cách thức", href: "#contact" },
  { label: "Đánh giá", href: "#reviews" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-light bg-white/70 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="inline-flex items-center gap-2.5 group" onClick={closeMenu}>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-medium text-white shadow-lg shadow-brand-muted/50 transition-transform group-hover:scale-110">
            <BookOpen size={18} />
          </span>
          <span className="font-heading text-sm font-bold tracking-wide text-brand-darkest sm:text-base">
            ULIS BOOK LOOP
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-brand-darkest transition hover:bg-brand-light/50 hover:text-brand-darkest"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            className="ml-2 inline-flex items-center rounded-lg bg-brand-darkest px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-muted/50 transition hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_0_15px_rgba(155,199,236,0.6)]"
          >
            Đăng ký ngay
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-brand-darkest hover:bg-brand-light/50 md:hidden transition"
          aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            id="mobile-nav"
            className="md:hidden overflow-hidden border-t border-brand-light bg-white/95 backdrop-blur-md"
          >
            <nav className="space-y-1 px-4 py-4" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-brand-darkest transition hover:bg-brand-light/50"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#register"
                onClick={closeMenu}
                className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-brand-darkest px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark shadow-lg shadow-brand-muted/50"
              >
                Đăng ký tham gia ngay
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
