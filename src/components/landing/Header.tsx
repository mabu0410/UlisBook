"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/constants/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm shadow-[#9BC7EC]/20 border-b border-[#C1DDF3]/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#9BC7EC] to-[#C4E5FB] flex items-center justify-center shadow-md shadow-[#9BC7EC]/30 group-hover:shadow-[#9BC7EC]/50 transition-shadow">
              <BookOpen size={18} className="text-white" strokeWidth={2.5} />
            </div>
            <span
              className="font-display font-bold text-[#0F172A] text-base leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              ULIS BOOK
              <span className="text-[#9BC7EC]"> – LOOP</span>
            </span>
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Điều hướng chính">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-[#475569] hover:text-[#0F172A] hover:bg-[#DAF1FE] rounded-xl transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => handleNavClick("#contact")}
              className="hidden sm:flex btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Đăng sách ngay"
            >
              Đăng sách ngay
            </motion.button>
            <button
              className="md:hidden p-2 rounded-xl text-[#475569] hover:bg-[#DAF1FE] transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-[#C1DDF3]/40"
          >
            <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Điều hướng mobile">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-[#0F172A] font-medium rounded-xl hover:bg-[#DAF1FE] transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
                onClick={() => handleNavClick("#contact")}
                className="mt-2 btn-primary text-white font-semibold px-4 py-3 rounded-xl text-center"
              >
                Đăng sách ngay
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
