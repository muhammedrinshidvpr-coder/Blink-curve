"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-[#E2E8F0] shadow-[0_1px_12px_rgba(15,23,42,0.06)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-[#2563EB] flex items-center justify-center shadow-[0_2px_8px_rgba(37,99,235,0.35)] group-hover:shadow-[0_4px_16px_rgba(37,99,235,0.45)] transition-shadow">
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                  <path d="M3 15 Q10 15 10 10 Q10 5 17 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  <circle cx="10" cy="10" r="2.5" fill="white" fillOpacity="0.9"/>
                  <path d="M6.5 10 L13.5 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1.5 2.5" opacity="0.6"/>
                </svg>
              </div>
              <span className="font-bold text-[#0F172A] text-[17px] tracking-tight">
                Blind<span className="text-[#2563EB]">Sight</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150",
                    pathname === link.href
                      ? "text-[#2563EB] bg-[#EFF6FF]"
                      : "text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="text-sm font-medium text-[#475569] hover:text-[#0F172A] transition-colors px-3 py-2 rounded-lg hover:bg-[#F1F5F9]"
              >
                Contact
              </Link>
              <Link
                href="/#waitlist"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#2563EB] text-white text-sm font-semibold shadow-[0_1px_2px_rgba(37,99,235,0.2),0_4px_12px_rgba(37,99,235,0.2)] hover:bg-[#1D4ED8] hover:shadow-[0_2px_4px_rgba(37,99,235,0.25),0_8px_20px_rgba(37,99,235,0.25)] transition-all duration-200"
              >
                Join Waitlist
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-16 z-40 bg-white border-b border-[#E2E8F0] shadow-[0_8px_32px_rgba(15,23,42,0.1)] md:hidden"
          >
            <nav className="px-6 py-3 flex flex-col gap-0.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-[#2563EB] bg-[#EFF6FF]"
                      : "text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="px-4 py-3 rounded-lg text-sm font-medium text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors">
                Contact
              </Link>
              <div className="pt-2 pb-1">
                <Link
                  href="/#waitlist"
                  className="flex items-center justify-center w-full py-3 rounded-xl bg-[#2563EB] text-white text-sm font-semibold"
                >
                  Join Waitlist
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
