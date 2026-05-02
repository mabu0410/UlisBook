"use client";

import { useEffect, useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const NAV_LINKS = [
  { label: "Trang chủ", href: "#hero" },
  { label: "Lợi ích", href: "#features" },
  { label: "Hướng dẫn", href: "#how-it-works" },
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
      className={`fixed left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl rounded-full transition-all duration-500 ${
        isScrolled
          ? "top-4 bg-white/70 backdrop-blur-xl border border-emerald-100/70 shadow-lg py-2"
          : "top-6 bg-white/40 backdrop-blur-md border border-emerald-100/50 py-3"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="inline-flex items-center gap-3 group" onClick={closeMenu}>
          <div className="relative">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl overflow-hidden shadow-lg shadow-brand-muted/50 transition-transform group-hover:scale-105 bg-white p-1">
              <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          <span className="font-heading text-lg font-bold tracking-wide text-emerald-950">
            ULIS BOOK LOOP
          </span>
        </a>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-all hover:bg-emerald-50 hover:text-emerald-600"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            className="ml-3 group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 px-6 py-2.5 text-sm font-semibold text-white shadow-xl shadow-emerald-500/20 transition-all hover:scale-105 hover:shadow-emerald-500/40"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
            <span>Đăng ký ngay</span>
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full p-2.5 text-emerald-950 hover:bg-emerald-50 md:hidden transition-colors"
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
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-2xl border-t border-emerald-100 absolute top-full left-0 right-0 shadow-2xl"
          >
            <nav className="space-y-1 px-4 py-6" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-600"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#register"
                  onClick={closeMenu}
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 px-4 py-4 text-base font-bold text-white transition-transform hover:scale-[1.02] shadow-xl shadow-emerald-500/20"
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
