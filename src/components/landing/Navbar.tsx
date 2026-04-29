"use client";

import { useEffect, useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const NAV_LINKS = [
  { label: "Trang chủ", href: "#hero" },
  { label: "Lợi ích", href: "#features" },
  { label: "Hướng dẫn", href: "#benefits" },
  { label: "Đánh giá", href: "#reviews" },
  { label: "Liên hệ", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-brand-light/50 shadow-sm py-2"
          : "bg-transparent border-b-transparent py-4"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="inline-flex items-center gap-2.5 group" onClick={closeMenu}>
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-brand-medium/40 blur-md transition-opacity group-hover:opacity-100 opacity-0"></div>
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-medium text-white shadow-lg shadow-brand-muted/50 transition-transform group-hover:scale-105">
              <BookOpen size={20} />
            </span>
          </div>
          <span className="font-heading text-lg font-bold tracking-wide text-brand-darkest">
            ULIS BOOK LOOP
          </span>
        </a>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-all hover:bg-brand-lightest hover:text-brand-darkest"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            className="ml-3 group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brand-darkest px-6 py-2.5 text-sm font-semibold text-white shadow-xl shadow-brand-muted/50 transition-all hover:scale-105 hover:shadow-brand-medium/40"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
            <span>Đăng ký ngay</span>
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full p-2.5 text-brand-darkest hover:bg-brand-lightest md:hidden transition-colors"
          aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            id="mobile-nav"
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-2xl border-t border-brand-light absolute top-full left-0 right-0 shadow-2xl"
          >
            <nav className="space-y-1 px-4 py-6" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-brand-lightest hover:text-brand-darkest"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#register"
                  onClick={closeMenu}
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-brand-darkest px-4 py-4 text-base font-bold text-white transition-transform hover:scale-[1.02] shadow-xl shadow-brand-muted/50"
                >
                  Đăng ký tham gia ngay
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
